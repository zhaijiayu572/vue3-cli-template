/**
 * @description: axios拦截器
 * @param axios {object} axios对象
 */
export default function (axios) {
  axios.baseURL = import.meta.env.VITE_BASE_API
}
