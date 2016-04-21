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

          //var result = {
          //  values: {
          //    PLN: [2.2222],
          //    USD: [3.3333]
          //  }
          //};

          var result = {
            values: {}
          };

          selectedCurrencies.forEach(function (currency) {
            result.values[currency] = [];
          });

          data.forEach(function (dataSet) {
            selectedCurrencies.forEach(function (currency) {
              result.values[currency].push(dataSet.rates[currency]);
            });
          });

          callback(result);
        }
      });
    }
  }
}();

