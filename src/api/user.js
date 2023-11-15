import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function updateUserProfile(data) {
  return request({
    url: '/user/updateUserProfile',
    method: 'post',
    data
  })
}

export function updateUserPwd(data) {
  return request({
    url: '/user/updateUserPwd',
    method: 'post',
    data
  })
}

