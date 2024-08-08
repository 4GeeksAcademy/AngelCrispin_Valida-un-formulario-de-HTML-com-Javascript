/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const form = document.getElementById("form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    validate();
  });

  const spanError = document.getElementById("textError");
  const alert = document.getElementById("alert");
  const cancel = document.getElementById("cancel");

  const colorError = "#ffbdbd";

  cancel.addEventListener("click", cleanErrors);

  function validate() {
    cleanErrors();

    var textError = "";
    var hasErrors = false;
    const card = form.elements.inputCard;
    const CVC = form.elements.inputCVC;
    const amount = form.elements.inputAmount;
    const firstName = form.elements.inputFirstName;
    const lastName = form.elements.inputLastName;
    const city = form.elements.inputCity;
    const state = form.elements.inputState;
    const postalCode = form.elements.inputPotalCode;
    const message = form.elements.floatingTextarea2;

    //Card
    if (card.value.trim().length != 12) {
      hasErrors = true;
      card.style.backgroundColor = colorError;
      textError += "Card invalid.<br>";
    }

    //CVC
    if (CVC.value.trim().length != 4) {
      hasErrors = true;
      CVC.style.backgroundColor = colorError;
      textError += "CVC invalid.<br>";
    }

    //Amount
    if (amount.value.trim() == "") {
      hasErrors = true;
      amount.style.backgroundColor = colorError;
      textError += "Amount invalid.<br>";
    }

    //FirstName
    if (firstName.value.trim() == "") {
      hasErrors = true;
      firstName.style.backgroundColor = colorError;
      textError += "First Name invalid.<br>";
    }

    //LastName
    if (lastName.value.trim() == "") {
      hasErrors = true;
      lastName.style.backgroundColor = colorError;
      textError += "Last Name invalid.<br>";
    }

    //City
    if (city.value.trim() == "") {
      hasErrors = true;
      city.style.backgroundColor = colorError;
      textError += "City invalid.<br>";
    }

    //State
    if (state.value.trim() == "Pick a state") {
      hasErrors = true;
      state.style.backgroundColor = colorError;
      textError += "State invalid.<br>";
    }

    //PostalCode
    if (postalCode.value.trim() == "") {
      hasErrors = true;
      postalCode.style.backgroundColor = colorError;
      textError += "Postal Code invalid.<br>";
    }

    //Message
    if (message.value.trim() == "") {
      hasErrors = true;
      message.style.backgroundColor = colorError;
      textError += "Message invalid.<br>";
    }

    //Validate
    if (hasErrors) {
      spanError.innerHTML = textError;
      alert.style.display = "block";
    }
  }

  function cleanErrors() {
    var inputs = document.getElementsByTagName("input");
    var textAreas = document.getElementsByTagName("textarea");
    var selects = document.getElementsByTagName("select");

    for (let index = 0; index < inputs.length; index++) {
      inputs[index].style.background = "#fff";
    }

    for (let index = 0; index < textAreas.length; index++) {
      textAreas[index].style.background = "#fff";
    }

    for (let index = 0; index < selects.length; index++) {
      selects[index].style.background = "#fff";
    }

    alert.style.display = "none";
  }
};
