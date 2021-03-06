const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const secondnameInput = document.querySelector("input[name='secondname']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => isValidName(nameInput.value);
secondnameInput.isValid = () => isValidName (secondnameInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => isValidMessage(messageInput.value); 

const inputFields = [nameInput, secondnameInput, emailInput, phoneInput, messageInput,];

const isValidName = (name) => {
  const re = /^[A-Za-z]+$/;
  return re.test(String(name).toLowerCase());
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const isValidMessage = (message) => {
  const re = /^[A-Za-z0-9]*$/;
  return re.test(String(message).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

console.log(nameInput);