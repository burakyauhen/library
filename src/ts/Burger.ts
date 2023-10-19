interface classChanger {
    (): void;
}

const burgerAddClickHandler: classChanger = () => {
    (document.querySelector('.header__hamburger') as HTMLSpanElement).addEventListener('click', (event) => {
        const navigation = document.querySelector('.header__navigation') as HTMLCanvasElement;
        
        if (navigation.classList.contains('header__navigation_active')) {
            makeHeaderNavigationInactive();
            crossToBurger();
        } else {
            makeHeaderNavigationActive();
            burgerToCross();
        }
    })
};

const makeHeaderNavigationActive: classChanger = () => {
    const navigation = document.querySelector('.header__navigation') as HTMLElement;
    navigation.classList.add('header__navigation_active');
}

const makeHeaderNavigationInactive: classChanger = () =>  {
    const navigation = document.querySelector('.header__navigation') as HTMLElement;
    navigation.classList.remove('header__navigation_active');
}

const burgerToCross: classChanger = () => {
    ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.add('hamburger__first_active');
    ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.add('hamburger__second_active');
    ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.add('hamburger__third_active');
};

const crossToBurger: classChanger = () => {
    ((document.querySelector('.hamburger__first')) as HTMLSpanElement).classList.remove('hamburger__first_active');
    ((document.querySelector('.hamburger__second')) as HTMLSpanElement).classList.remove('hamburger__second_active');
    ((document.querySelector('.hamburger__third')) as HTMLSpanElement).classList.remove('hamburger__third_active');
}

export { burgerAddClickHandler,
         makeHeaderNavigationActive,
         makeHeaderNavigationInactive, 
         crossToBurger, 
         burgerToCross 
        }