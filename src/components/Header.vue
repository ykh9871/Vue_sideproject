<template>
  <header class="h-auto bg-gray-200">
    <nav class="flex items-center justify-between h-16 max-w-full p-3 mx-auto lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/">
         <img src="@/assets/mactop.png" class="w-auto h-10"/>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button @click="toggleMobileMenu" id="open-mobile-menu" type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
          <div class="px-3 bg-indigo-100 rounded-md">
              <router-link to="/" class="text-lg font-semibold leading-none text-gray-900">Main</router-link>
          </div>
          <div class="px-3" v-if="$store.state.account.isLogin">
              <router-link to="/orders" class="text-lg font-semibold leading-none text-gray-900">Orders</router-link>
          </div>
          <div class="px-3">
              <router-link to="/products" class="text-lg font-semibold leading-none text-gray-900">Products</router-link>
          </div>
          <div class="px-3" v-if="$store.state.account.isLogin">
              <router-link to="#" class="text-lg font-semibold leading-none text-gray-900">My Page</router-link>
          </div>
      </div>
      <div class="hidden px-3 py-1 login lg:flex lg:flex-1 lg:justify-end">
          <a class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg login hover:bg-gray-50"  v-if="!$store.state.account.isLogin"
          @click="$router.push('/login')">Login</a>
          <a class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg login hover:bg-gray-50" v-else @click="logout()">Logout</a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div :class="{ 'hidden': !isMobileMenuOpen }" id="mobile-menu-container" class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
          class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
              <router-link to="/" class="-m-1.5 p-1.5">
                <img src="@/assets/mactop.png" class="w-auto h-12"/>
              </router-link>
              <button @click="toggleMobileMenu" id="close-menu-button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
          <div class="flow-root mt-6">
              <div class="grid grid-cols-1 gap-4 p-3 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
                  <div class="py-6 space-y-2">
                      <div class="-mx-3">
                          <router-link to="/" @click="toggleMobileMenu"
                              class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Main</router-link>
                          <router-link to="/orders" @click="toggleMobileMenu" v-if="$store.state.account.isLogin"
                              class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Orders</router-link>
                          <router-link to="/products" @click="toggleMobileMenu"
                              class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Products</router-link>
                          <router-link to="#" @click="toggleMobileMenu" v-if="$store.state.account.isLogin"
                              class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg my-page hover:bg-gray-50">My Page</router-link>
                          <router-link to="/login" @click="toggleMobileMenu"
                                       class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg login hover:bg-gray-50" 
                                       v-if="!$store.state.account.isLogin">Login</router-link>
                          <a 
                             class="block px-3 py-4 ml-10 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg login hover:bg-gray-50" 
                             @click="logout()" v-else>Logout</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </header>
</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
  data () {
    return {
      isMobileMenuOpen: false // 모바일 메뉴 상태를 저장하는 변수
    }
  },
  name: 'Header',
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen; // 모바일 메뉴 상태를 토글
    },
  },
  setup() {
    const logout = () => {
      // 세션 스토리지에서 JWT 토큰 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      // 사용자 상태 초기화
      store.commit('setAccount', { email: '', exp: '', isLogin: false });
      
      // 홈페이지로 이동
      router.push({ path: '/' });
    };

    return { logout };
  },
};
</script>

<style>
</style>
