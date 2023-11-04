import { Modal } from "./Modal";

class RegisterModal extends Modal {
    constructor(classes: string) {
        super(classes)
    }

    private createRegister() {
        const modalRegisterContent = `<span class="modal__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/></svg></span>
        <div class="modal-register__content">
          <h5 class="modal-register__header">register</h5>
          <form class="modal-register__form">
            <label class="modal-register__label" for="first-name">First name</label>
            <input class="modal-register__input modal-register__first-name" id="first-name" type="text" required>
            <label class="modal-register__label" for="last-name">Last name</label>
            <input class="modal-register__input modal-register__last-name" id="last-name" type="text" required>
            <label class="modal-register__label" for="email">E-mail</label>
            <input class="modal-register__input modal-register__email" id="email" type="email" required>
            <label class="modal-register__label" for="password">password</label>
            <input class="modal-register__input modal-register__password" id="password" type="password" required minlength="8">
            <button class="button-registration modal-register__button">Sign Up</button>
            <p><span class="modal-register__qestion">Already have an account?</span><span class="modal-register__changer">Login</span></p>
          </form>
        </div>`;
        super.buildModal(modalRegisterContent);
        this.modalRegisterChangerAddClickHandler();
    }

    private createLogin() {
        const modalRegisterContent = `<span class="modal__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/></svg></span>
        <div class="modal-register__content">
          <h5 class="modal-register__header">login</h5>
          <form class="modal-register__form">
            <label class="modal-register__label" for="first-name">E-mail or readers card</label>
            <input class="modal-register__input modal-register__first-name" id="first-name" type="text" required>
            <label class="modal-register__label" for="password">password</label>
            <input class="modal-register__input modal-register__password" id="password" type="password" required minlength="8">
            <button class="button-registration modal-register__button">Log In</button>
            <p><span class="modal-register__qestion">Already have an account?</span><span class="modal-register__changer">Register</span></p>
          </form>
        </div>`;
        super.buildModal(modalRegisterContent);
        this.modalRegisterChangerAddClickHandler();
    }

    private modalRegisterChangerAddClickHandler() {
        const modalRegisterChanger = document.querySelector('.modal-register__changer') as HTMLSpanElement;
        modalRegisterChanger.addEventListener('click', () => {
            (document.querySelector('.overlay') as HTMLElement).remove();
            if (modalRegisterChanger.innerHTML === 'Register') {
                this.createRegister();
            } else if (modalRegisterChanger.innerHTML === 'Login') {
                this.createLogin();
            }
        });
    }

    public renderModal(buttonInnerHtml: string) {
        if (buttonInnerHtml === 'Sign Up' || buttonInnerHtml ==='Register') this.createRegister();
        if (buttonInnerHtml === 'Log in') this.createLogin();
    }
}

export { RegisterModal };