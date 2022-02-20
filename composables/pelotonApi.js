export default async (url, params = {}, method = 'GET') => {
    let options = {
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      // 'mode': 'no-cors',
      'credentials': 'same-origin',
      method
    };

    if(method === 'GET') {
      url += '?' + (new URLSearchParams(params)).toString()
    } else {
      options.body = JSON.stringify( params )
    }

    return await fetch('https://api.onepeloton.com' + url, options)
}