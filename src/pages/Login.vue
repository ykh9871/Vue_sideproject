<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
      @keyup.enter="submit()" v-model="state.form.username">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
      @keyup.enter="submit()" v-model="state.form.password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" @keyup.enter="submit()"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="submit()">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    <div class="text-center mt-3">
      <router-link to="/signup" class="btn btn-link">Signup</router-link>
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
          sessionStorage.setItem("token", accessToken);
          store.commit('setAccount', accessToken);
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

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>