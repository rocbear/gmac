const path = require("path");
const fs = require("fs");
const commandLineArgs = require("command-line-args");
const config = require("./lib/config");
const compile = require("./lib/compile");

const optionDefinitions = [
  { name: "name", alias: "n", type: String, defaultOption: true },
  { name: "path", alias: "p", type: String },
  { name: "styles", alias: "s", type: Boolean, defaultValue: true }
];

const options = commandLineArgs(optionDefinitions);
const mergedOptions = {
  ...config,
  ...options
};
const processedOptions = {
  ...mergedOptions,
  fullPath: path.join(mergedOptions.root, mergedOptions.path),
  styleName:
    typeof mergedOptions.styleName === "function"
      ? mergedOptions.styleName(mergedOptions)
      : mergedOptions.styleName
};
const {
  fullPath,
  template,
  name,
  styleName
} = processedOptions;
const {
  component: { content: component, extension: componentExtension },
  styles: { content: styles, extension: stylesExtension }
} = compile(processedOptions);

if (!fs.existsSync(fullPath)) {
  fs.mkdirSync(fullPath, { recursive: true });
}

fs.writeFileSync(
  path.join(fullPath, `${name}.${componentExtension}`.replace("..", ".")),
  component,
  "utf-8"
);
fs.writeFileSync(
  path.join(fullPath, `${styleName}.${stylesExtension}`.replace("..", ".")),
  styles,
  "utf-8"
);
