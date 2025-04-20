const datadir = require('../datadir');

if (require('fs').existsSync(datadir)) {
    if (require("./ConfigLoader").telemetry) {
        //const Sentry = require('@sentry/electron');
        //Sentry.init({dsn: 'https://af14ae78bb3a47b1a04612e55f5b980f@sentry.io/2100892'});
    }
}
