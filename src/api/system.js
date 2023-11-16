import request from '@/utils/request'

/**
 * 用户登录
 */
export function login(data) {
  return request({
    url: '/open/login',
    method: 'post',
    data
  })
}

/**
 * 用户注册
 */
export function register(data) {
  return request({
    url: '/open/register',
    method: 'post',
    data
  })
}

/**
 * 退出系统
 */
export function logout() {
  return request({
    url: '/system/logout',
    method: 'post'
  })
}
