<template>
  <v-list>
    <v-list-group v-for="item of items" :key="item.id">
      <template v-slot:activator>
        <v-list-item-title>{{ item.nama }}</v-list-item-title>
      </template>
      <template v-slot:appendIcon>
        <v-icon v-if="item.subs.length > 0">fa-angle-down</v-icon>
        <v-icon v-else></v-icon>
      </template>

      <v-list-group
        v-for="sub of item.subs"
        :key="sub.id"
        no-action
        sub-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-title>{{ sub.nama }}</v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:prependIcon>
          <v-icon v-if="sub.subs.length > 0">fa-caret-down</v-icon>
          <div v-else></div>
        </template>

        <v-list-item v-for="itm in sub.subs" :key="itm.id" link>
          <v-list-item-title v-text="itm.nama"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
import menuItem from '~/static/menu.json'

export default {
  name: 'HeaderDrawer',
  data() {
    return {
      items: menuItem
    }
  }
}
</script>
