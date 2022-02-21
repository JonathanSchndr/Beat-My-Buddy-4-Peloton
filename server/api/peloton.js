import { useBody, useCookie, setCookie } from 'h3'

export default async (req, res) => {
  const body = await useBody(req)

  if(body.path !== '/auth/login') {
    let pelotonSessionId = useCookie(req, 'peloton_session_id') || null
    let pelotonUserId = useCookie(req, 'peloton_user_id') || null

    if(pelotonSessionId === null || pelotonUserId === null) {
      return { 'error': 'You must be logged in to do that.' }
    }
  }

  let options = {
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    'credentials': 'same-origin',
    'method': body.method,
  }

  let urlParams = ''
  if(body.method === 'GET') {
    urlParams = '?' + (new URLSearchParams(params)).toString()
  } else if(body.method === 'POST') {
    options.body = JSON.stringify(body.params)
  } else {
    return { 'error': 'Unsupported method.' }
  }

  const result = await fetch(`https://api.onepeloton.com${body.path}${urlParams}`, options)
  const jsonResult = await result.json()

  if(jsonResult.session_id !== undefined) {
   setCookie(res, 'peloton_session_id', jsonResult.session_id, {
    // domain: '.onepeloton.com',
    httpOnly: true,
    maxAge: 2592000,
    path: '/',
    // sameSite: 'lax',
    // secure: true
   })
  }

  if(jsonResult.user_id !== undefined) {
   setCookie(res, 'peloton_user_id', jsonResult.user_id, {
    // domain: '.onepeloton.com',
    httpOnly: true,
    maxAge: 2592000,
    path: '/',
    // sameSite: 'lax',
    // secure: true
   })
  }

  return jsonResult
}