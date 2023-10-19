interface classChanger {
    (): void;
}
class Burger {
    burgerAddClickHandler: classChanger = () => {
        (document.querySelector('.header__hamburger') as HTMLSpanElement).addEventListener('click', (event) => {
            const navigation = document.querySelector('.header__navigation') as HTMLCanvasElement;
            
            if (navigation.classList.contains('header__navigation_active')) {
                this.makeHeaderNavigationInactive();
                this.crossToBurger();
            } else {
                this.makeHeaderNavigationActive();
                this.burgerToCross();
            }
        })
    };
    
    makeHeaderNavigationActive: classChanger = () => {
        const navigation = document.querySelector('.header__navigation') as HTMLElement;
        navigation.classList.add('header__navigation_active');
    }
    
    makeHeaderNavigationInactive: classChanger = () =>  {
        const navigation = document.querySelector('.header__navigation') as HTMLElement;
        navigation.classList.remove('header__navigation_active');
    }
    
    burgerToCross: classChanger = () => {
        ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.add('hamburger__first_active');
        ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.add('hamburger__second_active');
        ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.add('hamburger__third_active');
    };
    
    crossToBurger: classChanger = () => {
        ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.remove('hamburger__first_active');
        ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.remove('hamburger__second_active');
        ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.remove('hamburger__third_active');
    }
}

export { Burger }