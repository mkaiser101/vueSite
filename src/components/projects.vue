<template>
     <div>


    <v-layout row d-flex="true" class="mt-5">
      <v-card
    class="mx-auto"
    max-width="400"
    max-height="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"

      :src="image2.littlebirdtoldme"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

    
    </v-card-actions>
  </v-card>
  </v-layout>

  
   


   </div>

</template>

<script>
  export default {
    data () {
      return {
        image2: {
          littlebirdtoldme: require('../assets/alittlebirdy.jpg')
        }
      }
    }
  }
</script>



