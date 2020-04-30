<template>
  <v-app dark>
    <v-parallax dark height="500" :src="keahlian.rincian.thumbnail">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1
            v-resize="onResize"
            class="font-weight-thin mb-4 text-uppercase"
            :class="'display-' + x"
          >
            Keahlian {{ keahlian.nama }}
          </h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container class="fill-height" style="max-width: 1200px">
      <v-row align="start" justify="space-between" justify-lg="space-around">
        <v-col cols="12" md="8" lg="8">
          <h3 class="headline mb-7">Cakupan Kegiatan</h3>

          <vue-markdown html :source="keahlian.rincian.deskripsi" />
        </v-col>

        <v-col cols="12" md="auto" lg="4">
          <menu-obrolan />
          <div class="py-2"></div>
          <v-card outlined class="growing">
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

            <v-img :src="keahlian.rincian.ketua.avatar" />

            <v-card-text>
              {{ keahlian.rincian.ketua.kelompok }}
            </v-card-text>

            <v-card-text>
              {{ keahlian.rincian.ketua.instansi }}
            </v-card-text>
          </v-card>
          <div class="py-2"></div>
          <menu-keahlian />
          <div class="py-2"></div>
          <menu-cahnnel />
          <div class="py-2"></div>
          <menu-kategori />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MenuKeahlian from '~/components/submenu/keahlian'
import MenuCahnnel from '~/components/submenu/channel'
import MenuKategori from '~/components/submenu/kategori_video'
import MenuObrolan from '~/components/submenu/chat'
import dataKeahlian from '~/static/keahlian.json'

export default {
  name: 'IndexKeahlian',
  components: {
    VueMarkdown,
    MenuKeahlian,
    MenuCahnnel,
    MenuKategori,
    MenuObrolan
  },
  data() {
    return {
      x: 3,
      showInfo: false,
      keahlian: []
    }
  },
  created() {
    this.keahlian = dataKeahlian.subs.filter((keahlian) => {
      return keahlian.slug === this.$route.params.slug
    })[0]
  },
  methods: {
    onResize() {
      if (window.innerWidth < 960) this.x = 1
      else this.x = 3
    }
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
