<template>
  <div class="home">
    <div class="py-5 bg-gray-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card";

export default {
  name: "Products",
  components: {Card},
  setup() {
    const state = reactive({
      items: []
    })

    axios.get("/api/product/").then(({data}) => {
      state.items = data;
    });

    return {state}
  }
}
</script>

<style scoped>

</style>