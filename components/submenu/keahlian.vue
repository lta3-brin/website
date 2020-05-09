<template>
  <v-card>
    <v-subheader>KEAHLIAN BBTA3</v-subheader>
    <v-list rounded>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="ahli in keahlian"
          :key="ahli.slug"
          :to="ahli.to + ahli.slug"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ ahli.nama }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'SubMenuKeahlian',
  data() {
    return {
      keahlian: []
    }
  },
  mounted() {
    this.fetchKeahlian()
  },
  methods: {
    async fetchKeahlian() {
      try {
        const keahlianSnapshot = await this.$firebase
          .firestore()
          .collection('keahlian')
          .orderBy('urutan', 'asc')
          .get()

        keahlianSnapshot.forEach((keahlian) => {
          this.keahlian.push(keahlian.data())
        })
      } catch (_) {
        this.keahlian = []
      }
    }
  }
}
</script>
