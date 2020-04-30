<template>
  <v-container fluid class="px-0 pb-0">
    <v-card flat tile class="light-blue darken-4 white--text pt-4">
      <v-container fluid>
        <v-row justify="space-between">
          <v-col cols="12" md="auto" lg="3">
            <v-card-text>
              <v-btn
                v-for="smd in sosmed"
                :key="smd.nama"
                class="mr-2 white--text"
                icon
                :href="smd.url"
              >
                <v-icon size="22">{{ smd.nama }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              <p>
                BBTA3 (Balai Besar Teknologi Aerodinamika, Aeroelastika dan
                Aeroakustika) merupakan transformasi dari unit kerja lama UPT
                LAGG dengan konsep baru dengan cakupan keahlian yang lebih luas.
              </p>
              <p>
                Kawasan PUSPIPTEK, Gd. 240, Setu, Tangerang Selatan – Banten
                (15314)
              </p>

              <a
                title="gratifikasi"
                href="http://inspektorat.bppt.go.id/bursa-pengaduan-costum/lapor-bppt"
                target="_blank"
              >
                <v-img src="/gratifikasi.jpg" class="mt-4" alt="gratifikasi" />
              </a>
            </v-card-text>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card-text>
              <v-subheader
                class="mb-2 px-0 display-1 font-weight-light text-uppercase"
              >
                Video BBTA3
              </v-subheader>

              <v-alert
                v-if="videoBBTA3.length === 0"
                colored-border
                color="red darken-4"
                border="top"
                type="info"
                elevation="2"
              >
                Informasi berita saat ini <strong>belum</strong> cukup. Mohon
                maaf atas ketidaknyamanan ini.
              </v-alert>

              <v-card
                v-for="video in videoBBTA3"
                :key="video.id"
                outlined
                class="mb-2"
                color="#272727"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ video.createdAt | parseDate }}
                    </div>
                    <v-list-item-title class="mb-2">
                      {{ video.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ video.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey darken-4">
                    <v-img :src="video.thumbnail" :alt="video.id" />
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    color="red darken-4"
                    text
                    class="font-weight-black"
                    :href="'https://www.youtube.com/watch?v=' + video.id"
                    target="_blank"
                  >
                    Kunjungi
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-icon size="19" class="mr-3">fab fa-youtube</v-icon>
                </v-card-actions>
              </v-card>
            </v-card-text>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card-text>
              <v-subheader
                class="mb-2 px-0 display-1 font-weight-light text-uppercase"
              >
                Kabar BBTA3
              </v-subheader>

              <v-alert
                v-if="beritaBBTA3.length === 0"
                colored-border
                color="red darken-4"
                border="top"
                type="info"
                elevation="2"
              >
                Informasi berita saat ini <strong>belum</strong> cukup. Mohon
                maaf atas ketidaknyamanan ini.
              </v-alert>

              <v-card
                v-for="brt in beritaBBTA3"
                :key="brt.id"
                outlined
                class="mb-2"
                color="#272727"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ brt.createdAt | parseDate }}
                    </div>
                    <v-list-item-title class="mb-2">
                      <a
                        v-for="tag in brt.hashtags"
                        :key="tag.text"
                        :href="`https://twitter.com/hashtag/${tag.text}`"
                        class="mr-2 blue--text font-italic font-weight-thin caption"
                        style="text-decoration: none"
                        target="_blank"
                        >#{{ tag.text }}</a
                      >
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ brt.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    v-if="brt.thumbnail !== ''"
                    tile
                    size="80"
                    color="grey"
                  >
                    <v-img
                      contain
                      height="250"
                      :src="brt.thumbnail"
                      :alt="brt.id_str"
                    >
                    </v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    color="red darken-4"
                    text
                    class="font-weight-black"
                    :href="
                      `https://twitter.com/${brt.screen_name}/status/${brt.id}`
                    "
                    target="_blank"
                  >
                    Kunjungi
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-icon size="19" class="mr-3">fab fa-twitter</v-icon>
                </v-card-actions>
              </v-card>
            </v-card-text>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card-text>
              <v-subheader
                class="mb-2 px-0 display-1 font-weight-light text-uppercase"
              >
                Kabar BPPT
              </v-subheader>

              <v-alert
                v-if="beritaBPPT.length === 0"
                colored-border
                color="red darken-4"
                border="top"
                type="info"
                elevation="2"
              >
                Informasi berita saat ini <strong>belum</strong> cukup. Mohon
                maaf atas ketidaknyamanan ini.
              </v-alert>

              <v-card
                v-for="brt in beritaBPPT"
                :key="brt.id"
                outlined
                class="mb-2"
                color="#272727"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ brt.createdAt | parseDate }}
                    </div>
                    <v-list-item-title class="mb-2">
                      <a
                        v-for="tag in brt.hashtags"
                        :key="tag.text"
                        :href="`https://twitter.com/hashtag/${tag.text}`"
                        class="mr-2 blue--text font-italic font-weight-thin caption"
                        style="text-decoration: none"
                        target="_blank"
                        >#{{ tag.text }}</a
                      >
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ brt.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    v-if="brt.thumbnail !== ''"
                    tile
                    size="80"
                    color="grey darken-4"
                  >
                    <v-img
                      contain
                      height="250"
                      :src="brt.thumbnail"
                      :alt="brt.id_str"
                    >
                    </v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    color="red darken-4"
                    text
                    class="font-weight-black"
                    :href="
                      `https://twitter.com/${brt.screen_name}/status/${brt.id}`
                    "
                    target="_blank"
                  >
                    Kunjungi
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-icon size="19" class="mr-3">fab fa-twitter</v-icon>
                </v-card-actions>
              </v-card>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-container fluid class="text-center white--text">
        <v-row align="center" justify="center" justify-md="space-between">
          <v-col cols="auto">
            <v-card-text class="py-0">
              ©️ {{ new Date().getFullYear() }}
              <span class="red--text">❤</span>
              <strong>TRIE</strong>
            </v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-card-text class="py-0">
              <span>📞 +62 21 756 090 2</span>
              <span class="ml-4">📠 +62 21 756 090 1</span>
              <span class="ml-4">✉️ sekr-bbta3@bppt.go.id</span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import sosMed from '~/static/sosmed.json'

export default {
  name: 'Footer',
  data: () => ({
    sosmed: sosMed,
    videos: [],
    videoLoading: false
  }),
  computed: {
    beritaBBTA3() {
      return this.$store.state.berita.koleksi
        .filter((item) => {
          return item.screen_name === 'BBTA3_BPPT'
        })
        .slice(0, 3)
    },
    beritaBPPT() {
      return this.$store.state.berita.koleksi
        .filter((item) => {
          return item.screen_name === 'BPPT_RI'
        })
        .slice(0, 3)
    },
    videoBBTA3() {
      return this.$store.state.video.koleksi.slice(0, 3)
    }
  }
}
</script>
