// lib.js

// 이메일 형식 확인 함수
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
// 비밀번호 강도 확인 함수
const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/; // 변경된 비밀번호 정규식
    return passwordRegex.test(password);
  };
  
// 전화번호 형식 확인 함수
const isValidPhone = (phone) => {
    const phoneRegex = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
    return phoneRegex.test(phone);
  };
  
// 전화번호 자동 포맷팅 함수
const formatPhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    if (phoneNumber.length === 0) {
      return '';
    }
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
    }
  };
  
// 폼 전체 유효성 검사 함수
const validateForm = (form) => {
    if (!form.name || !form.email || !form.password || !form.address || !form.phone) {
      return '모든 필드를 작성해주세요.';
    }
  
    if (!isValidEmail(form.email)) {
      return '유효한 이메일 주소를 입력해주세요.';
    }
  
    if (!isStrongPassword(form.password)) {
      return '비밀번호는 최소 8자 이상이어야 하며, 문자와 숫자를 혼합하여야 합니다.';
    }
  
    if (!isValidPhone(form.phone)) {
      return '유효한 전화번호를 입력해주세요. - 는 제외하고 입력해주세요';
    }
  
    return null; // 유효성 검사 통과
  };

export default {
  isValidEmail,
  isStrongPassword,
  isValidPhone,
  formatPhoneNumber,
  validateForm
};