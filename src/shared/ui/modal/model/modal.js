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
    this.modal.classList.remove("modal-show");
    const activeModal = document.querySelector(".modal-show");
    if (!activeModal) {
      document.body.style.overflow = "auto";
    }
  }

  init() {
    if (this.modal) this.modal.addEventListener("click", this.close.bind(this));
    if (this.openButton)
      this.openButton.addEventListener("click", this.open.bind(this));
    if (this.closeSelector)
      this.closeSelector.addEventListener("click", this.close.bind(this));
    if (this.content)
      this.content.addEventListener("click", (event) =>
        event.stopPropagation()
      );
  }
}
