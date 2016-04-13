
var $form = $('#form');
var $inputEmail = $('#email');
var $inputName = $('#name');


var friendsRecommendationObject = JSON.parse(localStorage.getItem('friendsRecommendationObject')) || {
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
        var $inputSocialMedia = $('#socialMedia option:selected');
        setNewRecommend($inputEmail.val(), $inputName.val(), $inputSocialMedia.text() );
        localStorage.setItem('friendsRecommendationObject', JSON.stringify(friendsRecommendationObject));


    });
});

