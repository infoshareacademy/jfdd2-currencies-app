var storedLogin = localStorage.getItem('login');
var storedName = localStorage.getItem('name');
var storedSocialMedia = localStorage.getItem('socialMedia');

var $inputLogin = $('#login');
var $inputName = $('#name');
var $inputSocialMedia = $('#socialMedia option:selected');

$('#form').submit(function (item) {
  if ($.trim( $inputLogin.val()) === "" && $.trim($inputName.val()) === ""){
    item.preventDefault();
    alert('Please fill out all fields to recommend');
  }
});

function store() {

  localStorage.setItem('login', $inputLogin.val());
  localStorage.setItem('name', $inputName.val());
  localStorage.setItem('socialMedia', $inputSocialMedia.text());
}

