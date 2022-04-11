import $ from 'jquery'

//let requestHeaders = {
  // 4jsnJjdPml6wKHXNhOg6Z5MqnuVcxt8572ozMKTbICD4EYWs4NQosTR9Flmg
//}

let TinyURLAPI = async function (url) {
  return new Promise((resolve) => {
    /*
    $.post('https://api.tinyurl.com/create', {
      url: url.trim(),
      domain: 'tiny.one'
    }, (result) => {
      resolve(result.data.tiny_url)
    })
    */
    $.get('https://tinyurl.com/api-create.php?url=' + url, resolve)
  })
}

export default TinyURLAPI