cordova.define("toastplugin.toastplugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.showToast = function(arg0,success,error) {
    exec(success, error, 'MyToast', 'showToast', [arg0]);
};


});
