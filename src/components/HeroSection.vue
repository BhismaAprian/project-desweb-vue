<script setup>
import headerImg from '@/assets/head.png'
</script>

<template>
  <section
    class="relative h-screen w-full bg-cover bg-top flex items-center overflow-hidden"
    :style="{ backgroundImage: `url(${headerImg})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-[#0a0a0a]/20 to-transparent"
    ></div>

    <div class="absolute top-6 left-1/2 -translate-x-1/2 z-20"></div>

    <div class="relative z-10 pl-20 w-[45%]">
      <p class="uppercase text-white/70 tracking-[0.4em] text-[13px] mb-6">Exclusive Brand</p>

      <h1 class="text-white font-extrabold text-[68px] leading-[1.1] tracking-tight">
        Campus <br />
        Essentials, <br />
        Effortlessly You.
      </h1>

      <button
        class="mt-10 px-8 py-3 bg-white rounded-full flex items-center gap-4 text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        Shop Now
        <span
          class="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-lg"
        >
          →
        </span>
      </button>
    </div>

    <div
      class="absolute right-20 top-1/2 -translate-y-1/2 text-white/90 w-[280px] text-[25px] leading-relaxed"
    >
      Timeless pieces for your everyday campus look clean, confident, and made to move with you.
    </div>
  </section>
</template>

<style scoped>
section {
  image-rendering: auto;
}
</style>
