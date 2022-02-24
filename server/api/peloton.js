import { useBody } from 'h3'

export default async (req, res) => {
  const body = await useBody(req)

  let options = {
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache',
    },
    'method': body.method,
  }

  if(body.path !== '/auth/login') {
    options.headers.Cookie = `peloton_session_id=${body.pelotonId}; peloton_user_id=${body.userId}`
    if(body.pelotonId === null || body.userId === null) {
      return { status: 401, 'error': 'You must be logged in to do that.' }
    }
  }

  let urlParams = ''
  if(body.method === 'GET') {
    urlParams = '?' + (new URLSearchParams(body.params)).toString()
  } else if(body.method === 'POST') {
    options.body = JSON.stringify(body.params)
  }

  const result = await fetch(`https://api.onepeloton.com${body.path}${urlParams}`, options)
  const jsonResult = await result.json()
  return jsonResult
}