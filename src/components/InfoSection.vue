<script setup>
import { ref, onMounted } from 'vue'

const mapSrc = ref('')

function genRandom() {
  // random lat -90..90, lng -180..180
  const lat = (Math.random() * 180 - 90).toFixed(5)
  const lng = (Math.random() * 360 - 180).toFixed(5)
  // Use Google Maps embed query; output=embed works without API key for simple point views
  mapSrc.value = `https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`
}

onMounted(() => {
  genRandom()
})
</script>

<template>
  <section class="bg-base-100 lg:grid lg:place-content-center">
    <!-- Intro text -->
    <header class="text-center mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold">Contact With Us!</h2>
      <p class="mt-3 text-sm sm:text-base text-base-content/70 max-w-3xl mx-auto">
        At ITK Wear, we believe style should feel effortless simple, functional, and made for real
        campus life. Every piece is designed with thoughtful detail, blending comfort and confidence
        so you can move, learn, and express yourself every day.
      </p>
    </header>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="md:py-4">
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Get in touch</h2>

          <p class="mt-4 text-pretty text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas delectus alias
            magni velit! Dicta corrupti dignissimos dolor consequatur illum tempore consectetur hic
            a cupiditate sunt quam, earum nisi aperiam.
          </p>

          <dl class="mt-6 space-y-3">
            <div>
              <dt class="sr-only">Phone number</dt>

              <dd class="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  ></path>
                </svg>

                <span class="font-medium">+62 838 kapan kapan kita balapan</span>
              </dd>
            </div>

            <div>
              <dt class="sr-only">Email</dt>

              <dd class="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>

                <span class="font-medium">info@adas.com</span>
              </dd>
            </div>

            <div>
              <dt class="sr-only">Location</dt>

              <dd class="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>

                <span class="font-medium">123 Sumber Rejo 1, Balikpapan Tengah</span>
              </dd>
            </div>
          </dl>
        </div>

        <div class="space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
          <div class="h-72 sm:h-96 rounded-md overflow-hidden">
            <iframe
              :src="mapSrc"
              class="w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="mt-4 flex gap-2">
            <a
              :href="mapSrc.replace('&output=embed', '')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
