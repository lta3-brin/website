<template>
  <div>
    <v-app-bar fixed app elevate-on-scroll>
      <img alt="logo bbta3" class="logo" height="45" src="/icon.png" />

      <v-toolbar-title @click.stop="goHome" v-text="title" />

      <v-spacer />

      <v-btn
        v-for="item of item_utama"
        :key="item.slug"
        class="d-none d-md-flex"
        small
        text
        exact
        @click.stop="showSideMenu(item)"
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
import keahlianItem from '~/static/keahlian.json'
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
      item_utama: [],
      header_dipilih: []
    }
  },
  created() {
    menuItem.unshift(keahlianItem)

    this.item_utama = menuItem
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      })
    },
    showSideMenu(payload) {
      if (payload !== 'mini') {
        this.header_dipilih = this.item_utama.filter(
          (item) => item.slug === payload.slug
        )

        if (this.header_dipilih[0].subs.length > 0) {
          this.sideMenu = !this.sideMenu
        } else {
          this.$router.push({
            path: this.header_dipilih[0].to || '/'
          })
        }
      } else {
        this.header_dipilih = this.item_utama
        this.sideMenu = !this.sideMenu
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
