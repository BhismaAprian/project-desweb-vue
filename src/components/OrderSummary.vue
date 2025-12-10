<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  subtotal: {
    type: Number,
    default: 0,
  },
})

/**
 * Format a number as Indonesian Rupiah
 * @param {number} price - Price value to format
 * @returns {string} Formatted price string (e.g., "RP. 50.000")
 */
const formatPrice = (price) => {
  return `RP. ${price.toLocaleString('id-ID')}`
}
</script>

<template>
  <div class="bg-white border border-gray-200 p-6 md:p-8 h-fit">
    <!-- Header: Title & Item Count -->
    <header class="flex items-start justify-between mb-6">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Your Order</h2>
      <span class="text-sm font-medium text-[#E5A835]"> ({{ totalItems }}) </span>
    </header>

    <!-- Cart Items List -->
    <ul class="space-y-6 mb-8">
      <li v-for="item in items" :key="item.id" class="flex gap-4">
        <!-- Product Thumbnail -->
        <figure class="w-24 h-28 bg-[#F3F4F6] flex-shrink-0 overflow-hidden">
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover object-top" />
        </figure>

        <!-- Product Info -->
        <div class="flex-1 flex flex-col justify-between py-1">
          <!-- Name, Variant & Change Link -->
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-sm font-medium text-[#1a1a1a]">
                {{ item.name }}
              </h3>
              <p class="text-xs text-gray-500 mt-0.5">
                {{ item.variant }}
              </p>
            </div>
            <button class="text-xs text-[#1a1a1a] underline hover:text-[#004080] transition-colors">
              Change
            </button>
          </div>

          <!-- Quantity & Price -->
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-[#E5A835]"> ({{ item.quantity }}) </span>
            <span class="text-sm font-medium text-[#1a1a1a]">
              {{ formatPrice(item.price) }}
            </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- Divider Line -->
    <hr class="border-gray-200 mb-6" />

    <!-- Price Summary -->
    <dl class="space-y-3">
      <!-- Subtotal Row -->
      <div class="flex items-center justify-between">
        <dt class="text-sm text-[#1a1a1a]">Subtotal</dt>
        <dd class="text-sm font-medium text-[#1a1a1a]">
          {{ formatPrice(subtotal) }}
        </dd>
      </div>

      <!-- Shipping Row -->
      <div class="flex items-center justify-between">
        <dt class="text-sm text-[#1a1a1a]">Shipping</dt>
        <dd class="text-xs text-gray-400 italic">Calculated at next step</dd>
      </div>

      <!-- Total Row -->
      <div class="flex items-center justify-between pt-3">
        <dt class="text-sm font-semibold text-[#1a1a1a]">Total</dt>
        <dd class="text-sm font-semibold text-[#1a1a1a]">
          {{ formatPrice(subtotal) }}
        </dd>
      </div>
    </dl>
  </div>
</template>
