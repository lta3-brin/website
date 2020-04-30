<template>
  <v-card tile>
    <v-list rounded>
      <v-subheader>KATEGORI VIDEO</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="kategori in kategoriVideo"
          :key="kategori.id"
          :href="`https://www.youtube.com/playlist?list=${kategori.id}`"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon size="15">fab fa-youtube</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ kategori.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'SubMenuKategoriVideo',
  computed: {
    kategoriVideo() {
      return this.$store.state.video.playlist
    }
  }
}
</script>
