<template>
  <article class="artikel">
    <div v-for="prof in profil" :key="prof.slug">
      <v-subheader class="pl-0 mb-9 font-weight-black display-1 red--text">
        {{ prof.nama }}
      </v-subheader>

      <vue-markdown :source="prof.deskripsi" />

      <v-img v-if="prof.slug === 'organisasi'" src="/struktur_organisasi.svg" />

      <v-container v-if="prof.slug === 'pejabat'" class="px-0">
        <v-row align="start" justify="space-between">
          <v-col v-for="dt in prof.data" :key="dt.nama" cols="12" md="6">
            <v-card shaped class="growing">
              <v-img class="white--text align-end" :src="dt.avatar">
                <v-card-title>{{ dt.nama }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">{{ dt.posisi }}</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ dt.pangkat }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import profil from '~/static/collections/profil.json'

export default {
  name: 'Profil',
  layout: 'right_sidebar',
  components: {
    VueMarkdown
  },
  data() {
    return {
      profil
    }
  },
  head() {
    return {
      title: `Informasi profil bbta3`,
      meta: [
        {
          hid: 'slug_profil',
          name: 'description',
          content: `Halaman berkaitan informasi profil bbta3`
        }
      ]
    }
  }
}
</script>
