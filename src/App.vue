<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/scripts/store";
import {watch} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  setup() {
  const checkToken = () => {
    const accessToken = localStorage.getItem('accessToken'); // 세션 스토리지에서 JWT를 가져옵니다.
    if (!accessToken) {
      // JWT가 없으면 사용자를 로그아웃 상태로 설정합니다.
      store.commit("setAccount", '');
    }
  };

  const route = useRoute();

    watch(route, () => {
      checkToken();
    });
  }
}
</script>

<style>
</style>