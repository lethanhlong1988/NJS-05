const path = require("path");

// module.export = path.dirname(process.mainMoule.filename);
module.exports = path.dirname(require.main.filename);
