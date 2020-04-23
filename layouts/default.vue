<template>
  <v-app dark>
    <Header />

    <v-content>
      <nuxt />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>
