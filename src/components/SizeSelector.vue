<script setup>
import { ref } from 'vue'

const props = defineProps({
  sizes: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const selectSize = (size) => {
  emit('update:modelValue', size)
}
</script>

<template>
  <div>
    <p class="text-sm font-medium text-[#1a1a1a] mb-3 tracking-wide">Size</p>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="size in sizes"
        :key="size"
        @click="selectSize(size)"
        :class="[
          'min-w-[40px] h-10 px-3 text-sm font-medium border transition-all duration-200',
          modelValue === size
            ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
            : 'bg-white text-[#1a1a1a] border-gray-300 hover:border-[#1a1a1a]',
        ]"
      >
        {{ size }}
      </button>
    </div>
    <div class="mt-3 flex items-center gap-2 text-xs text-gray-500">
      <button class="hover:text-[#004080] transition-colors underline">FIND YOUR SIZE</button>
      <span>|</span>
      <button class="hover:text-[#004080] transition-colors underline">MEASUREMENT GUIDE</button>
    </div>
  </div>
</template>
