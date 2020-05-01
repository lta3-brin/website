<template>
  <article class="artikel">
    <vue-markdown :source="tentang.rincian.deskripsi" />
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Tentang from '~/static/tentang.json'

export default {
  name: 'SlugTentang',
  layout: 'right_sidebar',
  components: {
    VueMarkdown
  },
  data() {
    return {
      tentang: null
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    }
  },
  created() {
    this.tentang = Tentang.subs.filter((sub) => {
      return sub.slug === this.slug
    })[0]
  }
}
</script>
