<script setup>
import { ref } from 'vue'
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'
import img3 from '@/assets/3.png'

const categories = [
  {
    id: 1,
    title: 'WORKSHIRTS',
    subtitle: 'Formal Campus Wear',
    image: img1,
    link: '/products',
  },
  {
    id: 2,
    title: 'HIMPUNAN JACKETS',
    subtitle: 'Faculty Pride Collection',
    image: img2,
    link: '/products',
  },
  {
    id: 3,
    title: 'CASUAL T-SHIRTS',
    subtitle: 'Everyday Essentials',
    image: img3,
    link: '/products',
  },
]

const hoveredIndex = ref(null)

function setHover(index) {
  hoveredIndex.value = index
}

function clearHover() {
  hoveredIndex.value = null
}

function cardShadowClass(index) {
  return {
    'shadow-2xl z-10': hoveredIndex.value === index,
    'shadow-none': hoveredIndex.value !== index,
  }
}

function imageScaleClass(index) {
  return hoveredIndex.value === index ? 'scale-105' : 'scale-100'
}

function subtitleTransitionClass(index) {
  return hoveredIndex.value === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
}

function exploreTransitionClass(index) {
  return hoveredIndex.value === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
}
</script>

<template>
  <section class="py-32 px-4 md:px-8 bg-white">
    <div class="max-w-[90rem] mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-[#004080]/50 uppercase tracking-[0.4em] text-[10px] mb-4">
          Browse Collection
        </p>
        <h2 class="text-[#004080] text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase">
          Shop by Category
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <a
          v-for="(category, index) in categories"
          :key="category.id"
          :href="category.link"
          class="group relative aspect-[4/5] overflow-hidden cursor-pointer transition-all duration-500"
          :class="cardShadowClass(index)"
          @mouseenter="setHover(index)"
          @mouseleave="clearHover"
        >
          <div class="absolute inset-0 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.title"
              class="w-full h-full object-cover transition-transform duration-700 ease-out"
              :class="imageScaleClass(index)"
            />
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          ></div>

          <div class="absolute inset-x-0 bottom-0 p-8 md:p-10">
            <p
              class="text-white/60 uppercase tracking-[0.3em] text-[10px] mb-3 transition-all duration-500"
              :class="subtitleTransitionClass(index)"
            >
              {{ category.subtitle }}
            </p>

            <h3
              class="text-white text-xl md:text-2xl font-extralight tracking-[0.2em] uppercase mb-6"
            >
              {{ category.title }}
            </h3>

            <span
              class="inline-flex items-center gap-3 text-white text-[11px] uppercase tracking-[0.3em] transition-all duration-500"
              :class="exploreTransitionClass(index)"
            >
              Explore
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
