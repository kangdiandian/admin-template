<template>
  <div>
    <el-submenu
      v-if="menu.children && menu.children.length > 0"
      :index="resolvePath(menu.path)"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ menu.meta.title }}</span>
      </template>
      <template v-for="child in menu.children">
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :menu="child"
          :key="child.path"
          :base-path="child.path"
        ></sidebar-item>
        <router-link v-else :to="resolvePath(child.path)" :key="child.path">
          <el-menu-item :index="resolvePath(child.path)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
    <router-link v-else :to="resolvePath(menu.path)">
      <el-menu-item :index="resolvePath(menu.path)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
import path from 'path';

export default {
  name: 'SidebarItem',
  props: {
    menu: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  created() {},
  methods: {
    resolvePath(curPath) {
      return path.resolve(this.basePath, curPath);
    },
  },
};
</script>
