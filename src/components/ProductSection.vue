<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'

const baseSlides = [
  { id: 1, img: img1, title: 'Basic Tee', price: '£24.00 GBP' },
  { id: 2, img: img2, title: 'Campus Hoodie', price: '£48.00 GBP' },
  { id: 3, img: img1, title: 'Denim Jacket', price: '£72.00 GBP' },
  { id: 4, img: img1, title: 'Casual Shirt', price: '£32.00 GBP' },
]

const visible = ref(3)
function calcVisible() {
  const w = window.innerWidth
  if (w >= 1024) return 3
  if (w >= 640) return 2
  return 1
}

const items = ref([])
function rebuildItems() {
  const v = calcVisible()
  visible.value = v
  items.value = baseSlides.concat(baseSlides.slice(0, v))
}

rebuildItems()

const current = ref(0)
let timer = null
const INTERVAL = 3000

function goTo(index) {
  current.value = index
}

function next() {
  goTo(current.value + 1)
}

function startAutoplay() {
  stopAutoplay()
  timer = setInterval(next, INTERVAL)
}

function stopAutoplay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

let containerEl = null
function onTransitionEnd() {
  if (current.value >= baseSlides.length) {
    if (!containerEl) return
    containerEl.style.transition = 'none'
    current.value = 0
    containerEl.offsetHeight
    containerEl.style.transition = ''
  }
}

function handleResize() {
  const prev = visible.value
  const v = calcVisible()
  if (v !== prev) {
    rebuildItems()
    current.value = 0
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  startAutoplay()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoplay()
})
</script>

<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold sm:text-3xl">New This Week!</h2>

        <p class="mt-4 max-w-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <div class="mt-8 relative">
        <div
          class="overflow-hidden rounded-xl"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <div
            ref="el => (containerEl = el)"
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${(current * 100) / visible}% )` }"
            @transitionend="onTransitionEnd"
          >
            <div
              v-for="(slide, i) in items"
              :key="`${slide.id}-${i}`"
              :style="{ width: `${100 / visible}%` }"
              class="p-3 flex-shrink-0"
            >
              <a href="#" class="group block overflow-hidden rounded-lg shadow">
                <img
                  :src="slide.img"
                  alt=""
                  class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[380px]"
                />

                <div class="relative bg-white p-3">
                  <h3 class="text-sm text-gray-700">{{ slide.title }}</h3>
                  <p class="mt-2 tracking-wider text-gray-900">{{ slide.price }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-4 flex justify-center gap-2">
          <button
            v-for="(s, i) in baseSlides"
            :key="s.id"
            @click="goTo(i)"
            :class="[
              'h-2 w-8 rounded-full transition-all',
              {
                'bg-gray-800': current % baseSlides.length === i,
                'bg-gray-300': current % baseSlides.length !== i,
              },
            ]"
            aria-label="Go to slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>
