<script setup>
import { ref } from 'vue'
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'
import img3 from '@/assets/3.png'

const products = [
  { id: 1, name: 'Classic Workshirt', price: 'Rp 249.000', image: img1 },
  { id: 2, name: 'Himpunan Jacket TI', price: 'Rp 399.000', image: img2 },
  { id: 3, name: 'Campus Tee Black', price: 'Rp 149.000', image: img3 },
  { id: 4, name: 'Formal White Shirt', price: 'Rp 279.000', image: img1 },
  { id: 5, name: 'Varsity Jacket', price: 'Rp 449.000', image: img2 },
  { id: 6, name: 'ITK Logo Tee', price: 'Rp 129.000', image: img3 },
]

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
      <!-- Section Header -->
      <div class="flex items-end justify-between mb-16">
        <div>
          <p class="text-[#004080]/50 uppercase tracking-[0.4em] text-[10px] mb-4">Featured</p>
          <h2
            class="text-[#004080] text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase"
          >
            ITK's Bestsellers
          </h2>
        </div>

        <!-- Navigation Arrows -->
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

    <!-- Horizontal Scroll Container -->
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
