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
            Balai Besar Aerodinamika, Aeroelastika dan Aeroakustika
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
        <v-col cols="12" md="4">
          <v-card hover>
            <v-img
              class="white--text align-end"
              height="350px"
              src="https://i.pinimg.com/originals/fb/01/7a/fb017af2e927556a8d35b6537218ae92.jpg"
            >
              <v-card-title>Keahlian Aerodinamika</v-card-title>
            </v-img>

            <v-card-subtitle>
              Pengukuran pada pengujian aerodinamika dalam terowongan angin
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card hover>
            <v-img
              class="white--text align-end"
              height="350px"
              src="https://i.pinimg.com/originals/10/77/73/1077735953c1aa8b4e867147f01fa15d.jpg"
            >
              <v-card-title>Keahlian Aeroelastika</v-card-title>
            </v-img>

            <v-card-subtitle>
              Pengukuran pada pengujian aeroelastika benda uji dalam terowongan
              angin
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card hover>
            <v-img
              class="white--text align-end"
              height="350px"
              src="https://i.pinimg.com/originals/0d/b1/58/0db1580a24d754b4f270140d0052ac98.jpg"
            >
              <v-card-title>Keahlian Aeroakustika</v-card-title>
            </v-img>

            <v-card-subtitle>
              Pengukuran pada pengujian aeroakustika benda uji dalam anechoic
              chamber
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card hover>
            <v-img
              class="white--text align-end"
              height="350px"
              src="https://i.pinimg.com/originals/9c/14/ff/9c14ffc14d49e6e44a7fab614980f58b.jpg"
            >
              <v-card-title>Keahlian Aeromekanika</v-card-title>
            </v-img>

            <v-card-subtitle>
              Pemodelan dan manufaktur benda uji serta fabrikasi peralatan
              pendukung pengujian
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card hover>
            <v-img
              class="white--text align-end"
              height="350px"
              src="https://i.pinimg.com/originals/71/56/1f/71561fa121bd42fc6817ca80fa9cf608.jpg"
            >
              <v-card-title>Keahlian Aerotronika</v-card-title>
            </v-img>

            <v-card-subtitle>
              Menerapkan metode dan analisis serta pengembangan dalam layanan
              pengujian
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>
