serverStorage = {

  url: 'http://localhost:8030',
  //url: 'http://svshowroom.cloudapp.net:8030',

getUserObject: function(callback, userEmail) {
      $.ajax({
          type: 'GET',
          url: this.url + userEmail,
          dataType: 'json',
          success: function(result) {
              console.info(result);
            console.log('get user infomation from server');
              callback(result);
          },
          error: function(error) {
              console.error(error);
            console.log('send user information on server');
          }
      });
  },
  addUserObject: function(person, userEmail) {
    $.ajax({
      type: 'POST',
      url: this.url + userEmail,
      contentType:'application/json',
      data: JSON.stringify(person),
      success: function (result){
        console.log(result);
      },
      error: function (result){
        console.error(result);
      }
    })
  }





  //EXAMPLES



  //getInsurance: function() {
  //    $.ajax({
  //        type: 'GET',
  //        url: this.url + '/insurance',
  //        dataType: 'text',
  //        success: function(result) {
  //            var wiersze = result.split('\r')    ;
  //            var wierszNaglowkowy = wiersze[0].split(',');
  //            var obiekty = [];
  //
  //            wiersze.forEach(function(wiersz, i) {
  //                if (i == 0) return;
  //                var nowyObiekt = {};
  //                wiersz.split(',').forEach(function(wartosc, indexWartosci) {
  //                    var nazwaPolaWObiekcie = wierszNaglowkowy[indexWartosci];
  //                    nowyObiekt[nazwaPolaWObiekcie] = wartosc;
  //                });
  //                obiekty.push(nowyObiekt)
  //            });
  //
  //            console.log(obiekty);
  //        }
  //    })
  //},


  //getBooks: function(callback) {
  //    $.ajax({
  //        type: 'GET',
  //        url: this.url + '/books',
  //        dataType: 'xml',
  //        success: function(result) {
  //            console.info(result);
  //            callback(result);
  //        },
  //        error: function(error) {
  //            console.error(error);
  //        }
  //    });
  //},

  //getPeople: function(callback, queryData) {
  //    $.ajax({
  //        type: 'GET',
  //        url: this.url + '/people',
  //        data: queryData,
  //        dataType: 'json',
  //        success: function(result) {
  //            console.info(result);
  //            callback(result);
  //        }
  //    });
  //},
  //
  //
  //getBooksWithPromise: function() {
  //  return $.ajax({
  //    type: 'GET',
  //    url: this.url + '/books',
  //    dataType: 'xml'
  //  });
  //},
  //
  //getCompaniesWithPromise: function() {
  //  return $.ajax({
  //    type: 'GET',
  //    url: this.url + '/companies',
  //    dataType: 'json'
  //  });
  //},
  //
  //getPeopleWithPromise: function(queryData) {
  //  return $.ajax({
  //    type: 'GET',
  //    url: this.url + '/people',
  //    data: queryData,
  //    dataType: 'json'
  //  });
  //},


  //runPromise: function() {
  //
  //    $.when(serverStorage.getPeopleWithPromise(), serverStorage.getBooksWithPromise())
  //        .done(function(people, books) {
  //            console.debug(people, books);
  //        })
  //        .fail(function(error) {
  //            console.error(error);
  //        })
  //        .always(function(){
  //            console.log('always method');
  //        })
//  //},
//
//
//  addPerson: function(person) {
//    $.ajax({
//      type: 'POST',
//      url: this.url + '/people/add',
//      contentType:'application/json',
//      data: JSON.stringify(person),
//      success: function (result){
//        console.log(result);
//      },
//      error: function (result){
//        console.error(result);
//      }
//    })
//
//  }
};