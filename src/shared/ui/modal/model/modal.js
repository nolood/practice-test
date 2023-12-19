export class Modal {
  constructor(selector, openSelector, closeSelector, contentSelector) {
    this.modal = document.querySelector(selector);
    this.openButton = document.querySelector(openSelector);
    this.closeSelector = document.querySelector(closeSelector);
    this.content = document.querySelector(contentSelector);
  }

  open() {
    this.modal.classList.add("modal-show");
    document.body.style.overflow = "hidden";
  }

  close() {
    console.log("kek");
    this.modal.classList.remove("modal-show");
    document.body.style.overflow = "auto";
  }

  init() {
    this.modal.addEventListener("click", this.close.bind(this));
    this.openButton.addEventListener("click", this.open.bind(this));
    this.closeSelector.addEventListener("click", this.close.bind(this));
    this.content.addEventListener("click", (event) => event.stopPropagation());
  }
}
