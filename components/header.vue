<template>
  <div>
    <v-app-bar fixed app elevate-on-scroll>
      <img alt="logo bbta3" class="logo" height="45" src="/icon.png" />

      <v-toolbar-title class="pointing" @click.stop="goHome" v-text="title" />

      <v-spacer />

      <v-btn
        v-for="item of item_utama"
        :key="item.slug"
        class="d-none d-md-flex"
        :color="
          $route.path.includes(item.nama.toLowerCase().split(' ')[0])
            ? 'primary'
            : ''
        "
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
      <HeaderDrawer :data-header="item_pilihan" />
    </v-navigation-drawer>
  </div>
</template>

<script>
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
      pilihan: []
    }
  },
  computed: {
    item_pilihan: {
      get() {
        return this.pilihan
      },
      set(value) {
        this.pilihan = value
      }
    }
  },
  mounted() {
    this.fetchMenu()
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      })
    },
    async fetchMenu() {
      this.item_utama = []

      try {
        const menuSnapshot = await this.$fireStore
          .collection('menu')
          .orderBy('urutan', 'asc')
          .get()

        menuSnapshot.forEach((pilihan) => {
          this.item_utama.push(pilihan.data())
        })
      } catch (_) {
        this.item_utama = []
      }
    },
    showSideMenu(payload) {
      if (payload !== 'mini') {
        this.item_pilihan = this.item_utama.filter(
          (item) => item.slug === payload.slug
        )

        if (this.item_pilihan[0].subs.length > 0) {
          this.sideMenu = !this.sideMenu
        } else if (this.item_pilihan[0].tautan.includes('http')) {
          window.open(this.item_pilihan[0].tautan)
        } else {
          this.$router.push({
            path: this.item_pilihan[0].to || '/'
          })
        }
      } else {
        this.item_pilihan = this.item_utama
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
