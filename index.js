const form = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (fNameValue === "" || fNameValue == null) {
    //add error class
    setError(fName);
  } else {
    //remove error class
    removeError(fName);
  }

  if (lNameValue === "" || lNameValue == null) {
    setError(lName);
  } else {
    removeError(lName);
  }

  if (passwordValue === "" || passwordValue == null) {
    setError(password);
  } else {
    removeError(password);
  }

  if (emailValue.match(mailformat)) {
    removeError(email);
  } else {
    setError(email);
  }
}

function setError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function removeError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}
