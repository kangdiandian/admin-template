<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ title }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import buildWhere from 'buildwhere';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: '',
    };
  },
  created() {
    const params = { id: '123', user_name: 'admin' };
    const whereArr = [
      {
        param: 'id',
        isLike: false,
      },
      {
        param: 'user_name',
        isLike: true,
        likeRule: 'right',
      },
    ];
    this.title = buildWhere('user', params, whereArr);
  },
};
</script>
