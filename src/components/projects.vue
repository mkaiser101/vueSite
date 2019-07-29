<template>
     <div>
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
        card_text: 'This project utilized Tweeted job postings, mapping them out to show where they physically came from to help users find local job openings with active recruitment.  While in Big Data Architecture at the University of Colroado I worked on a team utilizing Nodejs, Expressjs, MongoDB, and Docker with some help from GNIPs Twitter and Mapbox Studios APIs. Moving forward, similar strategies could be used to ingest and map facebook, linkedin, or glassdoor job postings by location.',
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



