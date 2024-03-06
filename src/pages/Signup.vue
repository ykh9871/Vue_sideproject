<template>
  <div class="flex flex-col items-stretch justify-center min-h-full px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">회원 가입</h2>
      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingName" 
              v-model="state.form.name" required>
            <label for="floatingName">Name</label>
          </div>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingEmail" 
              v-model="state.form.email" required>
            <label for="floatingEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" 
              v-model="state.form.password" required>
            <label for="floatingPassword">
              Password<br>
              문자와 숫자를 8자 이상 입력해 주세요
            </label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingAddress" 
              v-model="state.form.address" required>
            <label for="floatingAddress">Address</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingPhone" 
              v-model="state.form.phone" required>
            <label for="floatingPhone">
              Phone<br>
              -는 제외하고 입력해 주세요
              </label>
          </div>
          <div class="flex items-center justify-between mb-0">
            <router-link to="/login" class="text-sm font-bold text-gray-700 hover:text-gray-300">로그인 화면으로 돌아가기</router-link>
            <button @click="submitForm()" 
                    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    회원 가입
                    </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/scripts/router";
import validation from "@/scripts/validation"

export default {
  setup() {
    const state = reactive({
      form: {
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
      }
    });

    const submitForm = () => {
      const errorMessage = validation.validateForm(state.form); // 폼 유효성 검사 실행
      if (errorMessage) {
        return alert(errorMessage);
      }
      const formattedPhone = validation.formatPhoneNumber(state.form.phone); // 전화번호 자동 포맷팅
      state.form.phone = formattedPhone; // 포맷팅된 전화번호를 state에 할당

      axios.post('http://localhost:8000/signup/', state.form)
        .then(() => {
          router.push({ path: "/login" });
          window.alert('회원가입이 완료되었습니다.');
        })
        .catch(error => {
          window.alert('회원가입에 실패했습니다.');
          console.error(error);
        });
    };

    return { state, submitForm };
  }
}
</script>

<style>
</style>
