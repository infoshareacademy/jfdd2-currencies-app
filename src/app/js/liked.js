$('.iconDiv').click(function () {
    var $this = $(this);
    var $childOfDiv = $(this).children();
    var $likedCurr = $('.liked').length / 3;

    if(!$this.hasClass('liked') && $likedCurr < 3){

        $this.addClass('liked');
        $childOfDiv.addClass('liked');
    }
    else{

        $this.removeClass('liked');
        $childOfDiv.removeClass('liked');
    }

});

