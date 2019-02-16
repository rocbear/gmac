const fs = require("fs");
const path = require("path");
const pkgDir = require("pkg-dir");

const defaultConfig = require("../static/defaultConfig");

const configFileName = ".gmac.js";
const projectRoot = pkgDir.sync();
const configFile = path.resolve(projectRoot, configFileName);
const configFileExists = fs.existsSync(configFile);
const projectConfig = configFileExists ? require(configFile) : {};

module.exports = {
  ...defaultConfig,
  ...projectConfig
};
