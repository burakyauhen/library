import './main.scss';
import { Burger } from './ts/Burger';
import { AboutSlider } from './ts/AboutSlider';
import { FavoriteSlider } from './ts/FavoritesSlider';
import { DropMenu } from './ts/DropMenu';
import { RegisterModal } from './ts/RegisterModal';

export enum RegistrationType {register="register", login="login"}

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
    const icoProfile = document.querySelector('.header__user-icon') as HTMLElement;
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
    const registerButtons: Array<HTMLButtonElement> = Array.from(document.querySelectorAll('[data-register]'));

    registerButtons.forEach((registerButton) => registerButton.addEventListener('click', () => {
        if (registerButton.dataset.register === 'register') {
            registerModal.renderModal(RegistrationType.register);
        }
        if (registerButton.dataset.register === 'login') {
            registerModal.renderModal(RegistrationType.login);
        }
        dropMenu.closeDropMenu();
    }));
}

