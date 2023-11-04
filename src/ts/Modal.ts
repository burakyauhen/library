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

        // Bind Events
        this.bindEvents();

        // Open Modal
        this.openModal();
    }

    protected setContent(content: string | HTMLDivElement) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = "";
            this.modalContent.appendChild(content);
        }
    }

    protected appendModalElements() {
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    protected bindEvents() {
        this.overlay.addEventListener('click', this.closeModal);
    }

    protected openModal() {
        document.body.append(this.overlay);
    }

    protected closeModal(e: Event) {
        const classes = (e.target as HTMLElement).classList;
        if(classes.contains('overlay') || classes.contains('modal__close-icon')) {
            if ((document.querySelector('.overlay') as HTMLElement)) {
                (document.querySelector('.overlay') as HTMLElement).remove();
            }
        }
    }

}

export { Modal };