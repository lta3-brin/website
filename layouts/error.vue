<template>
  <v-app dark>
    <v-container fluid class="fill-height">
      <v-row v-resize="onResize" justify="center" align="center">
        <v-col cols="auto" class="text-center">
          <v-icon color="red darken-4" class="mb-12" size="120">
            fa-bug
          </v-icon>

          <h1
            v-if="error.statusCode === 404"
            class="font-weight text-uppercase mb-8"
            :class="textSize"
          >
            {{ pageNotFound }}
          </h1>

          <h1 v-else class="display-3 font-weight text-uppercase mb-8">
            {{ otherError }}
          </h1>

          <v-btn large to="/" color="white" outlined>
            Halaman Utama
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404; Tidak Ditemukan',
      otherError: 'Oh tidak, Terjadi Kesalahan',
      textSize: 'display-3'
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.textSize = 'headline'
      } else {
        this.textSize = 'display-3'
      }
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
