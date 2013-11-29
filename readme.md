
#Examples

## Symbols as an Array

```
    var service = require('google-finance-service');
    $.when(
        service(['LON:TSCO', 'LON:RDSA'])
    ).then(
        function (data) {}
    );
```


## Symbols as a String

```
    var service = require('google-finance-service');
    $.when(
        service('LON:TSCO,LON:RDSA')
    ).then(
        function (data) {}
    );
```