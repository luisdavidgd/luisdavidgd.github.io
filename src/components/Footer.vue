<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <!-- Contenido del footer -->
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            If you’d like to get in touch,
            <a
              href="#"
              @click.prevent="showModal = true"
              class="text-blue-500 underline hover:text-blue-700 font-semibold"
            >
              use the contact form
            </a>
          </h5>
        </div>

        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div
              v-for="(section, index) in footerSections"
              :key="index"
              class="w-full lg:w-4/12 px-4"
              :class="{ 'ml-auto': index === 0 }"
            >
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >
                {{ section.title }}
              </span>
              <ul class="list-unstyled">
                <li v-for="(link, i) in section.links" :key="i">
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm flex items-center gap-2"
                    :href="link.url"
                    :target="link.target || '_self'"
                  >
                    <i v-if="link.icon" :class="link.icon"></i>
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-400" />

      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} Luis David Gallo Dawson.
          </div>
        </div>
      </div>
    </div>
  </footer>
  <ContactModal v-if="showModal" @close="showModal = false" />
</template>

<script>
import ContactModal from '../components/ContactModal.vue'

export default {
  components: {
    ContactModal,
  },
  data() {
    return {
      showModal: false,
      date: new Date().getFullYear(),
      footerSections: [
        {
          title: 'Useful Links',
          links: [
            {
              label: 'Twitter',
              url: 'https://www.twitter.com/luisdavidgd',
              target: '_blank',
              icon: 'fab fa-twitter',
            },
            {
              label: 'Blog',
              url: 'https://ludablog.com',
              target: '_blank',
              icon: 'fab fa-blogger',
            },
            {
              label: 'Instagram',
              url: 'https://www.instagram.com/luisdavidgd',
              target: '_blank',
              icon: 'fab fa-instagram',
            },
          ],
        },
        {
          title: 'Other Resources',
          links: [
            {
              label: 'Fixture Generator',
              url: 'https://luisdavidgd.github.io/fixture-generator',
              target: '_blank',
              icon: 'fab fa-vuejs',
            },
            {
              label: 'React Project',
              url: 'https://luisdavidgd.github.io/react',
              target: '_blank',
              icon: 'fab fa-react',
            },
            {
              label: 'Github',
              url: 'https://www.github.com/luisdavidgd',
              target: '_blank',
              icon: 'fab fa-github',
            },
          ],
        },
      ],
    }
  },
}
</script>
