<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="mt-16 border-t border-gray-200 pt-12">
    <h3 class="text-lg font-semibold text-[#1a1a1a] tracking-wide mb-8">YOU MAY ALSO LIKE</h3>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <RouterLink
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="group"
      >
        <div class="relative aspect-[4/5] overflow-hidden bg-[#F3F4F6] mb-3">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p class="text-xs text-gray-500 mb-1">{{ product.category }}</p>
        <h4
          class="text-sm font-medium text-[#1a1a1a] mb-1 group-hover:text-[#004080] transition-colors"
        >
          {{ product.name }}
        </h4>
        <p class="text-sm font-bold text-[#1a1a1a]">{{ product.price }}</p>
      </RouterLink>
    </div>
  </section>
</template>
