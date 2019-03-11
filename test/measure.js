module.exports = function measure(label, callback) {
  const start = new Date();
  callback();
  const end = new Date() - start;
  console.info(label + ' - time: %dms', end);
}
