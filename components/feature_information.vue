<template>
  <v-container fluid class="px-0">
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="6">
        <v-card
          dark
          hover
          :href="`https://www.youtube.com/watch?v=${selectedVideo.id}`"
          target="_blank"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-subtitle>
                {{ selectedVideo.description | truncating }}
              </v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="80" tile>
              <v-img :src="selectedVideo.thumbnail" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          dark
          hover
          :href="
            `https://twitter.com/${selectedBerita.screen_name}/status/${selectedBerita.id}`
          "
          target="_blank"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-subtitle>
                {{ selectedBerita.description | truncating }}
              </v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="80" tile>
              <v-img :src="selectedBerita.thumbnail" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FeatureInformation',
  filters: {
    truncating(val) {
      return `${val.substring(0, 65)}...`
    }
  },
  computed: {
    selectedVideo() {
      const items = this.$store.state.video.koleksi

      if (items.length > 0) {
        return this.selectedItem(items)
      } else {
        return {
          id: 'halyHrNpLDU',
          description:
            'Video ini merupakan bagian dari laporan progress pengembangan website BBTA3 yang baru.',
          thumbnail:
            'https://i9.ytimg.com/vi/halyHrNpLDU/mqdefault.jpg?time=1589579937178&sqp=CLSf_PUF&rs=AOn4CLDlcXMKig_TxBpf1xm4l1NHu3xhaA'
        }
      }
    },
    selectedBerita() {
      const items = this.$store.state.berita.koleksi

      if (items.length > 0) {
        return this.selectedItem(items)
      } else {
        return {
          id: '1257659702621560833',
          screen_name: 'BBTA3_BPPT',
          description:
            'Berikut ini tahap ke-2 pengembangan website BBTA3, mengubah desain kedalam script yang dapat ditampilkan kedalam browser',
          thumbnail:
            'https://pbs.twimg.com/ext_tw_video_thumb/1257657774541910016/pu/img/aVTyprglT3QKCmsI.jpg'
        }
      }
    }
  },
  methods: {
    selectedItem(collections) {
      const filteredItems = collections.slice(2, collections.length)

      return filteredItems[Math.floor(Math.random() * filteredItems.length)]
    }
  }
}
</script>
