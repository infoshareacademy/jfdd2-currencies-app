
function store(){

  var storedLogin = localStorage.getItem("login");
  var storedName = localStorage.getItem("name");
  var storedSocialMedia = localStorage.getItem("socialMedia");


  var $inputLogin= $("#login");
  var $inputName= $("#name");
  var $inputSocialMedia= $("#socialMedia option:selected");


  localStorage.setItem("login", $inputLogin.val());
  localStorage.setItem("name", $inputName.val());
  localStorage.setItem("socialMedia", $inputSocialMedia.text());
}
