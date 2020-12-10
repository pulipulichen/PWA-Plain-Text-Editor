let appBeforeCreate = async function () {
  let vendorsPath = './scripts/vendors'

  await $.require(vendorsPath, [
    "/hotkeys/hotkeys.min.js",
    '/puli-utils/date-helper.js',
  ])
}