<template>
  <div class="navbar-box">
    <hamburger
      :isActive="sidebar.opened"
      @toggleClick="toggleClick"
      class="app-hamburger"
    ></hamburger>
    <breadcrumb class="breadcrumb"></breadcrumb>
    <div class="right-menu">nihao</div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';
import { mapGetters } from 'vuex';

export default {
  name: 'nav-bar',
  components: {
    Breadcrumb,
    Hamburger,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['sidebar']),
  },
  methods: {
    toggleClick() {
      console.log('a');
      this.$store.dispatch('toggleSideBar');
    },
  },
};
</script>

<style lang="stylus" scoped>
.navbar-box {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  .app-hamburger {
    float: left;
    line-height: 46px;
    &:hover {
      background: #e6f7ff;
    }
  }
  .breadcrumb {
    float: left;
    margin-left: 10px;
  }
  .right-menu {
    float: right;
  }
}
</style>
