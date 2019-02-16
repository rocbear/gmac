const requireOrExit = (package, {
  parent = false,
  message = `Missing package ${package}`
}) => {
  try {
    const req = parent ? module.parent.require : require;
    return req(package);
  } catch (error) {
    console.error(message);
    process.exit();
  }
};

module.exports = {
  requireOrExit
};
