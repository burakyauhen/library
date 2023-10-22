import './main.scss';
import { Burger } from './ts/Burger';
import { AboutSlider } from './ts/AboutSlider';


window.onload = function() {
    console.log('page has been load');

    const burger = new Burger();
    burger.burgerAddClickHandler();

    const aboutSlider = new AboutSlider();
    aboutSlider.implementSlider();

    bodyAddClickHandler(burger);

    window.addEventListener('resize', () => {
        aboutSlider.reloadSlider();
    });
    
}

const bodyAddClickHandler = (burger: Burger) => {
    const navigation = document.querySelector('.header__navigation') as HTMLElement;
    (document.querySelector('body') as HTMLBodyElement).addEventListener('click', (event) => {
        if ( 
            !((event.target as HTMLElement).closest('.header__content') && 
            navigation.classList.contains('header__navigation_active')) || 
            (event.target as HTMLElement).closest('.navigation__item'))
        {
            burger.makeHeaderNavigationInactive(); 
            burger.crossToBurger();
        }
    });
}