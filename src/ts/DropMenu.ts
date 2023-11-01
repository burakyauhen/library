
class DropMenu {
    headerDropMenu: HTMLDivElement;
    constructor () {
        this.headerDropMenu = document.querySelector('.header__drop-menu') as HTMLDivElement;
    }

    public closeDropMenu() {
        this.headerDropMenu.classList.add('header__drop-menu_inactive');
    }

    public openDropMenu() {
        this.headerDropMenu.classList.remove('header__drop-menu_inactive'); 
    }
}

export { DropMenu }