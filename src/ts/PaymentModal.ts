import { Modal } from "./Modal";
import { RegisterModal } from "./RegisterModal";

class PaymentModal extends Modal {
  registerModal: RegisterModal;
  constructor(classes: string ,registerModal: RegisterModal) {
    super(classes);
    this.registerModal = registerModal;
  }


    public renderModal(chosenBook: HTMLElement) {
        const modalPaymentContent = this.getContent();
        super.buildModal(modalPaymentContent);
        this.creditCardPaymentFormAddSubmitkHandler(chosenBook);

    }

    private getContent() {
       const paymentMenu = ` <div class="overlay overlay_modal">
       <div class="modal modal-payment">
         <div class="modal-payment__content">
           <span class="close-icon modal-payment__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2" stroke="white" stroke-width="3"/><path d="M2 2.14929L17 17" stroke="white" stroke-width="3"/></svg></span>
           <h6 class="modal-payment__header">buy a library card</h6>
           <div class="modal-payment__data">
             <div class="modal-payment__left-column">
               <form class="payment-form"> 
                 <div class="payment-form__top-side">
                   <label class="payment-form__label" for="credit-card-number">Bank card number</label>
                   <input class="payment-form__input" type="text" id="credit-card-number" required pattern="[0-9]{4}( ?)[0-9]{4}( ?)[0-9]{4}( ?)[0-9]{4}">
                   <label class="payment-form__label" for="expiration-year">Expiration code</label>
                   <div class="payment-form__expiration">
                     <input class="payment-form__input payment-form__input_short" type="text" id="expiration-year" required minlength="2" maxlength="2" pattern="[0-9]{2}">
                     <input class="payment-form__input payment-form__input_short" type="text" id="expiration-month" required minlength="2" maxlength="2" pattern="[0-9]{2}">
                   </div>
                   <label class="payment-form__label" for="cvc">CVC</label>
                   <input class="payment-form__input payment-form__input_short" type="text" id="cvc" required minlength="3" maxlength="3" pattern="[0-9]{3}">
                 </div>
                   <div class="payment-form__bottom-side">
                     <label class="payment-form__label" for="cardholder-name">Cardholder name</label>
                     <input class="payment-form__input" type="text" id="cardholder-name" required>
                     <label class="payment-form__label" for="postal-code">Postal code</label>
                     <input class="payment-form__input" type="text" id="postal-code" required>
                     <label class="payment-form__label" for="city-town">City / Town</label>
                     <input class="payment-form__input" type="text" id="city-town" required>
                     <button class="payment-form__button button">Buy</button>
                     <span class="payment-form__price">$ 25.00</span>
                   </div>
               </form>
             </div>
             <div class="modal-payment__right-column">
               <p>If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.</p>
             </div>
           </div>
         </div>
       </div>
     </div>`; 
     return paymentMenu;
    }

    private creditCardPaymentFormAddSubmitkHandler(chosenBook: HTMLElement) {
      (document.querySelector('.payment-form') as HTMLElement).addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const bookName = (chosenBook.querySelector('.book-content__header') as HTMLElement).textContent;
        const bookAuthor = (chosenBook.querySelector('.book-content__author') as HTMLElement).textContent;
        
        if (this.registerModal.user) {
          if (!this.registerModal.user.rentedBooks.includes(`${bookName}, ${bookAuthor}`)) {
            this.registerModal.user.rentedBooks.push(`${bookName}, ${bookAuthor}`);
          }
          this.registerModal.updateUserInLocalStorage(this.registerModal.user);          
          this.closeModal();
          this.makeButtonDisabled();

        }
      });
    }

    public makeButtonDisabled() {
      const user = this.registerModal.user;
      if (user) {
          const booksOnPage = document.querySelectorAll('.book-content');
          booksOnPage.forEach((book) => {
              const bookName = (book.querySelector('.book-content__header') as HTMLElement).textContent;
              const bookAuthor = (book.querySelector('.book-content__author') as HTMLElement).textContent;
              if (user.rentedBooks.includes(`${bookName}, ${bookAuthor}`)) {
                  const buyButton = book.querySelector('.button') as HTMLButtonElement;
                  buyButton.textContent = 'Own';
                  buyButton.disabled = true;
                  buyButton.classList.add('button_disabled');
              }
          });
      }
    }

    
}

export { PaymentModal }