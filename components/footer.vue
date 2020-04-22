<template>
  <v-container fluid class="px-0 pb-0">
    <v-card flat tile class="indigo lighten-1 white--text pt-4">
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
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card-text>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/videoseries?list=UUa0_hm_SiHxps1Llk_q6I1Q"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
              data-chrome="nofooter noborders"
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

      <v-card-text class="text-center white--text d-flex justify-space-between">
        <div>
          {{ new Date().getFullYear() }}
          <span class="red--text">❤</span>
          <strong>TRIE</strong>
        </div>

        <div>
          <span>📞 +62 21 756 090 2</span>
          <span class="ml-4">📠 +62 21 756 090 1</span>
          <span class="ml-4">✉️ sekr-bbta3@bppt.go.id</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
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
    ]
  })
}
</script>
