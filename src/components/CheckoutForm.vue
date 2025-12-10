<script setup>
const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
  currentStep: {
    type: String,
    default: 'information',
  },
})

const emit = defineEmits(['update:formData', 'continue'])

/**
 * Update a single field in the form data
 * @param {string} field - Field name to update
 * @param {string} value - New value for the field
 */
const updateField = (field, value) => {
  emit('update:formData', {
    ...props.formData,
    [field]: value,
  })
}

const inputClasses = `
  w-full px-4 py-4
  bg-white border border-gray-200
  text-sm text-[#1a1a1a] placeholder-gray-400
  focus:outline-none focus:border-[#1a1a1a]
  transition-colors
`
</script>

<template>
  <div class="space-y-8">
    <template v-if="currentStep === 'information'">
      <section>
        <h2 class="text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] mb-4">
          Contact Info
        </h2>

        <div class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            :value="formData.email"
            @input="updateField('email', $event.target.value)"
            :class="inputClasses"
          />

          <input
            type="tel"
            placeholder="Phone"
            :value="formData.phone"
            @input="updateField('phone', $event.target.value)"
            :class="inputClasses"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] mb-4">
          Shipping Address
        </h2>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              :value="formData.firstName"
              @input="updateField('firstName', $event.target.value)"
              :class="inputClasses"
            />
            <input
              type="text"
              placeholder="Last Name"
              :value="formData.lastName"
              @input="updateField('lastName', $event.target.value)"
              :class="inputClasses"
            />
          </div>

          <input
            type="text"
            placeholder="State / Region"
            :value="formData.stateRegion"
            @input="updateField('stateRegion', $event.target.value)"
            :class="inputClasses"
          />

          <input
            type="text"
            placeholder="Address"
            :value="formData.address"
            @input="updateField('address', $event.target.value)"
            :class="inputClasses"
          />

          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              :value="formData.city"
              @input="updateField('city', $event.target.value)"
              :class="inputClasses"
            />
            <input
              type="text"
              placeholder="Postal Code"
              :value="formData.postalCode"
              @input="updateField('postalCode', $event.target.value)"
              :class="inputClasses"
            />
          </div>
        </div>
      </section>
    </template>

    <template v-else>
      <section>
        <h2 class="text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] mb-4">
          Payment Method
        </h2>

        <div class="bg-white border border-gray-200 p-6">
          <p class="text-sm text-gray-500">Payment options will be displayed here.</p>
        </div>
      </section>
    </template>

    <button
      @click="$emit('continue')"
      class="w-full max-w-md py-4 bg-[#1a1a1a] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#004080] transition-colors duration-300"
    >
      Continue
    </button>
  </div>
</template>
