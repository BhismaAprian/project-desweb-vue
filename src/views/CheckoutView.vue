<script setup>
import { ref, computed } from 'vue'
import NavbarSection from '@/sections/NavbarSection.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'
import OrderSummary from '@/components/OrderSummary.vue'

import checkoutData from '@/data/checkout.json'
import { assetUrl } from '@/utils/assetUrl'

const currentStep = ref('information')

const formData = ref({ ...checkoutData.formFields })

const cartItems = computed(() =>
  checkoutData.cartItems.map((item) => ({
    ...item,
    image: assetUrl(item.image),
  })),
)

const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)

const handleContinue = () => {
  if (currentStep.value === 'information') {
    currentStep.value = 'payment'
  } else {
    console.log('Processing payment...', formData.value)
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#F3F4F6]">
    <NavbarSection />

    <main class="px-6 md:px-12 pb-16 pt-24">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-black italic text-[#1a1a1a] tracking-tight mb-6">
          CHECKOUT
        </h1>

        <nav class="flex items-center gap-8 mb-10">
          <button
            v-for="step in checkoutData.steps"
            :key="step.id"
            @click="currentStep = step.id"
            :class="[
              'text-sm font-semibold uppercase tracking-wider transition-colors',
              currentStep === step.id ? 'text-[#1a1a1a]' : 'text-gray-400 hover:text-gray-600',
            ]"
          >
            {{ step.label }}
          </button>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <CheckoutForm
            v-model:formData="formData"
            :currentStep="currentStep"
            @continue="handleContinue"
          />

          <OrderSummary :items="cartItems" :totalItems="totalItems" :subtotal="subtotal" />
        </div>
      </div>
    </main>
  </div>
</template>
