var likedCurrencyObject = JSON.parse(localStorage.getItem('likedCurrencyObject')) || {
      name: []
  };

function setNewCurrency(name){
    likedCurrencyObject.name.push(name);
}


$('div.iconDiv').click(function () {

    var $this = $(this);
    var $childOfDiv = $(this).children();
    var $likedCurr = $('.liked').length / 3;


    if (!$this.hasClass('liked') && $likedCurr < 3) {

        setNewCurrency($this.attr('id'));
        $this.addClass('liked');
        $childOfDiv.addClass('liked');
        console.log(likedCurrencyObject);
        localStorage.setItem('likedCurrencyObject', JSON.stringify(likedCurrencyObject));
    }
    else {
        $this.removeClass('liked');
        $childOfDiv.removeClass('liked');
        var unCancelLiked = likedCurrencyObject.name.filter(function(item){
            return item !== $this.attr('id');
        });
        likedCurrencyObject.name = unCancelLiked;
        console.log(likedCurrencyObject);

        localStorage.setItem('likedCurrencyObject', JSON.stringify(likedCurrencyObject));



    }
});



