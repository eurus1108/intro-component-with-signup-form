const form = document.querySelector("[data-form]");
const inputFirstName = document.querySelector('input[name="first-name"]');
const inputLastName = document.querySelector('input[name="last-name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');
const submitBtn = document.querySelectorAll("[data-btn]");
let isFormValid = false;
let isValidationOn = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.submit();
  }
});

const inputs = [inputFirstName, inputLastName, inputEmail, inputPassword];

const validateInputs = () => {
  if (!isValidationOn) return;
  isFormValid = true;
  inputs.forEach(resetElm);

  if (!inputFirstName.value) {
    isFormValid = false;
    invalidateElm(inputFirstName, "First Name cannot be empty");
  }

  if (!inputLastName.value) {
    isFormValid = false;
    invalidateElm(inputLastName, "Last Name cannot be empty");
  }

  if (!isValidEmail(inputEmail.value)) {
    isFormValid = false;
    invalidateElm(inputEmail, "Looks like this is not an email");
  }

  if (!inputPassword.value) {
    isFormValid = false;
    invalidateElm(inputPassword, "Password cannot be empty");
  }
};

const resetElm = (elm) => {
  const formControl = elm.parentElement;
  formControl.classList.remove("invalid");
};

const invalidateElm = (elm, message) => {
  const formControl = elm.parentElement;
  formControl.classList.add("invalid");

  const err = formControl.querySelector(".error-message");
  err.innerText = message;
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });

  input.addEventListener("invalid", (e) => {
    e.preventDefault();
  });
});

const container = document.querySelector(".featured-panel__container");

inputs.forEach((input) => {
  if (input.classList.contains("invalid")) {
    container.classList.add("active");
    console.log("here");
  } else {
    container.classList.remove("active");
  }

  console.log(inputs);
});
