class Modal {
    protected classes: string;
    protected modal: HTMLElement;
    protected overlay: HTMLElement;
    protected modalContent: HTMLElement;

    constructor(classes: string) {
        this.classes = classes;
        this.overlay = this.createDomNode('div', 'overlay', 'overlay_modal');
        this.modal = this.createDomNode('div', 'modal', this.classes);
        this.modalContent = this.createDomNode('div', 'modal__content');
    }

    protected createDomNode(nodeStr: string, ...classes: Array<string>) {
        const node = document.createElement(nodeStr);
        node.classList.add(...classes);
        return node;
    }

    protected buildModal(content: string | HTMLDivElement) {

        this.setContent(content);

        this.appendModalElements();

        this.openModal();

        this.addCloseEventHandlers();

    }

    private setContent(content: string | HTMLDivElement) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = "";
            this.modalContent.appendChild(content);
        }
    }

    private appendModalElements() {
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    private addCloseEventHandlers() {
        (document.querySelector('.overlay') as HTMLElement).addEventListener('click', (e: Event) => {
            const event = e.target as HTMLElement;
            if(event.classList.contains('overlay') || event.classList.contains('modal__close-icon')) {
                this.closeModal();
            }
        });
    }

    private openModal() {
        document.body.append(this.overlay);
    }

    protected closeModal() {
        if ((document.querySelector('.overlay') as HTMLElement)) {
            (document.querySelector('.overlay') as HTMLElement).remove();
        }
    }
}

export { Modal };