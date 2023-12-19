export class MessageForm {
  constructor(formSelector, onSubmit) {
    this.form = document.querySelector(formSelector);
    this.inputs = this.form.querySelectorAll(".input");
    this.onSubmit = onSubmit;
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

    const isAnyInputRequired = Array.from(this.inputs).some((input) =>
      input.classList.contains("required")
    );

    if (!isAnyInputRequired) {
      this.onSubmit();
    }
  }

  init() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.handleInputChange(input);
      });
    });
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.validate();
    });
  }
}
