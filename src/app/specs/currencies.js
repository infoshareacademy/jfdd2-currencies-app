QUnit.module('DataLoader');

QUnit.test('should result be empty when no data', function (assert) {
  // given:
  var selectedCurrencies = ['PLN', 'USD', 'EUR'];

  // when:
  var result = DataLoader.loadCurrencyData(selectedCurrencies);

  // then:
  assert.deepEqual(result.dates, [], 'daty powinny być puste');
  $.each(selectedCurrencies, function (index, currency) {
    assert.deepEqual(result.values[currency], [], 'empty values for ' + currency);
  });
});

QUnit.test('should result has one date and one value per currency', function (assert) {
  // given:
  var selectedCurrencies = ['PLN', 'USD'];
  var oneResultData = [{
    "base": "EUR",
    "date": "2009-12-31",
    "rates": {
      "CZK": 1.1111,
      "PLN": 2.2222,
      "USD": 3.3333,
      "CAD": 4.4444
    }
  }];
  $.ajax = function(options) {
    equal(options.url, "../json/data.json");
    options.success(oneResultData);
  };


  // when:
  var result = DataLoader.loadCurrencyData(selectedCurrencies);

  // then:
  $.each(selectedCurrencies, function (index, currency) {
    assert.equal(result.values[currency].length, , 'one values for ' + currency);
  });
  assert.equal(result.values['PLN'][0], 2.2222, 'value for PLN');
  assert.equal(result.values['USD'][0], 3.3333, 'value for USD');
});