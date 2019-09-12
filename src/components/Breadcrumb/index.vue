<template>
  <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :key="item.path"
        v-if="item.meta.title"
      >
        <span
          v-if="
            item.redirect === 'noredirect' ||
              index === breadcrumbList.length - 1
          "
          >{{ item.meta.title }}</span
        >
        <router-link :to="item.redirect || item.path" v-else>{{
          item.meta.title
        }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumbList();
    },
  },
  created() {
    this.getBreadcrumbList();
  },
  methods: {
    getBreadcrumbList() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name !== 'home') {
        matched = [
          {
            path: '/home',
            meta: {
              title: '首页',
            },
          },
        ].concat(matched);
      }
      this.breadcrumbList = matched;
    },
  },
};
</script>

<style lang="stylus" scoped>
.app-breadcrumb {
  line-height: 50px;
  font-size: 16px;
}
</style>
