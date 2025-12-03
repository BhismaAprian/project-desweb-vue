<script setup>
defineProps({
  specifications: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="border-t border-gray-200 pt-6">
    <h3 class="text-sm font-semibold text-[#1a1a1a] mb-4 tracking-wide">SPECIFICATIONS</h3>
    <dl class="space-y-3">
      <div v-for="spec in specifications" :key="spec.label" class="flex justify-between text-sm">
        <dt class="text-gray-500">{{ spec.label }}</dt>
        <dd class="font-medium text-[#1a1a1a]">{{ spec.value }}</dd>
      </div>
    </dl>
  </div>
</template>
