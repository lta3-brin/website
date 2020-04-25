<template>
  <Kosongan />
</template>

<script>
import Kosongan from '~/components/empty'

export default {
  name: 'IndexKeahlian',
  components: {
    Kosongan
  },
  head() {
    return {
      title: `Informasi keahlian ${this.$route.params.slug}`,
      meta: [
        {
          hid: 'slug_keahlian',
          name: 'description',
          content: `Halaman berkaitan informasi keahlian ${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
