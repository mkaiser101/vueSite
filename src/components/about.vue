<template>
<div>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
      <img src="images.meadow" width="400" />
    </v-layout>
  </v-parallax>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: {
          bron: require('../assets/bron.jpg')
        }
      }
    }
  }
</script>