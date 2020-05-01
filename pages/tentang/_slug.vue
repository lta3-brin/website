<template>
  <v-subheader> INI HALAMAN TENTANG {{ slug }} </v-subheader>
</template>

<script>
export default {
  name: 'SlugTentang',
  layout: 'right_sidebar',
  computed: {
    slug() {
      return this.$route.params.slug
    }
  }
}
</script>
