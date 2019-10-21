cordova.define("com.panin.cordova.filechooser.FileChooser", function(require, exports, module) {

var exec = require("cordova/exec");

var FileChooser = function () {
  this.name = "FileChooser";
};

FileChooser.prototype.open = function (success, failure) {
                                     exec(success, failure, "FileChooser", "open", []);
                                 };

FileChooser.prototype.chooseImage = function (success, failure) {
                                     exec(success, failure, "FileChooser", "image", []);
                                 };

module.exports = new FileChooser();

});
