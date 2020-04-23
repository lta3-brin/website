<template>
  <v-container fluid class="px-0 pb-0">
    <v-card flat tile class="light-blue darken-4 white--text pt-4">
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="4" lg="4">
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
              Aeroakustika) merupakan transformasi dari unit kerja lama UPT LAGG
              dengan konsep baru dengan cakupan keahlian yang lebih luas.
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

        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card-text>
            <v-card
              v-for="video in videos"
              :key="video.id.videoId"
              outlined
              color="white"
            >
              <v-subheader
                class="red--text text--darken-4 font-weight-black title"
              >
                Video BBTA3
              </v-subheader>
              <v-img
                height="250"
                :src="video.snippet.thumbnails.high.url"
                :alt="video.snippet.title"
              >
              </v-img>

              <v-card-subtitle class="grey--text text-darken-1 pb-0">
                {{ video.snippet.publishedAt | parseDate }}
              </v-card-subtitle>

              <v-card-title class="black--text">
                {{ video.snippet.title }}
              </v-card-title>

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  :href="'https://www.youtube.com/watch?v=' + video.id.videoId"
                  target="_blank"
                >
                  Simak
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card-text>
            <a
              class="twitter-timeline"
              data-dnt="true"
              data-theme="light"
              data-tweet-limit="1"
              data-aria-polite="assertive"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/BBTA3_BPPT?ref_src=twsrc%5Etfw"
              >Berita dari BBTA3_BPPT</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-container fluid class="text-center white--text">
        <v-row align="center" justify="center" justify-md="space-between">
          <v-col cols="auto">
            ©️ {{ new Date().getFullYear() }}
            <span class="red--text">❤</span>
            <strong>TRIE</strong>
          </v-col>
          <v-col cols="auto">
            <span>📞 +62 21 756 090 2</span>
            <span class="ml-4">📠 +62 21 756 090 1</span>
            <span class="ml-4">✉️ sekr-bbta3@bppt.go.id</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Footer',
  data: () => ({
    sosmed: [
      {
        nama: 'fab fa-twitter',
        url: 'http://bit.ly/TwitterBBTA3'
      },
      {
        nama: 'fab fa-instagram',
        url: 'http://bit.ly/InstagramBBTA3'
      },
      {
        nama: 'fab fa-facebook',
        url: 'http://bit.ly/FacebookBBTA3'
      },
      {
        nama: 'fab fa-youtube-square',
        url: 'http://bit.ly/YoutubeBBTA3'
      },
      {
        nama: 'fab fa-google-play',
        url: 'http://bit.ly/BetaTesterBBTA3'
      },
      {
        nama: 'fab fa-discord',
        url: 'http://bit.ly/DiscordBBTA3'
      }
    ],
    videos: []
  }),
  created() {
    this.fetchYoutubeVideo()
  },
  methods: {
    async fetchYoutubeVideo() {
      try {
        const key = process.env.VIDEO_API
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&order=date&type=video&maxResults=1&key=${key}`
        const RES = await axios.get(URL)

        RES.data.items.forEach((video) => {
          this.videos.push(video)
        })
      } catch (e) {
        this.videos = []
      }
    }
  }
}
</script>
