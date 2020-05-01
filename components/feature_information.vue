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

      return this.selectedItem(items)
    },
    selectedBerita() {
      const items = this.$store.state.berita.koleksi

      return this.selectedItem(items)
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
