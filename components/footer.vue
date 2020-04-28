<template>
  <v-container fluid class="px-0 pb-0">
    <v-card flat tile class="light-blue darken-4 white--text pt-4">
      <v-container fluid>
        <v-row justify="space-between">
          <v-col cols="12" md="4">
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

          <v-col cols="12" md="4">
            <v-card-text>
              <div v-if="videoLoading">
                <v-skeleton-loader
                  v-for="vid in 3"
                  :key="vid"
                  type="table-heading, list-item-three-line, actions"
                  tile
                  dark
                  class="mb-2"
                ></v-skeleton-loader>
              </div>

              <v-card
                v-for="video in videos"
                :key="video.id.videoId"
                outlined
                class="mb-2"
                color="grey darken-4"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ video.snippet.publishedAt | parseDate }}
                    </div>
                    <v-list-item-subtitle>
                      {{ video.snippet.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey">
                    <v-img
                      height="250"
                      :src="video.snippet.thumbnails.high.url"
                      :alt="video.snippet.title"
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
                      'https://www.youtube.com/watch?v=' + video.id.videoId
                    "
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

          <v-col cols="12" md="4">
            <v-card-text>
              <div v-if="mediaLoading">
                <v-skeleton-loader
                  v-for="vid in 3"
                  :key="vid"
                  type="table-heading, list-item-three-line, actions"
                  tile
                  dark
                  class="mb-2"
                ></v-skeleton-loader>
              </div>

              <v-card
                v-for="md in media"
                :key="md.id"
                outlined
                class="mb-2"
                color="grey darken-4"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ md.timestamp | parseDate }}
                    </div>

                    <v-list-item-title class="headline mb-1">
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ md.caption }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey">
                    <v-img
                      height="250"
                      :src="
                        md.media_type === 'CAROUSEL_ALBUM'
                          ? md.media_url
                          : md.thumbnail_url
                      "
                      :alt="md.username"
                    >
                    </v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    color="red darken-4"
                    text
                    class="font-weight-black"
                    :href="md.permalink"
                    target="_blank"
                  >
                    kunjungi
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-icon size="19" class="mr-3">fab fa-instagram</v-icon>
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
import axios from 'axios'
import sosMed from '~/static/sosmed.json'

export default {
  name: 'Footer',
  data: () => ({
    sosmed: sosMed,
    videos: [],
    videoLoading: false,
    media: [],
    mediaLoading: false
  }),
  created() {
    this.fetchYoutubeVideo()
    this.fetchInstagramMedia()
  },
  methods: {
    async fetchYoutubeVideo() {
      this.videoLoading = true

      try {
        const key = process.env.VIDEO_API
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&order=date&type=video&maxResults=3&key=${key}`
        const RES = await axios.get(URL)

        RES.data.items.forEach((video) => {
          this.videos.push(video)
        })
      } catch (_) {
        this.videos = []
      }

      this.videoLoading = false
    },
    async fetchInstagramMedia() {
      this.mediaLoading = true

      try {
        const key = process.env.MEDIA_API
        const fields =
          'id,username,caption,media_type,thumbnail_url,media_url,permalink,timestamp'
        const URL = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${key}`
        const RES = await axios.get(URL)

        this.media = RES.data.data.slice(0, 3)
      } catch (_) {
        this.media = []
      }

      this.mediaLoading = false
    }
  }
}
</script>
