$('#contact-form').on("submit", function(e) {
  var email = $('#email').val();
  var name = $('#name').val();
  var emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var nameValid = /^[a-zA-Z]+$/;
  e.preventDefault();
  if (!emailValid.test(email)) {
    console.log('invalid email');
    $('#invalid').remove();
    $('#email-address').append('<li id="invalid">Please enter valid email!</li>');
    return false;
  }
  if (!nameValid.test(name)) {
    console.log('invalid name');
    $('#invalid').remove();
    $('#Name').append('<li id="invalid">Letters only!</li>');
    return false;
  }
   else {
    $(this).remove();
    $('submit').append('Thank you!');
  }
});
