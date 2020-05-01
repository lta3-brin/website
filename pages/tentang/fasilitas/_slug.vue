<template>
  <article class="artikel">
    <v-subheader class="pl-0 mb-9 font-weight-black display-1 red--text">
      {{ selectedFacility.nama }}
    </v-subheader>
    <vue-markdown :source="selectedFacility.deskripsi" />
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import fasilitas from '~/static/collections/fasilitas.json'

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
  created() {
    this.selectedFacility = fasilitas.filter((fas) => {
      return fas.slug === this.slug
    })[0]
  }
}
</script>
