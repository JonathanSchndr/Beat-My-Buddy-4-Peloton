export default async (body) => {
  body.pelotonId = localStorage.getItem('peloton_session_id') || null
  body.userId = localStorage.getItem('peloton_user_id') || null

  let options = {
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    'method': 'POST',
    'body': JSON.stringify(body)
  };

  const result = await fetch('/api/peloton', options)
  const jsonResult = await result.json()

  return jsonResult
}