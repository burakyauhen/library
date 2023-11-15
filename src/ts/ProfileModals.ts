import { Modal } from "./Modal";
import { User } from "./RegisterModal";

class ProfileModal extends Modal {

    public renderModal(user: User | null) {
        if (user) {
          const modalProfileContent = this.getContent();
          super.buildModal(modalProfileContent);
          this.fillModal(user);
          this.copyIcoAddClickHandler(user); 
        }
        
    }

    private getContent(): string {
        const profileMenu = `<div class="overlay overlay_modal">
        <div class="modal modal-profile">
          <span class="close-icon modal-profile__close-icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/></svg></span>
          <div class="modal-profile__content">
            <div class="modal-profile__left-column">
              <div class="modal-profile__initials">jd</div>
              <div class="modal-profile__full-name">John Doe</div>
            </div>
          <div class="modal-profile__right-column">
            <h5 class="modal-profile__header">my profile</h5>
            <div class="statistic statistic_modified" data-state="registered">  
              <div class="statistic__visits statistic__visits_modified">
                <p class="statistic__headers statistic__headers_modified">Visits</p>
                <div class="ico ico-visits"></div>
                <p class="statistic__count-visits"></p>
              </div>
              <div class="statistic__bonuses statistic__bonuses_modified">
                <p class="statistic__headers statistic__headers_modified">Bonuses</p>
                <div class="ico ico-bonuses"></div>
                <p class="statistic__count-bonuses">1240</p>
              </div>
              <div class="statistic__books statistic__books_modified">
                <p class="statistic__headers statistic__headers_modified">Books</p>
                <div class="ico ico-books"></div>
                <p class="statistic__count-books">2</p>
              </div>
            </div>
            <div class="modal-profile__books">Rented books</div>
            <ul class="modal-profile__list">
              <li class="modal-profile__winter">The Last Queen, Clive Irving</li>
              <li class="modal-profile__spring">Dominicana, Angie Cruz</li>
              <li class="modal-profile__summer hidden"></li>
              <li class="modal-profile__autumn hidden"></li>
            </ul>
            <span class="modal-profile__card">Card number</span>
            <span class="modal-profile__card-number">F00234030</span>
            <span class="ico ico-copy"></span>
          </div>
          </div>
        </div>
      </div>`;
      return profileMenu;
    }

    private fillModal(user: User) {
      const countVisits = document.querySelectorAll('.statistic__count-visits')[1] as HTMLElement;
      const intials = document.querySelector('.modal-profile__initials') as HTMLElement;
      const fullname = document.querySelector('.modal-profile__full-name') as HTMLElement;

      countVisits.textContent = `${user.visits}`;
      intials.textContent = `${user.firstName.slice(0, 1)} ${user.lastName.slice(0, 1)}`
      fullname.textContent = `${user.firstName} ${user.lastName}`
    }

    private copyIcoAddClickHandler(user: User) {
      const copyIco = document.querySelector('.ico-copy') as HTMLElement;
      
      copyIco.addEventListener('click', () => {
          navigator.clipboard.writeText(`${user.cardNumber}`).then(function() {
        }, function(err) {
          console.error('Произошла ошибка при копировании текста: ', err);
        });
      }); 
    }


}

export { ProfileModal };