cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "cordova-plugin-firebase.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebase/www/firebase.js",
      "pluginId": "cordova-plugin-firebase",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "onesignal-cordova-plugin": "2.8.4",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-firebase": "2.0.5",
    "cordova-support-google-services": "1.4.0"
  };
});