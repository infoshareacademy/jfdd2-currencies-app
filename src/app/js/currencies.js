DataLoader = function () {

  return {
    /**
     *
     * @param selectedCurrencies
     * @returns {{dates: Array, values: {}}}
     */
    loadCurrencyData: function (selectedCurrencies, callback) {
      var currencies = {
        dates: [],
        values: {}
      };
      $.each(selectedCurrencies, function (index, currency) {
        currencies.values[currency] = [];
      });

      console.log(currencies);

      $.ajax({
        url: "../json/data.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
          var transformedData =...
          callback(transformedData);
        }
      });
    }
  }
}();

