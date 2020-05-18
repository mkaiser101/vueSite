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



      <v-layout row d-flex="true">
     <v-flex xs6 order-lg2>
     <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Little Bird Told Me - Big Data Architecture</h3>
       
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>

     </v-flex>
         

   </v-layout>


       <v-layout row d-flex="true">
     <v-flex xs6 order-lg3>
     <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Little Bird Told Me - Big Data Architecture</h3>
       
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>

     </v-flex>
   
     <v-flex xs6 order-lg3>
       <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Little Bird Told Me - Big Data Architecture</h3>
       
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>
     </v-flex>
         
         
         <v-flex xs6 order-lg3>
       <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Pineapple Fried Rice </h3>
       
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>
     </v-flex>



   </v-layout>
   


   <v-layout row d-flex="true">
     <v-flex xs6 order-lg2>
     <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Little Bird Told Me - Big Data Architecture</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>

     </v-flex>
     <v-flex xs6 order-lg2>
       <v-card max-width="100%">
      <v-img
        :src="image2.littlebirdtoldme"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Little Bird Told Me - Big Data Architecture</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/mkaiser101/DataDreamTeam-1">View on Github</v-btn>
      </v-card-actions>
    </v-card>
     </v-flex>
   </v-layout>


   </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/airplanewindow.jpg')
          },
          {
            src: require('../assets/rufusOG.jpg')
          },
          {
            src: require('../assets/remby.jpg')
          },
          {
            src: require('../assets/fcBenny.jpg')
          },
          {
            src: require('../assets/datasciencehype.jpg')
          }
        ],
        image1: {
          hero: require('../assets/hero.jpeg')
        },
        image2: {
          littlebirdtoldme: require('../assets/alittlebirdy.jpg')
        }
      }
    }
  }
</script>



