<template>
  <div class="container">
    <vxe-form :data="formData" :rules="formRules" title-width="120" @submit="submitEvent" @reset="resetEvent">
      <vxe-form-item title="名称" field="username" :span="24" title-align="center">
        <template #default="{ data }">
          <vxe-input v-model="data.username" placeholder="请输入登录名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="昵称" field="nickname" :span="24" title-align="center">
        <template #default="{ data }">
          <vxe-input v-model="data.nickname" placeholder="请输入昵称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="密码" field="password" :span="24" title-align="center">
        <template #default="{ data }">
          <vxe-input type="password" v-model="data.password" placeholder="请输入密码" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="确认密码" field="confirmPassword" :span="24" title-align="center">
        <template #default="{ data }">
          <vxe-input type="password" v-model="data.confirmPassword" placeholder="请输入密码" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" :span="24">
        <template #default>
          <vxe-button type="submit" status="primary" content="注册"></vxe-button>
          <vxe-button type="reset" content="取消"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script>
import { register } from '@/api/user'

export default {
  // 更换名称
  name: 'RegisterUser',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      loading: false,
      formData: {
        username: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符' }
        ],
        confirmPassword: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  mounted() {
  },
  // 方法集合
  methods: {
    submitEvent() {
      const formData = this.formData
      if (formData.password === formData.confirmPassword) {
        register(formData).then(response => {
          this.$message.success(response.data)
          this.resetEvent()
        })
      } else {
        this.$message.error('两次密码不同')
      }
    },
    resetEvent() {
      this.formData = {
        username: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }
      this.$emit('handleClose')
    }
  }
}
</script>
<style lang="scss" scoped>
.container input {
  color: black !important;
}
</style>
