import { Book, favoriteDate, IBook } from "./Book";
import { PaymentModal } from "./PaymentModal"; 
import { RegisterModal } from "./RegisterModal";
import { RegistrationType } from "..";

class FavoriteSlider {
    paymentModal: PaymentModal;
    registerModal: RegisterModal;
    constructor(paymentModal: PaymentModal, registerModal: RegisterModal) {
        this.paymentModal = paymentModal;
        this.registerModal = registerModal;
    }

    public implementSlider() {
        this.clearBooks();
        this.setBooksToHtml('winter');
        this.formAddClickHandler();
        this.buyButtonsAddClickHandler();
        this.paymentModal.makeButtonDisabled();
    }

    private clearBooks() {
        (document.querySelector('.favorites__content') as HTMLDivElement).innerHTML = "";
    }

    private setBooksToHtml(season: string) {
        const favoritesContent = document.querySelector('.favorites__content') as HTMLDivElement; 

        favoriteDate[season].forEach((item: IBook) => {
            const book = new Book(item);
            favoritesContent.insertAdjacentElement('beforeend', book.generateBook());
        });
    }

    private formAddClickHandler() {
        (document.querySelector('.favorites__form') as HTMLFormElement).addEventListener('click', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('seasons-form__input')) {
                this.changeSeason(target.id);
            } 
        });
    }

    private changeSeason(season: string) {
        const books = document.querySelector('.favorites__content') as HTMLDivElement;
        books.classList.add('books_shadowed');
        setTimeout(() => {
            this.clearBooks();
            this.setBooksToHtml(season);
            books.classList.remove('books_shadowed');
            this.buyButtonsAddClickHandler();
            this.paymentModal.makeButtonDisabled();
        }, 300);
    }

    public buyButtonsAddClickHandler() {
        const buyButtons = document.querySelectorAll('[data-buy-button]');
        buyButtons.forEach((button) => {
            button.addEventListener('click', (e: Event) => {
                if (this.registerModal.condition === 'registered') {
                    const chosenBook = (e.target as HTMLElement).closest('.book-content') as HTMLElement;
                    this.paymentModal.renderModal(chosenBook);
                } else if (this.registerModal.condition === 'unregistered') {
                    this.registerModal.renderModal(RegistrationType.login);
                }
            })
        })
    }

   
}

export { FavoriteSlider };