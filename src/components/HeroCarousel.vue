<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import headerImg from '@/assets/head.png'
import header1Img from '@/assets/header1.png'

const slides = [
  {
    id: 1,
    image: headerImg,
    subtitle: 'NEW COLLECTION',
    title: 'CAMPUS ESSENTIALS',
    titleLine2: 'EFFORTLESSLY YOU',
    cta: 'Shop Now',
  },
  {
    id: 2,
    image: header1Img,
    subtitle: 'HIMPUNAN SERIES',
    title: 'REPRESENT YOUR',
    titleLine2: 'FACULTY PRIDE',
    cta: 'Explore',
  },
]

const currentSlide = ref(0)
const isTransitioning = ref(false)
const slideDirection = ref('next')
let autoplayInterval = null

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  slideDirection.value = 'next'
  currentSlide.value = (currentSlide.value + 1) % slides.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 1200)
}

const goToSlide = (index) => {
  if (isTransitioning.value || index === currentSlide.value) return
  isTransitioning.value = true
  slideDirection.value = index > currentSlide.value ? 'next' : 'prev'
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 1200)
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 500)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    class="relative h-screen w-full overflow-hidden bg-black"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slides with Wipe Transition -->
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0"
      :class="currentSlide === index ? 'z-20' : 'z-10'"
    >
      <!-- Smooth wipe transition using clip-path -->
      <div
        class="absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        :style="{
          clipPath:
            currentSlide === index
              ? 'inset(0 0 0 0)'
              : slideDirection === 'next'
                ? 'inset(0 100% 0 0)'
                : 'inset(0 0 0 100%)',
        }"
      >
        <!-- Background Image with Parallax -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out will-change-transform"
          :style="{
            backgroundImage: `url(${slide.image})`,
            transform:
              currentSlide === index ? 'scale(1.08) translateX(0)' : 'scale(1) translateX(-20px)',
          }"
        ></div>

        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
    </div>

    <!-- Massive layered typography content -->
    <div class="relative z-30 h-full flex items-center">
      <div class="max-w-[90rem] mx-auto px-8 md:px-20 w-full">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="absolute inset-x-8 md:inset-x-20"
          :class="currentSlide === index ? 'pointer-events-auto' : 'pointer-events-none'"
        >
          <!-- Subtitle -->
          <p
            class="text-white/70 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 transition-all duration-700 delay-300"
            :class="
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            "
          >
            {{ slide.subtitle }}
          </p>

          <!-- Massive editorial typography -->
          <h1
            class="text-white text-[3rem] md:text-[6rem] lg:text-[8rem] font-extralight leading-[0.9] tracking-wider uppercase transition-all duration-700 delay-400"
            :class="
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            "
          >
            {{ slide.title }}
          </h1>
          <h1
            class="text-white text-[3rem] md:text-[6rem] lg:text-[8rem] font-extralight leading-[0.9] tracking-wider uppercase transition-all duration-700 delay-500"
            :class="
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            "
          >
            {{ slide.titleLine2 }}
          </h1>

          <!-- CTA Button with transparent hover -->
          <button
            class="mt-12 md:mt-16 px-10 py-4 bg-transparent text-white font-light tracking-[0.3em] text-xs uppercase transition-all duration-500 delay-600 border-2 border-white/80 hover:bg-white hover:text-black"
            :class="
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            "
          >
            {{ slide.cta }}
          </button>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-16 left-8 md:left-20 z-40 flex items-center gap-4">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index)"
        class="group relative h-[2px] transition-all duration-500"
        :class="currentSlide === index ? 'w-16' : 'w-8'"
      >
        <span class="absolute inset-0 bg-white/20"></span>
        <span
          class="absolute inset-0 bg-white origin-left transition-transform duration-[7000ms] ease-linear"
          :class="currentSlide === index ? 'scale-x-100' : 'scale-x-0'"
        ></span>
      </button>
    </div>

    <!-- Slide Counter -->
    <div
      class="absolute bottom-16 right-8 md:right-20 z-40 text-white/50 text-xs tracking-[0.3em] font-light"
    >
      <span class="text-white">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
      <span class="mx-3">/</span>
      <span>{{ String(slides.length).padStart(2, '0') }}</span>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
      <span class="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      <div class="w-px h-12 bg-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200%);
  }
}
.animate-scroll-down {
  animation: scroll-down 1.5s ease-in-out infinite;
}
</style>
