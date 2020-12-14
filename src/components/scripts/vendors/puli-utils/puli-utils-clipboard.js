if (typeof (PULI_UTILS) === 'undefined') {
  PULI_UTILS = {}
}

PULI_UTILS.copyPlainString = function (text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    //console.log('Async: Copying to clipboard was successful!');
  }, function (err) {
    //console.error('Async: Could not copy text: ', err);
  });
}