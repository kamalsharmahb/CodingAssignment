const path = require("path");
const development = require("./env/development");
const production = require("./env/production");
const defaults = {
  root: path.normalize(__dirname + "/..")
};

module.exports = {
  development: Object.assign({}, development, defaults),
  production: Object.assign({}, production, defaults)
}[process.env.REACT_APP_ENV || "development"];
