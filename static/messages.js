module.exports = {
  missingTemplatePackage: template =>
    `Missing template "${template}". You probably need to install it with:\nnpm install --save ${template}`
};
