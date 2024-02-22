<template>
  <div class="signup">
    <h2>Please Sign up</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="state.form.name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="state.form.email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="state.form.password" required>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="state.form.address" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phone" v-model="state.form.phone" required>
      </div>
      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>
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
        alert(errorMessage);
        return;
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

<style scoped>
.signup {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>
