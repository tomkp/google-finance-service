
# google-finance-service

    Simple browser-friendly micro service for the google finance api

  [![Build Status](https://travis-ci.org/tomkp/google-finance-service.png)](https://travis-ci.org/tomkp/google-finance-service)


### Symbols as an Array

```
    var GoogleFinance = require('google-finance-service');
    var stocks = new GoogleFinance(['LON:TSCO', 'LON:RDSA']);
    stock.load(
        function (data) {
            /* success */
        },
        function (data) {
            /* error */
    });

```


### Symbols as a String

```
    var GoogleFinance = require('google-finance-service');
    var stocks = new GoogleFinance('LON:TSCO,LON:RDSA');
    stocks.load(
         function (data) {
             /* success */
         },
         function (data) {
             /* error */
     });
```
