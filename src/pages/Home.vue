<template>
    <section>
      <div class="grid grid-cols-1 gap-4 h-dvh md:grid-cols-1">
        <div class="w-auto h-auto px-10 py-24 mb-4 text-black bg-top bg-cover md:w-auto md:h-full "
            style="background-image: url(https://www.apple.com/v/macbook-pro/aj/images/overview/welcome/welcome_hero_endframe__66ipqm3o5gyu_large.jpg)">
            <p class="mb-1 text-5xl font-bold">MacBook Pro</p>
            <p class="mb-3 text-6xl font-bold">비교 불가 성능.</p>
            <p class="mb-10 text-6xl font-bold ">시선 강탈 매력.</p>
            <routerLink to="/products"
                    class="px-8 py-4 text-base font-bold text-white uppercase bg-black rounded hover:bg-gray-200 hover:text-gray-800">MacBook Pro 보러가기</routerLink>
        </div>
        <div  class="w-auto h-auto px-10 py-24 mb-4 text-white bg-top bg-cover md:w-auto md:h-full"
            style="background-image: url(https://www.apple.com/v/macbook-air/q/images/overview/macbook_air_m1__dxctrdvvxm4i_large.jpg)">
            <div class="md:w-1/2">
                <p class="mb-1 text-6xl font-bold">MacBook Air</p>
                <p class="mb-3 text-4xl font-bold">어디서든 일하고, 즐기고, 창작할 수 있도록</p>
                <p class="mb-10 text-4xl font-bold">해주는 놀랍도록 얇고 빠른 노트북.</p>
                <routerLink to="/products"
                    class="px-8 py-4 text-base font-bold text-black uppercase bg-gray-200 rounded hover:bg-gray-200 hover:text-gray-800">MacBook Air보러가기</routerLink>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
</script>


<style scoped>

</style>