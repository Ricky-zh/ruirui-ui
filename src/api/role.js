import request from '@/utils/request'

/**
 * 角色列表
 */
export function getRoles() {
  return request({
    url: '/role/roles',
    method: 'post'
  })
}

/**
 * 新增角色
 */
export function addRole(data) {
  return request({
    url: '/role/addRole',
    method: 'post',
    data
  })
}

/**
 * 更新角色
 */
export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

/**
 * 删除角色
 */
export function deleteRole(id) {
  return request({
    url: `/role/delete/${id}`,
    method: 'get'
  })
}
