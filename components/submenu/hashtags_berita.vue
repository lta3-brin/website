<template>
  <v-card>
    <v-subheader>KATA KUNCI</v-subheader>
    <v-card-text>
      <v-chip-group active-class="blue white--text" column>
        <v-chip
          v-for="tag in hashtagsBerita"
          :key="tag"
          :href="`https://twitter.com/hashtag/${tag}`"
          target="_blank"
          color="red darken-4"
          class="font-italic font-weight-black"
        >
          #{{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SubMenuKategoriVideo',
  computed: {
    hashtagsBerita() {
      return this.$store.state.berita.hashtags.filter((value, index, self) => {
        return self.indexOf(value) === index
      })
    }
  }
}
</script>
