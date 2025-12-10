<script setup>
import { ref } from 'vue'
import productsData from '@/data/products.json'
import { assetUrl } from '@/utils/assetUrl'

const products = productsData.bestsellers.map((product) => ({
  ...product,
  image: assetUrl(product.image),
}))

const scrollContainer = ref(null)
const hoveredProduct = ref(null)

const scroll = (direction) => {
  if (!scrollContainer.value) return
  const scrollAmount = 360
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="py-32 bg-[#F3F4F6]">
    <div class="max-w-[90rem] mx-auto px-4 md:px-8">
      <div class="flex items-end justify-between mb-16">
        <div>
          <p class="text-[#004080]/50 uppercase tracking-[0.4em] text-[10px] mb-4">Featured</p>
          <h2
            class="text-[#004080] text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase"
          >
            ITK's Bestsellers
          </h2>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <button
            @click="scroll('left')"
            class="w-14 h-14 border border-[#004080]/20 flex items-center justify-center text-[#004080] hover:bg-[#004080] hover:text-white hover:border-[#004080] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="scroll('right')"
            class="w-14 h-14 border border-[#004080]/20 flex items-center justify-center text-[#004080] hover:bg-[#004080] hover:text-white hover:border-[#004080] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      ref="scrollContainer"
      class="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
      style="scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="flex-shrink-0 w-80 md:w-[340px] group cursor-pointer"
        style="scroll-snap-align: start"
        @mouseenter="hoveredProduct = product.id"
        @mouseleave="hoveredProduct = null"
      >
        <div class="relative aspect-[4/5] overflow-hidden bg-white mb-5">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div
            class="absolute inset-x-0 bottom-0 transition-transform duration-500 ease-out"
            :class="hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'"
          >
            <button
              class="w-full py-4 bg-[#004080] text-white text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        <div class="text-left">
          <h3 class="text-[#004080] font-extralight text-base tracking-wide mb-2">
            {{ product.name }}
          </h3>
          <p class="text-[#004080]/50 text-sm tracking-wider">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
