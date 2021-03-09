<template>
  <div class="home-page">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button plain @click="goToUser">跳转到 User</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log('route: ', route)
    const goToUser = () => {
      router.push('user')
    }
    return {
      goToUser
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
