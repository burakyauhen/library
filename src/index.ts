import './main.scss';
import { burgerAddClickHandler, makeHeaderNavigationInactive, crossToBurger } from './ts/Burger';


window.onload = function() {
    console.log('page has been load');

    burgerAddClickHandler();
    bodyAddClickHandler();
}


const bodyAddClickHandler = () => {
    const navigation = document.querySelector('.header__navigation') as HTMLElement;
    (document.querySelector('body') as HTMLBodyElement).addEventListener('click', (event) => {
        if ( 
            !((event.target as HTMLElement).closest('.header__content') && 
            navigation.classList.contains('header__navigation_active')) || 
            (event.target as HTMLElement).closest('.navigation__item'))
        {
            makeHeaderNavigationInactive(); 
            crossToBurger();
        }
    });
}
