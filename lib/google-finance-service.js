var $ = require('jquery');

var GoogleFinance = function(symbols) {
    if (Array.isArray(symbols)) {
        this.symbols = symbols.join();
    } else {
        this.symbols = symbols;
    }
};

GoogleFinance.prototype.load = function (success, error) {
    var options = {
        url: "http://www.google.com/finance/info",
        data: {
            q: this.symbols,
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

module.exports = GoogleFinance;