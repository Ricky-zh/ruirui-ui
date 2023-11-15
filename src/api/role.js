import request from '@/utils/request'

export function getRoles() {
  return request({
    url: '/role/roles',
    method: 'post'
  })
}

export function addRole(data) {
  return request({
    url: '/role/addRole',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/delete/${id}`,
    method: 'get'
  })
}
