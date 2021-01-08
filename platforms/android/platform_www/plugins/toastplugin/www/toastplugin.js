cordova.define("toastplugin.toastplugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'toastplugin', 'coolMethod', [arg0]);
};

});
