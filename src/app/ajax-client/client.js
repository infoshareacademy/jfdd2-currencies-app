serverStorage = {

  url: 'http://isa-api-sl.herokuapp.com/api',


  getUserObject: function () {
    return $.ajax({
      type: 'GET',
      url: this.url + '/userData',
      dataType: 'json',
      success: function (result) {
        console.log('get user information from server');
        console.log(result);
      },
      error: function (error) {
        console.log('error send user ');
      }
    });
  },
  addUserObject: function (person, id) {
    $.ajax({
      type: 'PUT',
      url: this.url + '/userData/' + id,
      contentType: 'application/json',
      data: person,
      success: function (result) {
        console.log(result);
      },
      error: function (result) {
        console.error(result);
      }
    })
  },
  addNewUserObject: function (person) {
    $.ajax({
      type: 'POST',
      url: this.url + '/userData/',
      contentType: 'application/json',
      data: person,
      success: function (result) {
        console.log(result);
      },
      error: function (result) {
        console.error(result);
      }
    })
  },

};