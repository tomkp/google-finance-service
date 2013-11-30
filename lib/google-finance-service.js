var $ = require('jquery');

module.exports = function (symbols, success, error) {
    if (Array.isArray(symbols)) {
        symbols = symbols.join();
    }
    var options = {
        url: "http://www.google.com/finance/info",
        data: {
            q: symbols,
            infotype: "infoquoteall"
        },
        dataType: "jsonp",
        cache: true,
        success: success,
        error: error
    };
    $.ajax(options);
    return this;
};