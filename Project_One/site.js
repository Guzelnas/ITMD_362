$('#contact-form').on("submit", function(e) {
  var email = $('#email').val();
  var emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  e.preventDefault();
  if (!emailValid.test(email)) {
    console.log('invalid email');
    $('#invalid').remove();
    $('#email-address').append('<li id="Please enter valid email!</li>');
    return false;
  } else {
    $(this).remove();
    $('html').append('Thank you!');
  }
});
