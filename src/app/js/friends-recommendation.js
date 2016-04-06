var storedLogin = localStorage.getItem('login');
var storedName = localStorage.getItem('name');
var storedSocialMedia = localStorage.getItem('socialMedia');

var $form =$('#form');
var $inputLogin = $('#login');
var $inputName = $('#name');
var $inputSocialMedia = $('#socialMedia option:selected');



function store() {

  localStorage.setItem('login', $inputLogin.val());
  localStorage.setItem('name', $inputName.val());
  localStorage.setItem('socialMedia', $inputSocialMedia.text());
  $form.css({'display': 'none'});
  var $alert = $("<p>").addClass('alert').text('Alert!');
  $('#alert').append( $alert);
}
$(document).ready(function () {
$form.submit(function (item) {
  if ($.trim( $inputLogin.val()) === "" || $.trim($inputName.val()) === ""){

    alert('Please fill out all fields to recommend');
    return false;
  }
  store();

});
});