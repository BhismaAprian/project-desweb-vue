<script setup>
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const selectedSize = ref('M')

const filterSections = [
  { name: 'Category', open: false },
  { name: 'Colors', open: false },
  { name: 'Price Range', open: false },
  { name: 'Collections', open: false },
  { name: 'Tags', open: false },
]

const sections = ref(filterSections)

const toggleSection = (index) => {
  sections.value[index].open = !sections.value[index].open
}
</script>

<template>
  <aside class="w-full lg:w-64 lg:sticky lg:top-24 lg:self-start">
    <h2 class="text-xl font-bold text-[#1a1a1a] mb-8 tracking-wide">Filters</h2>

    <div class="mb-8">
      <h3 class="text-sm font-semibold text-[#1a1a1a] mb-4 tracking-wide">Size</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="size in sizes"
          :key="size"
          @click="selectedSize = size"
          :class="[
            'w-10 h-10 text-sm font-medium border transition-all duration-200',
            selectedSize === size
              ? 'bg-[#004080] text-white border-[#004080]'
              : 'bg-white text-[#1a1a1a] border-gray-300 hover:border-[#004080]',
          ]"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <div class="space-y-1">
      <div
        v-for="(section, index) in sections"
        :key="section.name"
        class="border-t border-gray-200"
      >
        <button
          @click="toggleSection(index)"
          class="w-full flex items-center justify-between py-4 text-left group"
        >
          <span
            class="text-sm font-semibold text-[#1a1a1a] tracking-wide group-hover:text-[#004080] transition-colors"
          >
            {{ section.name }}
          </span>
          <ChevronRight
            :class="[
              'w-4 h-4 text-gray-400 transition-transform duration-200',
              section.open ? 'rotate-90' : '',
            ]"
          />
        </button>

        <div v-if="section.open" class="pb-4 text-sm text-gray-600">
          <p class="text-gray-400 italic">No filters available</p>
        </div>
      </div>
    </div>
  </aside>
</template>
