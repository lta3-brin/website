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
      <v-row align="start" justify="center">
        <v-col cols="12" md="6">
          <v-card outlined>
            <v-list-item>
              <v-list-item-content>
                <div class="overline mb-4">Kepala Kelompok</div>
                <v-list-item-title class="headline">
                  {{ keahlian.rincian.ketua.nama }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  📧 {{ keahlian.rincian.ketua.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              :src="keahlian.rincian.ketua.avatar"
              aspect-ratio="1"
              contain
            />

            <v-card-text>
              {{ keahlian.rincian.ketua.kelompok }}
            </v-card-text>

            <v-card-text>
              {{ keahlian.rincian.ketua.instansi }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="headline mb-7">Cakupan Kegiatan</h3>

          <vue-markdown html :source="keahlian.rincian.deskripsi" />
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
      showInfo: false,
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
