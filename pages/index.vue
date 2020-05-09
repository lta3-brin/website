<template>
  <div>
    <v-parallax
      v-if="informasi !== null"
      dark
      height="500"
      :src="informasi.thumbnail"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-thin mb-4">
            {{ informasi.judul }}
          </h1>
          <h4 class="subheading">
            {{ informasi.subjudul }}
          </h4>

          <v-btn
            v-if="informasi.tautan && externalLink"
            outlined
            color="white"
            large
            class="mt-7"
            :href="informasi.tautan"
            target="_blank"
          >
            pelajari
          </v-btn>
          <v-btn
            v-else-if="informasi.tautan && !externalLink"
            outlined
            color="white"
            large
            class="mt-7"
            :to="informasi.tautan"
          >
            pelajari
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-card color="red darken-4" dark tile>
      <v-container>
        <v-row align="center" justify-md="space-around" justify="center">
          <v-col cols="auto">
            <h1 class="title font-weight-thin text-center">
              Apabila perlu informasi atau pertanyaan, hubungi kami melalui chat
            </h1>
          </v-col>
          <v-col cols="auto" class="text-center">
            <Chat />
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-container fluid class="mt-4">
      <h1
        class="text-center text-uppercase headline font-weight-black mt-12 mb-10"
      >
        Bidang Keahlian
      </h1>

      <v-row align="center" justify-lg="space-around" justify-md="center">
        <v-col
          v-for="keahlian in dataKeahlian"
          :key="keahlian.slug"
          cols="12"
          md="4"
          lg="2"
        >
          <v-card hover class="growing" :to="keahlian.to + keahlian.slug">
            <v-img
              class="white--text align-end"
              height="350px"
              :src="keahlian.rincian.thumbnail"
            >
              <v-card-title class="heading">
                {{ keahlian.nama }}
              </v-card-title>
            </v-img>

            <v-card-subtitle>
              {{ keahlian.rincian.title }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Chat from '~/components/submenu/chat'

export default {
  name: 'LandingPage',
  components: {
    Chat
  },
  data() {
    return {
      dataKeahlian: [],
      informasi: null,
      externalLink: false
    }
  },
  mounted() {
    this.fetchInformasi()
    this.fetchKeahlian()
  },
  methods: {
    async fetchInformasi() {
      try {
        const infoSnapshot = await this.$firebase
          .firestore()
          .collection('informasi')
          .doc('utama')

        infoSnapshot.onSnapshot((doc) => {
          this.informasi = doc.data()
        })

        if (this.informasi.tautan) {
          const partsUrl = this.informasi.tautan.split('/')

          this.externalLink = partsUrl[0].includes('http')
        }
      } catch (_) {
        this.informasi = {
          judul: 'Selamat Datang',
          subjudul:
            'Balai Besar Teknologi Aerodinamika, Aeroelastika dan Aeroakustika',
          thumbnail:
            'https://i.pinimg.com/originals/92/58/f0/9258f03b22fbf1c96b0b8519d4bf90d4.png',
          tautan: ''
        }
      }
    },
    async fetchKeahlian() {
      try {
        const keahlianSnapshot = await this.$firebase
          .firestore()
          .collection('keahlian')
          .orderBy('urutan', 'asc')
          .get()

        keahlianSnapshot.forEach((keahlian) => {
          this.dataKeahlian.push(keahlian.data())
        })
      } catch (_) {
        this.dataKeahlian = []
      }
    }
  },
  head() {
    return {
      title: 'Selamat Datang',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'index_description',
          name: 'description',
          content:
            'website resmi BBTA3 BPPT - Balai Besar Teknologi Aerodinamika, Aeroelastika, dan Aeroakustika'
        }
      ]
    }
  }
}
</script>
