// 路由拦截器配置
import { getToken } from '@/utils/auth'
import { HOME_PAGE_NAME, LOGIN_PAGE_NAME, UNKNOWN_PAGE_NAME } from '@/router/constants'
import useDynamicRoutesStore from './dynamicRoutesStore'

export default function (router) {
  router.beforeEach((to, from, next) => {
    if(!checkToken(to.name)) {
      next({
        name: LOGIN_PAGE_NAME
      })
    } else {
      if (checkPermission(to)) {
        next()
      } else {
        next({
          name: UNKNOWN_PAGE_NAME
        })
      }
    }
  })

  return router
}
// 检查当前路由是否有权限
const checkPermission = (to) => {
  // 获取当前路由的根路由
  const rootPath = to.path.split('/')[1]
  // 获取当前路由名称
  const name = to.name
  // 如果在白名单中，直接返回true
  if (checkWhiteList(rootPath, name)) {
    return true
  }
  return checkServerPermission(rootPath, name)
}
/**
 * 检查是否在权限白名单内
 * @param rootPath
 * @param name
 * @returns {boolean}
 */
const checkWhiteList = (rootPath, name) => {
  const whiteList = [LOGIN_PAGE_NAME, HOME_PAGE_NAME]
  return whiteList.some(route => {
    return route === name || route === rootPath
  })
}
/**
 * 检查服务端是否有权限
 * @param rootPath
 * @param name
 * @returns {boolean}
 */
const checkServerPermission = (rootPath, name) => {
  const accessRoutes = useDynamicRoutesStore().accessRoutes
  return accessRoutes.some(route => {
    return route.name === name || rootPath === route.name
  })
}
/**
 * 检查token
 * @param routeName 路由名称
 * @returns {string|boolean}
 */
const checkToken = (routeName) => {
  // token免校验名单
  const whiteList = [LOGIN_PAGE_NAME]
  if (whiteList.includes(routeName)) {
    return true
  } else {
    return getToken()
  }
}
