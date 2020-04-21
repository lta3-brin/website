<template>
  <v-app dark>
    <Header />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/header'

export default {
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>
