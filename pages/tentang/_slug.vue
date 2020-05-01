<template>
  <article class="artikel">
    <vue-markdown :source="slug" />
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'

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
  }
}
</script>
