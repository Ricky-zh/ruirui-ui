<template>
  <div class="container">
    <vxe-form :data="formData" title-width="80">
      <vxe-form-item title="名称" field="name" :span="18" title-align="right">
        <template #default="{ data }">
          <vxe-input v-model="data.username" placeholder="请输入登录名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="昵称" field="nickname" :span="18" title-align="right">
        <template #default="{ data }">
          <vxe-input v-model="data.nickname" placeholder="请输入昵称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="密码" field="password" :span="18" title-align="right">
        <template #default="{ data }">
          <vxe-input v-model="data.password" placeholder="请输入密码" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="确认密码" field="confirPassword" :span="18" title-align="right">
        <template #default="{ data }">
          <vxe-input v-model="data.confirmPassword" placeholder="请输入密码" clearable></vxe-input>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script>
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
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
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
      console.info(this.formData)
    },
    resetEvent() {
      console.info(this.formData)
    }
  }
}
</script>
<style lang="scss" scoped>
.container input {
  color: black !important;
}
</style>
