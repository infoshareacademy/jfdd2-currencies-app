var storedLogin = localStorage.getItem('login');
var storedName = localStorage.getItem('name');
var storedSocialMedia = localStorage.getItem('socialMedia');

var $form = $('#form');
var $inputEmail = $('#email');
var $inputName = $('#name');
var $inputSocialMedia = $('#socialMedia option:selected');
function store() {
    localStorage.setItem('email', $inputEmail.val());
    localStorage.setItem('name', $inputName.val());
    localStorage.setItem('socialMedia', $inputSocialMedia.text());

    //$form.css({'display': 'none'});
    var $alert = $("<p>").addClass('alert').text('Thank you for your recommendation!');
    $('#alert').append($alert);

}
var friendsRecommendationObject = {
    email: [],
    name: [],
    socialMedia: []
};
function setNewRecommend (email, name, socialMedia){
    friendsRecommendationObject.email.push(email);
    friendsRecommendationObject.name.push(name);
    friendsRecommendationObject.socialMedia.push(socialMedia);

}
$(document).ready(function () {
    console.log("Welcome in Valutar Currency Application! :)")
    $form.submit(function (item) {
        if ($.trim($inputEmail.val()) === "" || $.trim($inputName.val()) === "") {

            alert('Please fill out all fields to recommend');
            return false;
        }
        store();
        setNewRecommend($inputEmail.val(), $inputName.val(), $inputSocialMedia.text() );
        localStorage.setItem('friendsRecommendationObject', JSON.stringify(friendsRecommendationObject));
    });
});

///