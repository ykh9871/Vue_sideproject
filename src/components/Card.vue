<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgurl})`}"/>
    <div class="card-body">
      <p class="card-text">
        <span>{{ item.product_name }} &nbsp;</span>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" @click="addToCart(item.id)">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
        <small class="price text-muted">
          {{ lib.getNumberFormatted(item.price) }}원
        </small>
        <small class="real text-danger">
          {{ lib.getNumberFormatted(item.price - (item.price * 10 / 100)) }}원
        </small>
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

<style scoped>
.card .img {
  display: inline-block;
  width: 50%;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>