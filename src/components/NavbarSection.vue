<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled ? 'bg-white shadow-sm py-3' : 'bg-[#F3F4F6] py-4',
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6">
      <!-- Left: Hamburger + Links -->
      <div class="flex items-center gap-8">
        <button class="flex flex-col gap-1.5">
          <span class="w-6 h-0.5 bg-[#1a1a1a]"></span>
          <span class="w-6 h-0.5 bg-[#1a1a1a]"></span>
        </button>
        <div class="hidden md:flex items-center gap-8 text-[#1a1a1a] font-medium tracking-wide">
          <RouterLink to="/" class="hover:text-[#004080] transition">Home</RouterLink>
          <RouterLink to="/products" class="hover:text-[#004080] transition">Products</RouterLink>
          <RouterLink to="/contact" class="hover:text-[#004080] transition">Contact</RouterLink>
          <RouterLink to="/about" class="hover:text-[#004080] transition">About</RouterLink>
        </div>
      </div>

      <!-- Center: Logo -->
      <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2">
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold tracking-widest text-[#1a1a1a]">
            <span class="text-[#1a1a1a]">I</span><span class="text-[#E5A835]">T</span
            ><span class="text-[#1a1a1a]">K</span>
          </span>
          <span class="text-[10px] tracking-[0.3em] text-gray-500">W E A R</span>
        </div>
      </RouterLink>

      <div class="flex items-center gap-4 text-[#1a1a1a]">
        <button class="hover:text-[#004080] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
