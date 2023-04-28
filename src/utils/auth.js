const tokenKey = 'token'
/**
 * 获取token
 * @returns {string}
 */
export const getToken = () => {
  return localStorage.getItem(tokenKey)
}
/**
 * 设置token
 * @param token {string} token
 */
export const setToken = (token) => {
  return localStorage.setItem(tokenKey, token)
}
export const clearToken = () => {
  return localStorage.removeItem(tokenKey)
}
