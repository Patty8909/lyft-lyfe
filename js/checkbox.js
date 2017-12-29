$(document).ready(function () {

  var validateFirstName = false;
  var validateLastName = false;
  var validateEmail = false;
  var validateChecked = false;

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  }


  $('#inputEmail').on('input', function (event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#inputFirstName').on('input', function () {
    if ($(this).val()) {
      validateFirstName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#inputLastName').on('input', function () {
    if ($(this).val()) {
      validateLastName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#inputCheckbox').on('click', function (event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('form > button').on('click', function (event) {
    event.preventDefault();
    localStorage.firstName = $('#inputFirstName').val();
    localStorage.lastName = $('#inputLastName').val();
    localStorage.email = $('#inputEmail').val();
    window.location.href = 'exit.html';
  });
});