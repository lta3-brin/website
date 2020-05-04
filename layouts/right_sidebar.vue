<template>
  <v-app dark>
    <Header />

    <v-content class="mt-12">
      <v-app dark>
        <v-container style="max-width: 1200px">
          <v-row align="start" justify="space-between">
            <v-col cols="12" md="8">
              <nuxt />

              <feature-information />
            </v-col>
            <v-col cols="12" md="4">
              <menu-obrolan />
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
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'
import MenuKeahlian from '~/components/submenu/keahlian'
import MenuCahnnel from '~/components/submenu/channel'
import MenuKategori from '~/components/submenu/kategori_video'
import MenuObrolan from '~/components/submenu/chat'
import MenuTags from '~/components/submenu/hashtags_berita'
import FeatureInformation from '~/components/feature_information'

export default {
  components: {
    Header,
    Footer,
    MenuKeahlian,
    MenuCahnnel,
    MenuKategori,
    MenuObrolan,
    MenuTags,
    FeatureInformation
  },
  data() {
    return {}
  }
}
</script>
