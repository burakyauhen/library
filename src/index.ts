import './main.scss';
import { Burger } from './ts/Burger';
import { AboutSlider } from './ts/AboutSlider';
import { FavoriteSlider } from './ts/FavoritesSlider';
import { DropMenu } from './ts/DropMenu';
import { Modal } from './ts/Modal';
import { RegisterModal } from './ts/RegisterModal';



window.onload = function() {
    console.log('page has been loaded');

    //burger, dropMenu
    const burger = new Burger();
    const dropMenu = new DropMenu();

    burgerAddClickHandler(burger, dropMenu);
    bodyAddClickHandler(burger, dropMenu);
    dropMenuAddClickHandler(dropMenu, burger);

    //about Slider
    const aboutSlider = new AboutSlider();
    aboutSlider.implementSlider();

    window.addEventListener('resize', () => {
        aboutSlider.reloadSlider();
    });

    //favorites Slider
    const favoriteSlider = new FavoriteSlider();
    favoriteSlider.implementSlider();

    //registration
    const registerModal = new RegisterModal('modal-register');
    registrationAddClickHandler(registerModal, dropMenu);
}

const bodyAddClickHandler = (burger: Burger, dropMenu: DropMenu) => {
    (document.querySelector('body') as HTMLBodyElement).addEventListener('click', (event) => {
        if ( 
            !((event.target as HTMLElement).closest('.header__content') && 
            burger.navigation.classList.contains('header__navigation_active')) || 
            (event.target as HTMLElement).closest('.navigation__item')
        ) {
            burger.closeBurgerMenu();
        }
        
        if (
            !(event.target as HTMLElement).closest('.header__drop-menu') &&
            !(event.target as HTMLElement).closest('.header__profile')
        ) {
            dropMenu.closeDropMenu();
        }
    });
}

const burgerAddClickHandler = (burger: Burger, dropMenu: DropMenu) => {
    (document.querySelector('.header__hamburger') as HTMLSpanElement).addEventListener('click', () => {
        if (burger.navigation.classList.contains('header__navigation_active')) {
            burger.closeBurgerMenu();
        } else {
            burger.openburgerMenu();
            dropMenu.closeDropMenu();
        }
    });
};

const dropMenuAddClickHandler = (dropMenu: DropMenu, burger: Burger) => {
    const icoProfile = document.querySelector('.ico-profile') as HTMLSpanElement;
    icoProfile.addEventListener('click', () => {
        if (dropMenu.headerDropMenu.classList.contains('header__drop-menu_inactive')) {
           dropMenu.openDropMenu();
           burger.closeBurgerMenu(); 
        } else {
            dropMenu.closeDropMenu();
        }
    });
}

const registrationAddClickHandler = (registerModal: RegisterModal, dropMenu: DropMenu) => {
    const buttonsRegistration: Array<HTMLElement> = Array.from(document.querySelectorAll('.button-registration'));
    buttonsRegistration.push(document.querySelector('.header__login') as HTMLElement); 
    buttonsRegistration.push(document.querySelector('.header__register') as HTMLElement); 

    buttonsRegistration.forEach((buttonRegistration) => buttonRegistration.addEventListener('click', () =>  {
        registerModal.renderModal(buttonRegistration.innerHTML);
        dropMenu.closeDropMenu();
    }));

}

