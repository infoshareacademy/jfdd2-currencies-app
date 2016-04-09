$('div.iconDiv').click(function () {

    var $this = $(this);
    var $childOfDiv = $(this).children();
    var $likedCurr = $('.liked').length / 3;
    $('#cancelLikedCurr').hide()


    console.log($likedCurr);

    if (!$this.hasClass('liked') && $likedCurr < 3) {

        $this.addClass('liked');
        $childOfDiv.addClass('liked');
        localStorage.setItem($this.attr('id'), $this.attr('id'));
        localStorage.setItem('pomoc', 'pomocna wartosc');
    }

    else {
        $this.removeClass('liked');
        $childOfDiv.removeClass('liked');
        localStorage.removeItem($this.attr('id'));
    }
});



