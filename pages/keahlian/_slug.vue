<template>
  <v-app dark>
    <v-parallax dark height="500" :src="keahlian.rincian.thumbnail">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-thin mb-4 text-uppercase">
            Keahlian {{ keahlian.nama }}
          </h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-alert text border="top" colored-border color="red darken-4">
            <h3 class="headline mb-7">Cakupan Kegiatan</h3>

            <vue-markdown html :source="keahlian.rincian.deskripsi" />
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import dataKeahlian from '~/static/keahlian.json'

export default {
  name: 'IndexKeahlian',
  components: {
    VueMarkdown
  },
  data() {
    return {
      keahlian: []
    }
  },
  created() {
    this.keahlian = dataKeahlian.subs.filter((keahlian) => {
      return keahlian.slug === this.$route.params.slug
    })[0]
  },
  head() {
    return {
      title: `Informasi keahlian ${this.$route.params.slug}`,
      meta: [
        {
          hid: 'slug_keahlian',
          name: 'description',
          content: `Halaman berkaitan informasi keahlian ${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
