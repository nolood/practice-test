export class MessageForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.inputs = this.form.querySelectorAll(".input");
  }

  validateNotEmpty(input) {
    return input.value.trim() !== "";
  }

  handleInputChange(input) {
    if (!this.validateNotEmpty(input)) {
      input.classList.add("required");
    } else {
      input.classList.remove("required");
    }
  }

  validate() {
    this.inputs.forEach((input) => {
      this.handleInputChange(input);
    });
  }

  init() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.handleInputChange(input);
      });
    });
    this.form.addEventListener("submit", this.validate.bind(this));
  }
}
