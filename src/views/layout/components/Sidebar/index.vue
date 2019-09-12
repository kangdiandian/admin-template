<template>
  <section class="kit-sidebar">
    <div class="kit-sidebar__header">
      <h1 class="kit-sidebar__brand">
        <router-link
          :to="{ name: 'home' }"
          class="kit-sidebar__brand-lg"
          v-if="sidebar.opened"
          >ADMINTEMPIATE</router-link
        >
        <router-link
          v-else
          :to="{ name: 'home' }"
          class="kit-sidebar__brand-mini"
          >ADMIN</router-link
        >
      </h1>
    </div>
    <el-scrollbar class="kit-sidebar__body" wrapClass="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="!sidebar.opened"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <sidebar-item
          v-for="(menu, index) in menus"
          :menu="menu"
          :key="index"
          :base-path="menu.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';

export default {
  name: 'side-bar',
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters(['sidebar', 'menus']),
  },
};
</script>
