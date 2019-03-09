import md5 from 'blueimp-md5'

const URL = 'https://fanyi-api.baidu.com/api/trans/vip/translate'
const APPID = '20190309000275500'
const KEY = 'PdnGtNIAeRN3qKmOI2DQ'

export default async (
  query: string,
  from: string = 'auto',
  to: string = 'en'
): Promise<any> => {
  const salt = Date.now()
  const sign = md5(`${APPID}${query}${salt}${KEY}`)

  const url = `${URL}?q=${query}&from=${from}&to=${to}&appid=${APPID}&salt=${salt}&sign=${sign}`
  const result = await fetch(url)
  return result
}
