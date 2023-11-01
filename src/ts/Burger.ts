class Burger {
    navigation: HTMLDivElement;
    
    constructor() {
        this.navigation = document.querySelector('.header__navigation') as HTMLDivElement;
    }
    
    public closeBurgerMenu = () => {
        this.makeHeaderNavigationInactive();
        this.crossToBurger();
    }

    public openburgerMenu = () => {
        this.makeHeaderNavigationActive();
        this.burgerToCross();
    }
    
    private makeHeaderNavigationActive = () => {
        this.navigation.classList.add('header__navigation_active');
    }
    
    private makeHeaderNavigationInactive = () =>  {
        this.navigation.classList.remove('header__navigation_active');
    }
    
    private burgerToCross = () => {
        ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.add('hamburger__first_active');
        ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.add('hamburger__second_active');
        ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.add('hamburger__third_active');
    };
    
    public crossToBurger = () => {
        ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.remove('hamburger__first_active');
        ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.remove('hamburger__second_active');
        ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.remove('hamburger__third_active');
    }
}

export { Burger }