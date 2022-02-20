export default (url, params = {}, method = 'GET') => {
  const isLoading = ref(false)
  const result = ref(null)
  const error = ref(null)
  const execute = async (...args) => {
    isLoading.value = true
    error.value = null

    try {
      let options = { method };
      if(method === 'GET') {
        url += '?' + (new URLSearchParams(params)).toString()
      } else {
        options.body = JSON.stringify( params );
      }

      const response = await fetch('https://api.onepeloton.com/api' + url, options)
      const valueResponse = await response.json()

      result.value = valueResponse
      return valueResponse
    } catch (e) {
      error.value = e
      result.value = null
    } finally {
      isLoading.value = false
    }
  };

  return {
    isLoading,
    result,
    error,
    execute
  };
}