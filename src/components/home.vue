
<template>
  <div>

  <v-parallax
    height="700"
    dark
    :src="image1.hero"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <v-img min-width="35%" :src="image3.paralaxicon" >
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
        </v-layout>
      </v-img>

      <h1 class="display-2 font-weight-thin mb-3">I like to make things</h1>
      <h4 class="subheading">I'll build your solution for $$</h4>
    </v-layout>
  </v-parallax>

   <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

  
  <v-container fluid>
    <v-layout justify-space-around>
      <v-flex xs5>
        <div class="title mb-1">Default (cover)</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <div class="subheading pt-3">Too high</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          </v-layout>
      </v-flex>

      <v-flex xs5>
        <div class="title mb-1">Contain</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
          <div class="subheading pt-3">Too high</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>




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
        },
        image3: {
          paralaxicon: require('../assets/rufusOG.jpg')
        }
      }
    }
  }
</script>
