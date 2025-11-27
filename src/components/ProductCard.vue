<script setup>
import { ref } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const isFocused = ref(false)
</script>

<template>
  <article
    @mouseenter="isFocused = true"
    @mouseleave="isFocused = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
    tabindex="0"
    :class="[
      'group cursor-pointer transition-all duration-300 outline-none',
      isFocused ? 'ring-4 ring-[#004080]' : '',
    ]"
  >
    <div class="relative aspect-[4/5] overflow-hidden bg-[#F3F4F6] mb-4">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div class="text-left">
      <p class="text-xs text-gray-500 mb-1 tracking-wide">{{ product.category }}</p>
      <h3 class="text-sm font-semibold text-[#1a1a1a] mb-1 tracking-wide">{{ product.name }}</h3>
      <p class="text-sm font-bold text-[#1a1a1a]">{{ product.price }}</p>
    </div>
  </article>
</template>
