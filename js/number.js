$(document).ready(function () {

  var validPhoneNumber = false;

  function activateButton() {
    if (validPhoneNumber) {
      $('#btn').attr('disabled', false);
    }
  }

  function desactivateButton() {
    $('#btn').attr('disabled', 'disabled');
  }

  $('#inputPhoneNumber').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    if ($(this).val().length === 10) {
      validPhoneNumber = true;
      activateButton();
    } else {
      desactivateButton();
    }
  });

  function rand_code(chars, lon) {
    code = "";
    for (x = 0; x < lon; x++) {
      rand = Math.floor(Math.random() * chars.length);
      code += chars.substr(rand, 1);
    }
    return code;
  }

  caracteres = "0123456789";
  longitud = 3;

  var code = rand_code(caracteres, longitud);

  $('#btn').on('click', function (event) {
    event.preventDefault();
    localStorage.phoneNumber = $('#inputPhoneNumber').val();
    alert('Tu código: LAB-' + code);

    window.location.href = 'verify.html';
  });


});
