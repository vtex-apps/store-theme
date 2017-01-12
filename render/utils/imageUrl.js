const getBaseUrl = (account) => `//${account}.vteximg.com.br`

export default function (account, src, size) {
  const path = src.replace('#width#', size).replace('#height#', size)
  return `${getBaseUrl(account)}${path}`
}
