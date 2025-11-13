<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'

// Ensure app starts in light mode by default, or restore stored preference
const DEFAULT_THEME = 'light'
onMounted(() => {
  try {
    const stored = localStorage.getItem('theme')
    const theme = stored || DEFAULT_THEME
    document.documentElement.setAttribute('data-theme', theme)
  } catch (e) {
    // If localStorage is not available, still set default
    document.documentElement.setAttribute('data-theme', DEFAULT_THEME)
  }
})
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/"></RouterLink>
      <!-- <RouterLink to="/contact">Contact</RouterLink> -->
    </nav>
  </div>

  <RouterView />
</template>
