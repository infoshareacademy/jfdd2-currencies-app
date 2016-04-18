DataLoader = function () {

  return {
    loadCurrencyData: function (/* array[currencyCodes] */selectedCurrencies) {
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

        }
      });
      return currencies;
    }
  }
}();

