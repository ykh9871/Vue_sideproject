<template>
  <div class="flex flex-col items-stretch justify-center min-h-full px-6 py-0 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">새로운 맥북을 찾아보세요</h2>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com"
            @keyup.enter="submit()" v-model="state.form.username">
            <label for="floatingEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
            @keyup.enter="submit()" v-model="state.form.password">
            <label for="floatingPassword">Password</label>
          </div>
          <p class="py-1 mt-10 text-sm text-center text-gray-500"> 비밀번호를 잊으셨나요?
            <router-link to="#" class="btn btn-link">비밀번호 찾기</router-link>
          </p>
        </form>
        </div>
        <div>
          <button class="w-100 btn btn-lg btn-primary" @click="submit()">Sign in</button>
        </div>
        <p class="mt-10 text-sm text-center text-gray-500">회원이 아니신가요?
          <router-link to="/signup" 
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            지금 회원가입 하세요
          </router-link>
        </p>
      </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import store from "@/scripts/store";
import router from "@/scripts/router";


export default {
  setup() {
    const state = reactive({
      form: {
        username: "",
        password: ""
      }
    });

    const submit = () => {
      // axios의 POST 요청에 대한 설정 객체
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Content-Type을 application/x-www-form-urlencoded로 설정
        }
      };

      // state.form 객체를 x-www-form-urlencoded 형식으로 변환
      const formData = new URLSearchParams();
      for (const key in state.form) {
        formData.append(key, state.form[key]);
      }

      // POST 요청
      axios.post("/api/login", formData, config)
        .then((res) => {
          // 로그인 성공 시 처리
          const accessToken = res.data.access_token;
          const refreshToken = res.data.refresh_token;
          const email = res.data.username
          const exp = res.data.exp
          const isLogin = true
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          store.commit('setAccount', {email, exp, isLogin});
          router.push({ path: "/" });
          window.alert("로그인하였습니다.");
        })
        .catch(() => {
          // 로그인 실패 시 처리
          window.alert("로그인 정보가 존재하지 않습니다..");
        });
    };

    return { state, submit };
  }
};
</script>

<style>
</style>