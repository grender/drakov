require('colors');

var stealthMode = false;

var logCallback = undefined

exports.setStealthMode = function(isStealthMode) {
    stealthMode = isStealthMode;
};

exports.setLogCallback = function(c) {
    logCallback = c;
};

exports.log = function() {
    if (stealthMode) {
        return;
    }
    var data=Array.prototype.slice.call(arguments).join(' ')
    if(typeof(logCallback)==="function") {
        logCallback(data)
    }else {
        console.log(data);
    }
};
