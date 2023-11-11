import { Modal } from "./Modal";
import { RegistrationType } from "..";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cardNumber: string;
    visits: number;
}

class RegisterModal extends Modal {
    users: Array<User> = [];
    constructor(classes: string) {
        super(classes);
    }

    public renderModal(registrationType: RegistrationType) {
        const modalRegisterContent = this.getMenu(registrationType);
        super.buildModal(modalRegisterContent);

        const json = localStorage.getItem('users');
        (json) ? this.users = JSON.parse(json) : this.users = [];

        if (registrationType === RegistrationType.register) this.addValidation();

        this.modalRegisterChangerAddClickHandler();
        this.modalRegisterButtonAddClickHandler(registrationType);
    }

    private addValidation() {
        const email = document.querySelector('#email') as HTMLInputElement;

        email.addEventListener('blur', () => {
            this.getIndexOfUserInLocalStorage(email.value) !== -1 ? email.style.borderColor = 'red' : email.style.borderColor='';
        });
    }

    private getMenu(registrationType: RegistrationType) {
        const regiserMenu = `<span class="modal__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/></svg></span>
        <div class="modal-register__content">
            <h5 class="modal-register__header">register</h5>
            <form action="#" class="modal-register__form">
                <label class="modal-register__label" for="first-name">First name</label>
                <input class="modal-register__input" id="first-name" type="text" required>
                <label class="modal-register__label" for="last-name">Last name</label>
                <input class="modal-register__input" id="last-name" type="text" required>
                <label class="modal-register__label" for="email">E-mail</label>
                <input class="modal-register__input" id="email" type="email" required>
                <label class="modal-register__label" for="password">password</label>
                <input class="modal-register__input" id="password" type="password" required minlength="8">
                <button type="submit" class="button-registration modal-register__button">Sign Up</button>
                <p><span class="modal-register__qestion">Already have an account?</span><span class="modal-register__changer">Login</span></p>
            </form>
        </div>`;

        const loginMenu = `<span class="modal__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/></svg></span>
        <div class="modal-register__content">
            <h5 class="modal-register__header">login</h5>
            <form action="#" class="modal-register__form">
                <label class="modal-register__label" for="email-number">E-mail or readers card</label>
                <input class="modal-register__input" id="email-number" type="text" required>
                <label class="modal-register__label" for="password">password</label>
                <input class="modal-register__input" id="password" type="password" required minlength="8">
                <button type="submit" class="button-registration modal-register__button">Log In</button>
                <p><span class="modal-register__qestion">Already have an account?</span><span class="modal-register__changer">Register</span></p>
            </form>
        </div>`;

        return (registrationType === RegistrationType.register) ? regiserMenu :loginMenu;
    }

    private modalRegisterChangerAddClickHandler() {
        const modalRegisterChanger = document.querySelector('.modal-register__changer') as HTMLSpanElement;
        modalRegisterChanger.addEventListener('click', () => {
            (document.querySelector('.overlay') as HTMLElement).remove();
            if (modalRegisterChanger.innerHTML === 'Register') {
                this.renderModal(RegistrationType.register);
            } else if (modalRegisterChanger.innerHTML === 'Login') {
                this.renderModal(RegistrationType.login);
            }
        });
    }

    private modalRegisterButtonAddClickHandler(registerType: RegistrationType) {
        const form = document.querySelector('.modal-register__form') as HTMLFormElement;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (registerType === RegistrationType.register) {
                this.registerUser(form);
            }
            if (registerType === RegistrationType.login) {
                this.loginUser(form);
            }
            this.closeModal();
        })
    }

    private registerUser(form: HTMLFormElement) {
        const user: User = this.getUserData(form);

        if (this.getIndexOfUserInLocalStorage(user.email) === -1) {
            this.addUserToLocalStorage(user);
            this.makePageRegistred(user);
        }
    }

    private loginUser(form: HTMLFormElement) {
        const emailOrCardNumber = (form.querySelector('#email-number') as HTMLInputElement).value;
        const password = (form.querySelector('#password') as HTMLInputElement).value;
        const userNumber = this.getIndexOfUserInLocalStorage(emailOrCardNumber, password);
        
        if (userNumber !== -1) {
            const user = this.users[userNumber];
            user.visits++;
            this.makePageRegistred(user);
        }
    }

    private makePageRegistred(user: User) {
        (document.querySelectorAll('[data-state=unregistered]')).forEach((tag) => {
            tag.classList.add('hidden');
        });
        (document.querySelectorAll('[data-state=registered]')).forEach((tag) => {
            tag.classList.remove('hidden');
        });

        (document.querySelector('#check-form-first-name') as HTMLInputElement).placeholder = `${user.firstName} ${user.lastName}`;
        (document.querySelector('#check-form-card-number') as HTMLInputElement).placeholder = user.cardNumber;
        (document.querySelector('#check-form-visits') as HTMLDivElement).textContent = `${user.visits}`
        const headerInitials = document.querySelector('.header__initials') as HTMLSpanElement;
        headerInitials.title = `${user.firstName} ${user.lastName}`;
        headerInitials.textContent = `${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}`;
    }

    private makePageUnregistered() {
        (document.querySelectorAll('[data-state=unregistered]')).forEach((tag) => {
            tag.classList.remove('hidden');
        });
        (document.querySelectorAll('[data-state=registered]')).forEach((tag) => {
            tag.classList.add('hidden');
        })  
    }
    
    private getUserData(form: HTMLFormElement) {
        const user: User = {
            firstName: (form.querySelector('#first-name') as HTMLInputElement).value,
            lastName: (form.querySelector('#last-name') as HTMLInputElement).value,
            email: (form.querySelector('#email') as HTMLInputElement).value,
            password: (form.querySelector('#password') as HTMLInputElement).value,
            cardNumber: getRandomHex(9),
            visits: 1,
        };

        function getRandomHex(length: number) {
            return [...Array(length)].map (() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
        }

        return user;
    }

    private addUserToLocalStorage(user: User) {
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    } 

    private getIndexOfUserInLocalStorage(emailOrCardNumber: string, password?: string): number {
        let index: number;
        
        if (password) {
            index = this.users.findIndex((item) => (item.email === emailOrCardNumber && item.password === password) || (item.cardNumber === emailOrCardNumber && item.password === password));
        } else {
            index = this.users.findIndex((item) => item.email === emailOrCardNumber || item.cardNumber === emailOrCardNumber);
        }

        return index;
    } 
}

export { RegisterModal };