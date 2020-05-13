<template>
  <v-app dark>
    <v-parallax
      v-if="keahlian !== null"
      dark
      height="500"
      :src="keahlian.rincian.thumbnail"
    >
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
        <v-col cols="12" md="8">
          <v-alert v-if="keahlian === null" type="info">
            Sedang memuat data...
          </v-alert>

          <div v-else>
            <v-subheader
              class="pl-0 mb-9 font-weight-black display-1 red--text"
            >
              Cakupan Kegiatan
            </v-subheader>

            <article class="artikel">
              <vue-markdown html :source="keahlian.rincian.deskripsi" />
            </article>
          </div>

          <v-divider />

          <feature-information />
        </v-col>

        <v-col cols="12" md="4">
          <menu-obrolan />
          <div class="py-2"></div>
          <v-card v-if="keahlian !== null" outlined class="growing">
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
          <div class="py-2"></div>
          <menu-tags />
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
import MenuTags from '~/components/submenu/hashtags_berita'
import FeatureInformation from '~/components/feature_information'

export default {
  name: 'IndexKeahlian',
  components: {
    VueMarkdown,
    MenuKeahlian,
    MenuCahnnel,
    MenuKategori,
    MenuObrolan,
    MenuTags,
    FeatureInformation
  },
  data() {
    return {
      x: 3,
      showInfo: false,
      keahlian: null
    }
  },
  mounted() {
    this.fetchSelectedKeahlian()
  },
  methods: {
    onResize() {
      if (window.innerWidth < 960) this.x = 1
      else this.x = 3
    },
    async fetchSelectedKeahlian() {
      try {
        const keahlianTertentu = await this.$fireStore
          .collection('keahlian')
          .where('slug', '==', this.$route.params.slug)
          .get()

        keahlianTertentu.forEach((ahli) => {
          this.keahlian = ahli.data()
        })
      } catch (_) {
        this.keahlian = null
      }
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
