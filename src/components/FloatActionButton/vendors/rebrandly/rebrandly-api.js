import $ from 'jquery'

let requestHeaders = {
  //"Content-Type": "application/json",
  "apikey": "61b35bdbe4ce45fe802c89b7684fd11f",
  //"workspace": "a558a5903496421999ab6005ca11f7d1"
}

export default function (url) {
  return new Promise((resolve) => {
    let linkRequest = {
      destination: url.trim(),
      domain: { fullName: "rebrand.ly" }
      //, slashtag: "A_NEW_SLASHTAG"
      //, title: "Rebrandly YouTube channel"
    }

    $.ajax({
      url: "https://api.rebrandly.com/v1/links",
      type: "post",
      data: JSON.stringify(linkRequest),
      headers: requestHeaders,
      dataType: "json",
      success: (link) => {
        link = `https://` + link.shortUrl
        resolve(link)
      }
    });
  })
    
}