let error_message = document.querySelector(".error-message");
let error_message2 = document.getElementById("error_id");
let error_logo = document.querySelector(".error-logo");
let input_value = document.querySelector(".email-input");
let submit = document.querySelector(".submit");

console.log(error_message.textContent);
console.log(error_logo);
console.log(error_message2);

const validEmailFormat = /^[A-Za-z0-9][\w+]*@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}$/i;

// valid_email_regex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  error_message2.classList.remove("hidden");
  error_logo.classList.add("visible");
});

submit.addEventListener("click", checkEmailValidity, false);
// emailInput.addEventListener("focus", inputFocused, false);

function checkEmailValidity(event) {
  if (validateEmailAddress() === false) {
    event.preventDefault();
    input_value.classList.add("error-border");
    error_message.classList.remove("hidden");
    error_logo.classList.add("visible");
  } else {
    input_value.classList.remove("error-border");
    error_message.classList.add("hidden");
    error_logo.classList.remove("visible");
  }
}

/*
 */
function validateEmailAddress() {
  const submittedEmailAddress = input_value.value;
  // test email is valid via regex
  const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);

  if (submittedEmailAddress.length === 0) {
    return false;
  } else if (!isValidEmailAddress) {
    return false;
  } else {
    return true;
  }
}
