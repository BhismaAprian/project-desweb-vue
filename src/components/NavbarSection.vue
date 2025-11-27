<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const theme = ref('light')
const scrolled = ref(false)

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') || 'light'

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  try {
    localStorage.setItem('theme', theme.value)
  } catch (e) {}
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500',
      scrolled ? 'bg-black/60 shadow-lg py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6">
      <RouterLink to="/" class="text-2xl font-bold tracking-wide text-white"> ITK WEAR </RouterLink>

      <div class="hidden md:flex items-center gap-8 text-white font-medium">
        <RouterLink to="/" class="hover:text-gray-300 transition">Home</RouterLink>
        <RouterLink to="/contact" class="hover:text-gray-300 transition">Contacts</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300 transition">About</RouterLink>
      </div>

      <div class="flex items-center gap-3 text-white">
        <button class="btn btn-ghost btn-circle" @click="toggleTheme">
          <template v-if="theme === 'light'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          </template>
          <template v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636"
              />
              <circle cx="12" cy="12" r="3" stroke-width="2" />
            </svg>
          </template>
        </button>

        <!-- Search -->
        <button class="btn btn-ghost btn-circle">
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
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
