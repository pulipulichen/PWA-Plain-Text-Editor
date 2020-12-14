if (typeof (PULI_UTILS) === 'undefined') {
  PULI_UTILS = {}
}

PULI_UTILS.sleep = function (ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}