$('#contact-form').on("submit", function(e) {
  var phone = $('#phone').val();
  var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  e.preventDefault();
  if (!phoneValid.test(phone)) {
    console.log('invalid phone');
    $('#invalid').remove();
    $('#contact-form').append('<li id="invalid">Phone must contain 10 digits!</li>');
    return false;
  } else {
    $(this).remove();
    $('body').append('Thank you!');
  }
});
