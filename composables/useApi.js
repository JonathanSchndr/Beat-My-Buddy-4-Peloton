export default async (body) => {
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