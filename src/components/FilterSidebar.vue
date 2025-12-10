<script setup>
import { ref } from 'vue'
import { ChevronRight, Check } from 'lucide-vue-next'
import filterData from '@/data/filters.json'

const sizes = filterData.sizes
const selectedSize = ref(sizes.includes('M') ? 'M' : sizes[0])

const sections = ref(filterData.sections.map((section) => ({ ...section })))

const selectedCategories = ref([])
const selectedColors = ref([])
const selectedPriceRange = ref(null)
const selectedTags = ref([])

const toggleSection = (index) => {
  sections.value[index].open = !sections.value[index].open
}

const toggleCategory = (id) => {
  const index = selectedCategories.value.indexOf(id)
  if (index > -1) {
    selectedCategories.value.splice(index, 1)
  } else {
    selectedCategories.value.push(id)
  }
}

const toggleColor = (id) => {
  const index = selectedColors.value.indexOf(id)
  if (index > -1) {
    selectedColors.value.splice(index, 1)
  } else {
    selectedColors.value.push(id)
  }
}

const isSelected = (type, id) => {
  switch (type) {
    case 'checkbox':
      return selectedCategories.value.includes(id)
    case 'color':
      return selectedColors.value.includes(id)
    case 'price':
      return selectedPriceRange.value === id
    default:
      return false
  }
}

const handleSelect = (type, id) => {
  switch (type) {
    case 'checkbox':
      toggleCategory(id)
      break
    case 'color':
      toggleColor(id)
      break
    case 'price':
      selectedPriceRange.value = selectedPriceRange.value === id ? null : id
      break
  }
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
          class="w-full flex items-center justify-between py-4 text-left group cursor-pointer"
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

        <div v-show="section.open" class="pb-4">
          <div v-if="section.type === 'checkbox'" class="space-y-3">
            <label
              v-for="option in section.options"
              :key="option.id"
              class="flex items-center gap-3 cursor-pointer group"
            >
              <div
                @click="handleSelect(section.type, option.id)"
                :class="[
                  'w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200',
                  isSelected(section.type, option.id)
                    ? 'bg-[#004080] border-[#004080]'
                    : 'border-gray-300 group-hover:border-[#004080]',
                ]"
              >
                <Check v-if="isSelected(section.type, option.id)" class="w-3 h-3 text-white" />
              </div>
              <span class="text-sm text-gray-700 group-hover:text-[#004080] transition-colors">
                {{ option.label }}
              </span>
              <span class="text-xs text-gray-400 ml-auto">({{ option.count }})</span>
            </label>
          </div>

          <div v-else-if="section.type === 'color'" class="flex flex-wrap gap-3">
            <button
              v-for="option in section.options"
              :key="option.id"
              @click="handleSelect(section.type, option.id)"
              :title="option.label"
              :class="[
                'w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center',
                isSelected(section.type, option.id)
                  ? 'border-[#004080] ring-2 ring-[#004080] ring-offset-2'
                  : 'border-gray-200 hover:border-gray-400',
              ]"
              :style="{ backgroundColor: option.hex }"
            >
              <Check
                v-if="isSelected(section.type, option.id)"
                :class="[
                  'w-4 h-4',
                  option.id === 'white' || option.id === 'yellow' ? 'text-gray-800' : 'text-white',
                ]"
              />
            </button>
          </div>

          <div v-else-if="section.type === 'price'" class="space-y-3">
            <label
              v-for="option in section.options"
              :key="option.id"
              class="flex items-center gap-3 cursor-pointer group"
            >
              <div
                @click="handleSelect(section.type, option.id)"
                :class="[
                  'w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200',
                  isSelected(section.type, option.id)
                    ? 'border-[#004080]'
                    : 'border-gray-300 group-hover:border-[#004080]',
                ]"
              >
                <div
                  v-if="isSelected(section.type, option.id)"
                  class="w-3 h-3 bg-[#004080] rounded-full"
                ></div>
              </div>
              <span class="text-sm text-gray-700 group-hover:text-[#004080] transition-colors">
                {{ option.label }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-gray-200">
      <button
        @click="
          ;((selectedCategories = []), (selectedColors = []), (selectedPriceRange = null))
          selectedCollection = null
          selectedTags = []
        "
        class="w-full py-2 text-sm text-gray-500 hover:text-[#004080] transition-colors cursor-pointer"
      >
        Clear All Filters
      </button>
    </div>
  </aside>
</template>
