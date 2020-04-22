<template>
  <div>
    <v-app-bar fixed app>
      <img alt="logo bbta3" class="logo" height="45" src="/icon.png" />

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn
        v-for="item of item_utama"
        :key="item.id"
        class="d-none d-md-flex"
        small
        text
        @click.stop="showSideMenu(item.id)"
      >
        {{ item.nama }}
      </v-btn>

      <v-btn
        icon
        class="d-xs-flex d-md-none"
        @click.stop="showSideMenu('mini')"
      >
        <v-icon>fa-bars</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="sideMenu" width="320" temporary fixed>
      <HeaderDrawer :data-header="header_dipilih" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import menuItem from '~/static/menu.json'
import HeaderDrawer from '~/components/header_drawer'

export default {
  name: 'Header',
  components: {
    HeaderDrawer
  },
  data() {
    return {
      title: 'BBTA3 BPPT',
      sideMenu: false,
      item_utama: menuItem,
      header_dipilih: []
    }
  },
  methods: {
    showSideMenu(payload) {
      this.sideMenu = !this.sideMenu
      if (payload !== 'mini') {
        this.header_dipilih = this.item_utama.filter(
          (item) => item.id === payload
        )
      } else {
        this.header_dipilih = this.item_utama
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  margin-right: 25px;
}
</style>
