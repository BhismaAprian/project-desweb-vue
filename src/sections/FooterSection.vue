<script setup>
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<template>
  <section class="relative py-16 md:py-24 bg-[#004080] overflow-hidden">
    <div class="max-w-[90rem] mx-auto px-8 md:px-16">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-center md:text-left">
          <p class="text-white/60 text-[10px] uppercase tracking-[0.4em] mb-4">
            Limited Time Offer
          </p>
          <h2
            class="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-2"
          >
            Student Discount Day
          </h2>
          <p
            class="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            15% OFF
          </p>
          <p class="text-white/70 text-sm md:text-base font-extralight tracking-wide mt-4">
            All Formal Wear — Use your student ID
          </p>
        </div>

        <!-- CTA Button -->
        <div class="flex-shrink-0">
          <button
            class="px-12 py-5 bg-white text-[#004080] font-medium text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-white"
          >
            Shop the Sale
          </button>
        </div>
      </div>

      <!-- Terms -->
      <p class="text-white/30 text-[10px] tracking-[0.2em] text-center md:text-left mt-10">
        *Valid student ID required. Offer ends December 31, 2025.
      </p>
    </div>
  </section>
  <footer class="bg-[#004080] text-white py-16 px-8 md:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <h3 class="text-2xl font-light tracking-wider mb-4">ITK WEAR</h3>
          <p class="text-white/60 text-sm leading-relaxed">
            The official campus wear brand for Institut Teknologi Kalimantan. Quality, identity, and
            style for the modern student.
          </p>
        </div>

        <!-- Shop Column -->
        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] mb-6 text-white/80">Shop</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >Workshirts</a
              >
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >Himpunan Jackets</a
              >
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >T-Shirts</a
              >
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >New Arrivals</a
              >
            </li>
          </ul>
        </div>

        <!-- Support Column -->
        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] mb-6 text-white/80">Support</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >Contact Us</a
              >
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm">FAQs</a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >Size Guide</a
              >
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors text-sm"
                >Shipping</a
              >
            </li>
          </ul>
        </div>

        <!-- Connect Column -->
        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] mb-6 text-white/80">Connect</h4>
          <div class="flex items-center gap-4">
            <a
              href="#"
              class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#004080] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#004080] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#004080] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/10 mb-8"></div>

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white/40 text-sm">
          &copy; 2025 ITK Wear Industries Ltd. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-white/40 hover:text-white transition-colors text-sm"
            >Privacy Policy</a
          >
          <a href="#" class="text-white/40 hover:text-white transition-colors text-sm"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
