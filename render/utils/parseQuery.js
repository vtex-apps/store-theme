export default function parseQuery (path) {
  const queryString = path.substring(path.indexOf('?') + 1)
  const queries = queryString.split('&')
  return queries.reduce((acc, query) => {
    const [key, value] = query.split('=')
    acc[key] = value
    return acc
  }, {})
}
