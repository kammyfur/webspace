const datadir = require('../datadir');
raw = require('fs').readFileSync(datadir).toString();
console.log("Working around deprecation #0005");
buffer = Buffer.from(raw, 'base64');
//console.log(raw);
//console.log(buffer.toString("ascii"));
module.exports = JSON.parse(buffer.toString("ascii"));