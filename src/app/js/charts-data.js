getCurrenciesFromApi: function i(callback) {
    $.ajax({
        type: 'GET',
        url: '../json/data-skrot.json',
        dataType: 'xml',
        success: function(result) {
          console.log(result)
        },

        error: function(error) {
            console.error(error);
        }
    });
}