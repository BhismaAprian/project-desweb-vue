<script setup>
import { ref, watch } from 'vue'
import searchData from '@/data/search.json'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const searchQuery = ref('')

const activeTab = ref('toko')

const searchHistory = ref([])

function closeSidebar() {
  emit('close')
}

/**
 *
 * @param {string} term
 */
function handleTrendingClick(term) {
  searchQuery.value = term
}

function clearHistory() {
  searchHistory.value = []
}

function handleSearch() {
  if (searchQuery.value.trim()) {
    if (!searchHistory.value.includes(searchQuery.value.trim())) {
      searchHistory.value.unshift(searchQuery.value.trim())
    }
  }
}

watch(
  () => props.isOpen,
  (newValue) => {
    if (!newValue) {
      searchQuery.value = ''
    }
  },
)
</script>

<template>
  <div v-show="isOpen" class="fixed inset-0 z-[100]">
    <div
      class="absolute inset-0 bg-black/20 transition-opacity duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
      @click="closeSidebar"
    ></div>

    <div
      class="absolute top-0 left-0 right-0 bg-white shadow-lg transition-transform duration-300"
      :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
    >
      <header class="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
        <button
          @click="closeSidebar"
          class="p-2 hover:bg-gray-100 rounded-full transition"
          aria-label="Kembali"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <form @submit.prevent="handleSearch" class="flex-1">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchData.placeholder"
            class="w-full px-4 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600 text-gray-700 placeholder-gray-400"
          />
        </form>

        <button
          @click="closeSidebar"
          class="p-2 hover:bg-gray-100 rounded-full transition"
          aria-label="Tutup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>

      <nav class="flex items-center gap-6 px-6 py-3 border-b border-gray-200">
        <button
          v-for="tab in searchData.tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex items-center gap-2 text-sm font-medium transition',
            activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
          ]"
        >
          <svg
            v-if="tab.icon === 'store'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h18v4H3V3zM3 7h18v14H3V7z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 21V11h8v10"
            />
          </svg>

          <svg
            v-if="tab.icon === 'chat'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>

          {{ tab.label }}
        </button>
      </nav>

      <div class="px-6 py-6 max-h-[60vh] overflow-y-auto bg-gray-50">
        <section class="mb-8">
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Trending</h3>

          <div class="flex flex-wrap gap-3">
            <button
              v-for="(term, index) in searchData.trending"
              :key="index"
              @click="handleTrendingClick(term)"
              class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 hover:bg-gray-50 transition text-sm text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {{ term }}
            </button>
          </div>
        </section>

        <section>
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-gray-900">
              {{ searchData.historyTitle }}
            </h3>
          </div>

          <hr class="border-gray-200 mb-4" />

          <div v-if="searchHistory.length === 0" class="text-sm text-gray-500">
            {{ searchData.historyEmpty }}
          </div>

          <ul v-else class="space-y-2">
            <li
              v-for="(item, index) in searchHistory"
              :key="index"
              class="flex items-center gap-3 text-sm text-gray-700 py-2 px-3 hover:bg-white rounded cursor-pointer"
              @click="handleTrendingClick(item)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
