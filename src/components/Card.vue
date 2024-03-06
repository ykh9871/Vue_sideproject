<template>
  <div class="w-auto overflow-hidden bg-white rounded-lg shadow-sm h-80">
    <div class="flex items-center justify-center w-48 h-48 m-auto">
      <div :style="{backgroundImage: `url(${item.imgurl})`}" class="w-full h-full bg-contain"></div>
    </div>
    <div class="p-2 text-center">
      <div class="mb-2 text-gray-800 text-balance">{{ item.product_name }}</div>
      <div class="flex justify-between">
        <span class="text-sm text-gray-600">원가 : <br>{{ lib.getNumberFormatted(item.price) }}원</span>
        <span class="text-sm text-red-500">할인가 : <br>{{ lib.getNumberFormatted(item.price - (item.price * 10 / 100)) }}원</span>
        <button v-if="$store.state.account.isLogin" @click="addToCart(item.id)" class="px-1 py-1 text-white bg-blue-500 rounded-lg">
          <i aria-hidden="true"></i> 추가
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";

export default {
  name: "Card",
  props: {
    item: Object,
  },
  setup() {
    const addToCart = (itemId) => {
      axios.post(`/api/cart/items/${itemId}`).then(() => {
        window.alert("장바구니에 추가되었습니다.");
        console.log('success')
      })
    };

    return {lib, addToCart}
  }
}
</script>

<style>
</style>