<script setup>
import ProductCard from './ProductCard.vue'
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'

const products = [
  {
    id: 1,
    category: 'Cotton T Shirt',
    name: 'INFORCE Slim Fit T-Shirt',
    price: 'RP. 50.000',
    image: img1,
  },
  {
    id: 2,
    category: 'Cotton T Shirt',
    name: 'INFORCE Weight T-Shirt',
    price: 'RP. 50.000',
    image: img2,
  },
  {
    id: 3,
    category: 'Cotton T Shirt',
    name: 'INFORCE Weight T-Shirt',
    price: 'RP. 50.000',
    image: img2,
  },
  {
    id: 4,
    category: 'Cotton T Shirt',
    name: 'INFORCE T-Shirt',
    price: 'RP. 50.000',
    image: img1,
  },
  {
    id: 5,
    category: 'Cotton T Shirt',
    name: 'INFORCE T-Shirt',
    price: 'RP. 50.000',
    image: img2,
  },
  {
    id: 6,
    category: 'Cotton T Shirt',
    name: 'INFORCE T-Shirt',
    price: 'RP. 50.000',
    image: img1,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
