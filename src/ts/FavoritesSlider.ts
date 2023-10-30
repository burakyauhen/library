import { Book, favoriteDate, IBook } from "./Book";

class FavoriteSlider {
    
    public implementSlider() {
        this.clearBooks();
        this.setBooksToHtml('winter');
        this.formAddClickHandler();
    }

    private clearBooks() {
        (document.querySelector('.favorites__content') as HTMLDivElement).innerHTML = "";
    }

    private setBooksToHtml(season: string) {
        const favoritesContent = document.querySelector('.favorites__content') as HTMLDivElement; 

        favoriteDate[season].forEach((item: IBook) => {
            const book = new Book(item);
            favoritesContent.insertAdjacentElement('beforeend', book.generateBook());
        });
    }

    private formAddClickHandler() {
        (document.querySelector('.favorites__form') as HTMLFormElement).addEventListener('click', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('seasons-form__input')) {
                this.changeSeason(target.id)
            } 
        });
    }

    private changeSeason(season: string) {
        const books = document.querySelector('.favorites__content') as HTMLDivElement;
        books.classList.add('books_shadowed');
        setTimeout(() => {
            this.clearBooks();
            this.setBooksToHtml(season);
            books.classList.remove('books_shadowed');
        }, 300)
    }
}

export { FavoriteSlider };