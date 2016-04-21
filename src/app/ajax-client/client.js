serverStorage = {

  url: 'http://isa-api-sl.herokuapp.com/api',


getUserObject: function() {
      return $.ajax({
          type: 'GET',
          url: this.url + '/userData',
          dataType: 'json',
          success: function(result) {
              console.log('get user information from server');
              console.log(result);
          },
          error: function(error) {
              console.log('error send user ');
          }
      });
  },
  addUserObject: function(person, id) {
    $.ajax({
      type: 'PUT',
      url: this.url + '/userData/' + id,
      contentType:'application/json',
      data: person,
      success: function (result){
        console.log(result);
      },
      error: function (result){
        console.error(result);
      }
    })
  },
  addNewUserObject: function(person) {
    $.ajax({
      type: 'POST',
      url: this.url + '/userData/' ,
      contentType:'application/json',
      data: person,
      success: function (result){
        console.log(result);
      },
      error: function (result){
        console.error(result);
      }
    })
  },






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