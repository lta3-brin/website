<template>
  <v-alert v-if="selectedFacility === null" type="info">
    Informasi sedang dicari, mohon menunggu.
  </v-alert>
  <article v-else class="artikel">
    <v-subheader class="pl-0 mb-9 font-weight-black display-1 red--text">
      {{ selectedFacility.nama }}
    </v-subheader>
    <vue-markdown :source="selectedFacility.deskripsi" />
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'SlugTentang',
  layout: 'right_sidebar',
  components: {
    VueMarkdown
  },
  data() {
    return {
      selectedFacility: null
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    }
  },
  mounted() {
    this.fetchFasilitasDipilih()
  },
  methods: {
    async fetchFasilitasDipilih() {
      try {
        const fasilitasSnapshot = await this.$fireStore
          .collection('fasilitas')
          .where('slug', '==', this.slug)
          .get()

        fasilitasSnapshot.forEach((fasilitas) => {
          this.selectedFacility = fasilitas.data()
        })
      } catch (e) {
        this.selectedFacility = null
      }
    }
  },
  head() {
    return {
      title: `Informasi fasilitas ${this.$route.params.slug}`,
      meta: [
        {
          hid: 'slug_keahlian',
          name: 'description',
          content: `Halaman berkaitan informasi fasilitas ${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
