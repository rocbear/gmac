const { requireOrExit } = require("./utils");
const { missingTemplatePackage } = require("../static/messages");

module.exports = options => {
  const { template } = options;
  const templateMustBeRequired = typeof template === "string";
  const templateCompiler = templateMustBeRequired
    ? requireOrExit(template, {
        message: missingTemplatePackage(template),
        parent: true
      })
    : template;
  return templateCompiler(options);
};
