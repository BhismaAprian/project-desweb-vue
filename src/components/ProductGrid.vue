<script setup>
import ProductCard from './ui/ProductCard.vue'
import productsData from '@/data/products.json'
import { assetUrl } from '@/utils/assetUrl'

const products = productsData.grid.map((product) => ({
  ...product,
  image: assetUrl(product.image),
}))
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
