<template>
  <v-card>
    <v-list rounded>
      <v-subheader>KEAHLIAN BBTA3</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="ahli in keahlian.subs"
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
import dataKeahlian from '~/static/keahlian.json'

export default {
  name: 'SubMenuKeahlian',
  data() {
    return {
      keahlian: dataKeahlian
    }
  }
}
</script>
