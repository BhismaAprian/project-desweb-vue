<script setup>
import { ref, onMounted } from 'vue'
import headerImg from '@/assets/head.png'

const animatedTitle = ref(null)
const animatedSubtitle = ref(null)
const animatedParagraph = ref(null)

onMounted(() => {
  const elements = [animatedSubtitle.value, animatedTitle.value, animatedParagraph.value]

  elements.forEach((el, index) => {
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate-show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
  })
})
</script>
<template>
  <section
    class="relative h-screen w-full bg-cover bg-top flex items-center overflow-hidden"
    :style="{ backgroundImage: `url(${headerImg})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-[#0a0a0a]/20 to-transparent"
    ></div>

    <div class="relative z-10 pl-20 w-[45%]">
      <!-- SUBTITLE -->
      <p
        ref="animatedSubtitle"
        class="hero-animate opacity-0 uppercase text-white/70 tracking-[0.4em] text-[13px] mb-6"
      >
        Exclusive Brand
      </p>

      <!-- TITLE -->
      <h1
        ref="animatedTitle"
        class="hero-animate opacity-0 text-white font-extrabold text-[48px] leading-[1.1] tracking-tight"
      >
        Campus <br />
        Essentials, <br />
        Effortlessly You.
      </h1>

      <button
        class="reveal opacity-0 mt-10 px-8 py-3 bg-white rounded-full flex items-center gap-4 text-gray-900 font-semibold shadow-lg hover:bg-gray-200"
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
      class="absolute right-20 top-1/2 -translate-y-1/2 text-white/90 w-[280px] text-[25px] leading-relaxed hero-animate opacity-0"
      ref="animatedParagraph"
    >
      Timeless pieces for your everyday campus look clean, confident, and made to move with you.
    </div>
  </section>
</template>
<style scoped>
.hero-animate {
  transform: translateY(20px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-show {
  opacity: 1 !important;
  transform: translateY(0);
}

.hero-animate:nth-child(1) {
  transition-delay: 0.1s;
}

.hero-animate:nth-child(2) {
  transition-delay: 0.25s;
}

.hero-animate:nth-child(3) {
  transition-delay: 0.45s;
}
</style>
