$(document).ready(function () {

  var validCode = false;

  function activateButton() {
    if (validCode) {
      $('#btn').attr('disabled', false);
    }
  }

  function desactivateButton() {
    $('#btn').attr('disabled', 'disabled');
  }

  $('#inputCode').on('input', function () {
    if ($(this).val().length === 3 /*&& $(this).val() === rand_code(caracteres, longitud).val()*/) {
      validCode = true;
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

  $('#btn').on('click', function (event) {
    event.preventDefault();

    window.location.href = 'checkbox.html';
  });

});

