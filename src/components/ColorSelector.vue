<script setup>
import { ref } from 'vue'

const props = defineProps({
  colors: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const selectColor = (colorName) => {
  emit('update:modelValue', colorName)
}
</script>

<template>
  <div>
    <p class="text-sm font-medium text-[#1a1a1a] mb-3 tracking-wide">Color</p>
    <div class="flex gap-2">
      <button
        v-for="color in colors"
        :key="color.name"
        @click="selectColor(color.name)"
        :title="color.name"
        :class="[
          'w-10 h-10 rounded-full transition-all duration-200',
          modelValue === color.name
            ? 'ring-2 ring-[#004080] ring-offset-2'
            : 'ring-1 ring-gray-300 hover:ring-gray-400',
        ]"
        :style="{ backgroundColor: color.hex }"
      />
    </div>
  </div>
</template>
