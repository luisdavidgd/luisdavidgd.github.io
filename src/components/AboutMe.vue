<template>
  <section class="relative py-16 bg-gray-300">
    <div class="container mx-auto px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img
                  alt="..."
                  src="/img/profile.jpg"
                  class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                  style="max-width: 150px"
                />
              </div>
            </div>
            <div
              class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
            >
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <button
                  @click="showModal = true"
                  class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                  type="button"
                  style="transition: all 0.15s ease 0s"
                >
                  Connect
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                    ><i class="fab fa-github"></i></span
                  ><span class="text-sm text-gray-500">Public</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                    >{{ repoCount }}</span
                  ><span class="text-sm text-gray-500">Repositories</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                    >{{ commitCount }}</span
                  ><span class="text-sm text-gray-500">Commits</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3
              class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
            >
              Luis David Gallo Dawson
            </h3>
            <div
              class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
            >
              <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
              Lima, Perú
            </div>
            <div class="mb-2 text-gray-700 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
              >Software Developer
            </div>
            <div class="mb-2 text-gray-700">
              <i class="fas fa-university mr-2 text-lg text-gray-500"></i
              >Universidad Ricardo Palma
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-gray-300 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-gray-800">
                  I've always been passionate about tech and programming. I
                  truly enjoy creating software and turning ideas into real
                  solutions. I believe it's important to stay updated with the
                  latest tools and trends in development — that's what keeps it
                  exciting for me.
                </p>

                <p
                  class="mb-4 text-lg leading-relaxed text-gray-800"
                  v-if="showMore"
                >
                  I'm currently working on multiple projects, constantly
                  learning new frameworks and improving my skills. I believe
                  that great software comes from collaboration, creativity, and
                  curiosity.
                </p>
                <a
                  href="#"
                  class="font-normal text-blue-500"
                  @click.prevent="showMore = !showMore"
                >
                  {{ showMore ? 'Show less' : 'Show more' }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ContactModal v-if="showModal" @close="showModal = false" />
</template>


<script>
import axios from 'axios'
import ContactModal from '../components/ContactModal.vue'

export default {
  components: {
    ContactModal,
  },
  data() {
    return {
      showMore: false,
      showModal: false,
      commitCount: 0,
      repoCount: 0,
    }
  },
  methods: {
    async fetchCommits() {
      const username = 'luisdavidgd'
      const perPage = 100
      let totalCommits = 0

      try {
        // Step 1: Get all the repos
        let repos = []
        let page = 1
        let hasMore = true

        while (hasMore) {
          const response = await axios.get(
            `https://api.github.com/users/${username}/repos`,
            {
              params: {
                per_page: perPage,
                page,
              },
            }
          )

          repos = repos.concat(response.data)
          hasMore = response.data.length === perPage
          page++
        }
        this.repoCount = repos.length; // save total of repos

        // Step 2: Iterate repos and count commits
        for (const repo of repos) {
          let pageCommits = 1
          let hasMoreCommits = true

          while (hasMoreCommits) {
            const commitsRes = await axios.get(
              `https://api.github.com/repos/${username}/${repo.name}/commits`,
              {
                params: {
                  per_page: perPage,
                  page: pageCommits,
                },
              }
            )

            const commits = commitsRes.data
            totalCommits += commits.length
            hasMoreCommits = commits.length === perPage
            pageCommits++
          }
        }

        this.commitCount = totalCommits
      } catch (error) {
        console.error('Error al obtener commits dinámicamente:', error)
      }
    },
  },
  mounted() {
    this.fetchCommits() // Llamamos la función para obtener los commits al cargar el componente
  },
}
</script>

