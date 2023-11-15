<template>
  <div class="container">
    <div class="el-avatar"
         style="height: 20em;width: 100%;text-align: center;
         background-color: white;display: flex;justify-content: center;margin-bottom: 2em"
    >
      <img :src="imgPath" class="img-circle img-lg"/>
    </div>

  </div>
</template>

<script>
import avatarPic from '@/icons/avatar/avatar.jpg'

export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      imgPath: avatarPic
    }
  },
  created() {
    const avatar = this.$store.getters.avatar
    if (avatar === undefined) {
      this.imgPath = avatarPic
    } else if (avatar.length === 0) {
      this.imgPath = avatarPic
    } else {
      this.imgPath = avatar
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
