class BankAccount {
  name = "DK Meena";
  #pin = "123456";

  getName() {
    return this.name;
  }

  #getIfscCode() {
    return "000111";
  }

  getSpecialDetails() {
    return {
      pin: this.#pin,
      name: this.name,
      ifsc: this.#getIfscCode(),
    };
  }
}

function getDetails() {
  const details = new BankAccount();
  console.warn(details.getSpecialDetails());
}
