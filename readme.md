
# google-finance-service

    Simple browser friendly micro service for google finance api

    [![Build Status](https://travis-ci.org/tomkp/google-finance-service.png)](https://travis-ci.org/tomkp/google-finance-service)


### Symbols as an Array

```
    var service = require('google-finance-service');
    service(['LON:TSCO', 'LON:RDSA'], function (data) { /* success */ }, function (data) { /* error */ });
```


### Symbols as a String

```
    var service = require('google-finance-service');
    service('LON:TSCO,LON:RDSA', function (data) { /* success */ }, function (data) { /* error */ });
```
