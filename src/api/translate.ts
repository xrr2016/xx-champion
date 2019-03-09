import md5 from 'blueimp-md5'
import fetchJsonp from 'fetch-jsonp'

const URL_HTTP = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
const URL_HTTPS = 'https://fanyi-api.baidu.com/api/trans/vip/translate'
const APPID = '20190309000275500'
const KEY = 'PdnGtNIAeRN3qKmOI2DQ'

const protocol = location.protocol

export default async (
  query: string,
  from: string = 'auto',
  to: string = 'en',
  callback: Function = () => {}
): Promise<any> => {
  const salt = Date.now()
  const sign = md5(`${APPID}${query}${salt}${KEY}`)
  const base = protocol === 'http:' ? URL_HTTP : URL_HTTPS
  const url = `${base}?q=${query}&from=${from}&to=${to}&appid=${APPID}&salt=${salt}&sign=${sign}`

  const result = await fetchJsonp(url)
    .then(response => response.json())
    .catch(err => err)
  return result
}
