<template>
  <div class="app-wrapper" :class="classObj">
    <template>
      <side-bar class="sidebar-container"></side-bar>
      <div class="main-container">
        <section>
          <div class="fixed-header">
            <nav-bar></nav-bar>
            <tags-view></tags-view>
          </div>
          <app-main></app-main>
        </section>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar from './components/Sidebar/index';
import AppMian from './components/AppMain';
import Navbar from './components/Navbar';
import TagsView from './components/TagsView';

export default {
  name: 'Layout',
  components: {
    [Sidebar.name]: Sidebar,
    [AppMian.name]: AppMian,
    [Navbar.name]: Navbar,
    [TagsView.name]: TagsView,
  },
  computed: {
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FFF;
}
.main-container {
  position: relative;
  height: 100%;
}
</style>
