Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
}

function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate)
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

var dateArray = getDates(new Date('2010-01-01'), (new Date('2016-04-03')));

function padIt(n) {
  var str = "" + n
  var pad = "00"
  return pad.substring(0, pad.length - str.length) + str
}

$.when.apply($,
  dateArray.map(function (date) {
    return $.getJSON('http://api.fixer.io/' + date.getFullYear() + '-' + padIt(date.getMonth() + 1) + '-' + padIt(date.getDate()));
  })
).then(function () {
  //console.log(arguments);
  var result = Array.prototype.map.call(arguments, function (item) {
    return item[0];
  });

  console.log(JSON.stringify(result));
});



