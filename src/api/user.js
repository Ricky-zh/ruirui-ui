import request from '@/utils/request'

/**
 * 获取用户信息
 */
export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

/**
 * 更新用户信息
 */
export function updateUserProfile(data) {
  return request({
    url: '/user/updateUserProfile',
    method: 'post',
    data
  })
}

/**
 * 更改密码
 */
export function updateUserPwd(data) {
  return request({
    url: '/user/updateUserPwd',
    method: 'post',
    data
  })
}

