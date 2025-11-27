<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'

const searchQuery = ref('')

const categories = [
  { name: 'NEW', active: true },
  { name: 'BEST SELLERS', active: false },
  { name: 'SHIRTS', active: false },
  { name: 'T-SHIRTS', active: false },
  { name: 'POLO SHIRTS', active: false },
  { name: 'UNIFORM', active: false },
  { name: 'SHORTS', active: false },
  { name: 'JACKETS', active: false },
]

const activeCategories = ref(categories)

const toggleCategory = (index) => {
  activeCategories.value[index].active = !activeCategories.value[index].active
}
</script>

<template>
  <div class="mb-8">
    <div class="relative mb-6">
      <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="w-full max-w-md pl-12 pr-4 py-3 border border-gray-300 bg-white text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#004080] transition-colors"
      />
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="(category, index) in activeCategories"
        :key="category.name"
        @click="toggleCategory(index)"
        :class="[
          'px-4 py-2 text-xs font-medium border transition-all duration-200 tracking-wider',
          category.active
            ? 'bg-[#004080] text-white border-[#004080]'
            : 'bg-white text-[#1a1a1a] border-gray-300 hover:border-[#004080] hover:text-[#004080]',
        ]"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>
