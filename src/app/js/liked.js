$('.iconDiv').click(function () {
    var $this = $(this);
    var $childOfDiv = $(this).children();

    if($this.hasClass('liked')){
        $this.removeClass('liked');
        $childOfDiv.removeClass('liked');
    }
    else{
        $this.addClass('liked');
        $childOfDiv.addClass('liked');
    }

});