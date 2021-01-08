cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "toastplugin.toastplugin",
      "file": "plugins/toastplugin/www/toastplugin.js",
      "pluginId": "toastplugin",
      "clobbers": [
        "cordova.plugins.toastplugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "toastplugin": "1.0.0"
  };
});