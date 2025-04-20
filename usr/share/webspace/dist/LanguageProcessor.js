if (require('fs').existsSync(datadir)) {
    global.lang = require('../i18n/' + require("./ConfigLoader").lang + ".json");
    global.strings = require('../i18n/' + require("./ConfigLoader").lang + ".json");
} else {
    global.lang = require('../i18n/en.json');
    global.strings = require('../i18n/en.json');
}
require('electron').remote.getCurrentWindow().resizable = false;
global.refs = require('./ApplicationsReferences.json');