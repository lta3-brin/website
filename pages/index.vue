<template>
  <div>
    <v-parallax
      dark
      height="500"
      src="https://i.pinimg.com/originals/92/58/f0/9258f03b22fbf1c96b0b8519d4bf90d4.png"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-thin mb-4">Selamat Datang</h1>
          <h4 class="subheading">
            Balai Besar Teknologi Aerodinamika, Aeroelastika dan Aeroakustika
          </h4>
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
            <v-btn
              class="ma-2"
              color="primary"
              x-large
              rounded
              elevation="7"
              target="_blank"
              href="http://bit.ly/DiscordBBTA3"
            >
              BERGABUNG
            </v-btn>
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

      <v-row align="center" justify="center">
        <v-col
          v-for="keahlian in dataKeahlian"
          :key="keahlian.slug"
          cols="12"
          md="4"
        >
          <v-card hover class="growing" :to="keahlian.to">
            <v-img
              class="white--text align-end"
              height="350px"
              :src="keahlian.rincian.thumbnail"
            >
              <v-card-title>Keahlian {{ keahlian.nama }}</v-card-title>
            </v-img>

            <v-card-subtitle>
              {{ keahlian.subtitle }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Keahlian from '~/static/keahlian.json'

export default {
  name: 'LandingPage',
  data() {
    return {
      dataKeahlian: []
    }
  },
  created() {
    this.dataKeahlian = Keahlian.subs
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
