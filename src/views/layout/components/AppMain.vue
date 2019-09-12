<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'app-main',
};
</script>
<style lang="stylus" scoped>
.app-main {
  min-height: (100vh - 50px);
}
</style>
