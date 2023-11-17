class AboutSlider {
    private sliderWidth: number = 0;
    private aboutImageWidth: number = 0;
    private aboutStripGap: number = 0;
    private aboutStripLeft: number = 0;
    private countImages: number= 0;
    private clickedCircle: number = 0;

    implementSlider = () => {
        this.addClickHandlerAboutSigns();
        this.addClickHandlerLeftArrow();
        this.addClickHandlerRightArrow();
        this.reloadSlider();
    }

    private addClickHandlerAboutSigns = () => {
        (document.querySelector('.about__signs') as HTMLDivElement).addEventListener('click', (e: Event) => {
            if ((e.target as HTMLElement).classList.contains('about__circle')) {
                this.clickedCircle = this.getNumberOfClickedCircle(e.target as HTMLDivElement);
                this.countAboutStripLeft();
                this.reloadSlider();
                this.setArrowCircleCondition();
            }
        });
    }

    private addClickHandlerLeftArrow = () => {
        (document.querySelector('.about__arrow_left') as HTMLDivElement).addEventListener('click', () => {
            if (this.clickedCircle > 0) {
                this.clickedCircle --;
                this.countAboutStripLeft();
                this.reloadSlider();
                this.setArrowCircleCondition();
            }
        });
    }

    private addClickHandlerRightArrow = () => {
        (document.querySelector('.about__arrow_right') as HTMLDivElement).addEventListener('click', () => {
            if (this.clickedCircle < 4) {
                this.clickedCircle ++;
                this.countAboutStripLeft();
                this.reloadSlider();
                this.setArrowCircleCondition();
            }
        });
    }

    public reloadSlider = () => {
        const slider = document.querySelector('.about__slider') as HTMLDivElement;
        const aboutStrip = document.querySelector('.about__strip') as HTMLDivElement;
        const aboutImage = document.querySelector('.about__image') as HTMLDivElement;

        this.sliderWidth = this.getPixels(slider);
        this.aboutImageWidth = this.getPixels(aboutImage);
        this.countImages = Math.trunc(this.sliderWidth / this.aboutImageWidth);

        const numberOfVisibleCircles = document.querySelectorAll('.about__image').length - this.countImages + 1;
        if (this.clickedCircle >= numberOfVisibleCircles) {
            this.clickedCircle = numberOfVisibleCircles - 1;
        }

        this.makeSirclesVisible();
        this.makeCircleActive();
        this.setArrowCircleCondition();

        this.countAboutStripGap();
        aboutStrip.style.gap = `${this.aboutStripGap}px`;

        this.countAboutStripLeft();
        aboutStrip.style.left = `${this.aboutStripLeft}px`
    }

    private makeSirclesVisible() {
        const numberOfVisibleCircles = document.querySelectorAll('.about__image').length - this.countImages + 1;

        document.querySelectorAll('.about__circle').forEach((item, index) => {
            if (index < numberOfVisibleCircles) {
                item.classList.remove('about__circle_invisible');
            } else {
                item.classList.add('about__circle_invisible');
            }
        })
    }

    private getPixels = (element: HTMLDivElement): number =>  {
        return Number(getComputedStyle(element).width.slice(0, -2));
    }

    private setArrowCircleCondition = () => {
        const numberOfImages = document.querySelectorAll('.about__image').length;
        if (this.clickedCircle === 0) {
            (document.querySelector('.about__arrow_left') as HTMLDivElement).classList.add('about__arrow_inactive');
            (document.querySelector('.about__arrow_right') as HTMLDivElement).classList.remove('about__arrow_inactive');
        } else if (this.clickedCircle === numberOfImages - 1) {
            (document.querySelector('.about__arrow_right') as HTMLDivElement).classList.add('about__arrow_inactive'); 
            (document.querySelector('.about__arrow_left') as HTMLDivElement).classList.remove('about__arrow_inactive'); 
        } else {
            (document.querySelector('.about__arrow_left') as HTMLDivElement).classList.remove('about__arrow_inactive');
            (document.querySelector('.about__arrow_right') as HTMLDivElement).classList.remove('about__arrow_inactive'); 
        }
    }

    private makeCircleActive = () => {
        document.querySelectorAll('.about__circle').forEach((item) => item.classList.remove('about__circle_active'));
        document.querySelectorAll('.about__circle')[this.clickedCircle].classList.add('about__circle_active');
    }

    private getNumberOfClickedCircle(clickedCircle: HTMLDivElement) {
        return Array.from(document.querySelectorAll('.about__circle')).findIndex((item) => item === clickedCircle);
    }

    private countAboutStripLeft(): void {
        this.aboutStripLeft = - this.clickedCircle * (this.aboutStripGap + this.aboutImageWidth);
    }

    private countAboutStripGap(): void {
        if (this.countImages === 1) {
            this.aboutStripGap = 0;
        } else {
            this.aboutStripGap = (this.sliderWidth - this.countImages * this.aboutImageWidth) / (this.countImages - 1); 
        }
    }
}

export { AboutSlider }