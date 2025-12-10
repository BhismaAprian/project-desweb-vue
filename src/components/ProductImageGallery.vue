<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const selectedIndex = ref(0)

const selectImage = (index) => {
  selectedIndex.value = index
}
</script>

<template>
  <div class="flex gap-4">
    <div class="flex-1 relative aspect-[4/5] bg-[#F3F4F6] overflow-hidden">
      <img
        :src="images[selectedIndex]"
        alt="Product image"
        class="w-full h-full object-cover object-top transition-all duration-500"
      />
      <button
        class="absolute bottom-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-[#1a1a1a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
          />
        </svg>
      </button>
    </div>

    <div class="flex flex-col gap-3 w-20">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="selectImage(index)"
        :class="[
          'relative aspect-square overflow-hidden transition-all duration-300',
          selectedIndex === index
            ? 'ring-2 ring-[#058123]'
            : 'ring-1 ring-gray-200 hover:ring-gray-400',
        ]"
      >
        <img
          :src="image"
          :alt="`Thumbnail ${index + 1}`"
          class="w-full h-full object-cover object-top"
        />
      </button>
    </div>
  </div>
</template>
