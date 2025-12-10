<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import productsData from '@/data/products.json'
import { assetUrl } from '@/utils/assetUrl'
gsap.registerPlugin(ScrollTrigger)

const products = productsData.spotlight.map((product) => ({
  ...product,
  img: assetUrl(product.image),
}))

const cards = ref([])

onMounted(() => {
  gsap.from(cards.value, {
    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: cards.value[0],
      start: 'top 85%',
    },
  })
})

const onMouseMove = (e, index) => {
  const card = cards.value[index]
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  gsap.to(card, {
    rotateY: x * 0.05,
    rotateX: -y * 0.05,
    scale: 1.04,
    duration: 0.4,
    ease: 'power3.out',
  })
}

const resetTilt = (index) => {
  gsap.to(cards.value[index], {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    duration: 0.3,
    ease: 'power3.out',
  })
}
</script>
<template>
  <section class="py-24 px-16 bg-[#0a0a0a] text-white">
    <h2 class="text-5xl font-extrabold mb-16 tracking-tight">
      Popular <span class="text-gray-400">Products</span>
    </h2>

    <div class="grid grid-cols-3 gap-12">
      <div
        v-for="(p, index) in products"
        :key="p.id"
        ref="cards"
        class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-white/30 cursor-pointer overflow-hidden"
        @mousemove="(e) => onMouseMove(e, index)"
        @mouseleave="() => resetTilt(index)"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-2xl mb-6">
          <img
            :src="p.img"
            class="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <h3 class="text-2xl font-bold mb-2 group-hover:text-white transition">
          {{ p.name }}
        </h3>

        <p class="text-gray-400 text-lg">{{ p.price }}</p>

        <!-- Hover Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
div[ref='cards'] {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
