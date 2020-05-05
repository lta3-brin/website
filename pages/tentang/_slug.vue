<template>
  <article class="artikel">
    <v-alert v-if="'kosong' in tentang" type="info">
      Informasi ini belum ada.
    </v-alert>

    <div v-else>
      <v-subheader class="pl-0 mb-9 font-weight-black display-1 red--text">
        {{ tentang.nama }}
      </v-subheader>

      <vue-markdown :source="tentang.deskripsi" />
    </div>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import tentang from '~/static/collections/posts.json'

export default {
  name: 'SlugTentang',
  layout: 'right_sidebar',
  components: {
    VueMarkdown
  },
  data() {
    return {
      tentang
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    }
  },
  created() {
    const ttg = this.tentang.filter((ttg) => {
      return ttg.slug === this.$route.params.slug
    })

    if (ttg.length > 0) {
      this.tentang = ttg[0]
    } else {
      this.tentang = {
        kosong: true
      }
    }
  },
  head() {
    return {
      title: `Informasi tentang ${this.$route.params.slug}`,
      meta: [
        {
          hid: 'slug_tentang',
          name: 'description',
          content: `Halaman berkaitan informasi ${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
