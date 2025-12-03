<script setup>
import { ref } from 'vue'
import ProductImageGallery from '@/components/ProductImageGallery.vue'
import ColorSelector from '@/components/ColorSelector.vue'
import SizeSelector from '@/components/SizeSelector.vue'
// import ProductSpecifications from '@/components/ProductSpecifications.vue'
import RelatedProducts from '@/components/RelatedProducts.vue'
import FooterSection from '@/components/FooterSection.vue'
import img1 from '@/assets/1.png'
import NavbarSection from '@/components/NavbarSection.vue'

const product = ref({
  id: 1,
  name: 'INFORCE T-SHIRT',
  price: 'RP. 50.000',
  description: 'Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.',
  taxNote: 'MRP incl. of all taxes',
  availability: 'In Stock',
  images: [img1, img1, img1],
  colors: [
    { name: 'Light Gray', hex: '#D1D5DB' },
    { name: 'Gray', hex: '#9CA3AF' },
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Lavender', hex: '#C7D2FE' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', '2X'],
  specifications: [
    { label: 'Material', value: '100% Cotton' },
    { label: 'Fit', value: 'Relaxed' },
    { label: 'Neckline', value: 'Crew Neck' },
    { label: 'Sleeve Length', value: 'Short Sleeve' },
    { label: 'Care', value: 'Machine Wash Cold' },
    { label: 'Origin', value: 'Made in Indonesia' },
  ],
})

const selectedColor = ref('Black')
const selectedSize = ref('')

const relatedProducts = ref([
  {
    id: 2,
    name: 'INFORCE Slim Fit T-Shirt',
    category: 'Cotton T Shirt',
    price: 'RP. 50.000',
    image: img1,
  },
  {
    id: 3,
    name: 'INFORCE Weight T-Shirt',
    category: 'Cotton T Shirt',
    price: 'RP. 50.000',
    image: img1,
  },
  {
    id: 4,
    name: 'INFORCE Classic Tee',
    category: 'Cotton T Shirt',
    price: 'RP. 45.000',
    image: img1,
  },
  {
    id: 5,
    name: 'INFORCE Premium Tee',
    category: 'Cotton T Shirt',
    price: 'RP. 65.000',
    image: img1,
  },
])

const addToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  console.log('Added to cart:', {
    product: product.value.name,
    color: selectedColor.value,
    size: selectedSize.value,
  })
}
</script>

<template>
  <div class="min-h-screen bg-[#F3F4F6]">
    <NavbarSection />

    <main class="pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Breadcrumb -->
        <nav class="text-sm text-gray-500 mb-8">
          <RouterLink to="/" class="hover:text-[#004080]">Home</RouterLink>
          <span class="mx-2">/</span>
          <RouterLink to="/products" class="hover:text-[#004080]">Products</RouterLink>
          <span class="mx-2">/</span>
          <span class="text-[#1a1a1a]">{{ product.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductImageGallery :images="product.images" />

          <div class="lg:pl-8">
            <div class="bg-white p-6 md:p-8 shadow-sm">
              <div class="flex justify-end mb-4">
                <button class="text-gray-400 hover:text-[#004080] transition">
                  <svg
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>

              <h1 class="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-wide mb-2">
                {{ product.name }}
              </h1>
              <p class="text-xl font-bold text-[#1a1a1a] mb-1">{{ product.price }}</p>
              <p class="text-xs text-gray-500 mb-6">{{ product.taxNote }}</p>

              <p class="text-sm text-[#1a1a1a] leading-relaxed mb-8">
                {{ product.description }}
              </p>

              <div class="flex items-center gap-2 mb-6">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span class="text-sm text-green-600 font-medium">{{ product.availability }}</span>
              </div>

              <div class="mb-6">
                <ColorSelector :colors="product.colors" v-model="selectedColor" />
              </div>

              <div class="mb-8">
                <SizeSelector :sizes="product.sizes" v-model="selectedSize" />
              </div>

              <button
                @click="addToCart"
                class="w-full py-4 bg-[#1a1a1a] text-white text-sm font-bold tracking-widest hover:bg-[#004080] transition-colors duration-300"
              >
                ADD
              </button>

              <div class="mt-8"></div>
            </div>
          </div>
        </div>

        <RelatedProducts :products="relatedProducts" />
      </div>
    </main>

    <FooterSection />
  </div>
</template>
