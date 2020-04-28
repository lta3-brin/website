<template>
  <v-app dark>
    <Header />

    <v-content>
      <v-app dark>
        <v-container>
          <v-row align="start" justify="space-between">
            <v-col cols="12" md="8">
              <nuxt />
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>
                SIDEBAR
              </v-subheader>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/components/header'
// import Footer from '~/components/footer'

export default {
  components: {
    Header
    // Footer
  },
  data() {
    return {}
  }
}
</script>
