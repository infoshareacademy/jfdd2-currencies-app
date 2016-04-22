var likedCurrencyObject = JSON.parse(localStorage.getItem('likedCurrencyObject')) || {
    name: []
  };

function setNewCurrency(name) {
  likedCurrencyObject.name.push(name);
}

if (likedCurrencyObject.name.length <= 3) {
  likedCurrencyObject.name.forEach(function (item) {
    $("#" + item).addClass('liked');
    $("#" + item).children().addClass('liked');

  });
} else {
  localStorage.removeItem('likedCurrencyObject');
}
$('div.iconDiv').click(function () {

  var $this = $(this);
  var $childOfDiv = $(this).children();
  var $likedCurr = $('.liked').length / 3;


  if (!$this.hasClass('liked') && $likedCurr < 3) {

    setNewCurrency($this.attr('id'));
    $this.addClass('liked');
    $childOfDiv.addClass('liked');
    localStorage.setItem('likedCurrencyObject', JSON.stringify(likedCurrencyObject));
  }
  else {
    $this.removeClass('liked');
    $childOfDiv.removeClass('liked');
    var unCancelLiked = likedCurrencyObject.name.filter(function (item) {
      return item !== $this.attr('id');
    });
    likedCurrencyObject.name = unCancelLiked;
    localStorage.setItem('likedCurrencyObject', JSON.stringify(likedCurrencyObject));

  }
});



