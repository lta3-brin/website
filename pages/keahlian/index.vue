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
      title: 'Pemberitahuan',
      meta: [
        {
          hid: 'index_keahlian',
          name: 'description',
          content: 'Pemberitahuan halaman keahlian utama'
        }
      ]
    }
  }
}
</script>
