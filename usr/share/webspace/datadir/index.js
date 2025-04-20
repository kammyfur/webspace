platform = require('os').platform;
if (platform == "win32") {
    dir = require('os').userInfo().homedir + "\\AppData\\WebSpace User Data.wbsp";
} else {
    dir = require('os').userInfo().homedir + "/.config/webspacerc";
}
module.exports = dir;