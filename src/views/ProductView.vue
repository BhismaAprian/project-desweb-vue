<script setup>
import { ref } from 'vue'
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import ProductSearchHeader from '@/components/ProductSearchHeader.vue'
import ProductGrid from '@/components/ProductGrid.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavbarSection />

    <main class="pt-24 pb-20 px-6 lg:px-16 xl:px-24">
      <nav class="mb-2">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <router-link to="/" class="hover:text-[#004080] transition-colors">Home</router-link>
          </li>
          <li>/</li>
          <li class="text-[#1a1a1a]">Products</li>
        </ol>
      </nav>

      <h1 class="text-2xl font-bold text-[#1a1a1a] tracking-wider mb-8">PRODUCTS</h1>

      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <FilterSidebar />

        <div class="flex-1">
          <ProductSearchHeader />
          <ProductGrid />
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>
