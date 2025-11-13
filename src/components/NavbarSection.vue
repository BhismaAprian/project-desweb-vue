<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const theme = ref('light')

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') || 'light'
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
  <div class="navbar bg-base-100 shadow-sm px-4">
    <div class="navbar-start flex-1">
      <!-- Mobile: hamburger dropdown -->
      <div class="dropdown md:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/contact">Contacts</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </div>

      <!-- Brand + inline menu for medium+ -->
      <div class="flex items-center gap-4">
        <div class="hidden md:flex items-center gap-2">
          <RouterLink to="/" class="btn btn-ghost">HOME</RouterLink>
          <RouterLink to="/contact" class="btn btn-ghost">CONTACTS</RouterLink>
          <RouterLink to="/about" class="btn btn-ghost">ABOUT</RouterLink>
        </div>
      </div>
    </div>
    <RouterLink to="/" class="btn btn-ghost normal-case text-xl">ITK WEAR</RouterLink>

    <!-- Right side actions (search / notifications / theme toggle) -->
    <div class="navbar-end">
      <!-- Theme toggle -->
      <button
        class="btn btn-ghost btn-circle mr-2"
        @click="toggleTheme"
        :aria-label="`Toggle theme (current: ${theme})`"
      >
        <template v-if="theme === 'light'">
          <!-- moon icon to switch to dark -->
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
          <!-- sun icon to switch to light -->
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
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </template>
      </button>

      <button class="btn btn-ghost btn-circle mr-2" aria-label="search">
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
</template>
