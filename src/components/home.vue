
<template>
  <div>

  <v-parallax
    dark
    :src="image1.hero"
  >
    <v-layout
      align-center
      column
      justify-center
    >

      <h1 class="display-2 font-weight-thin mb-3">I like to make things</h1>
      <h4 class="subheading">I'll build your solution for $$</h4>
    </v-layout>
  </v-parallax>
  <v-layout row>
     <v-flex xs6 order-lg2>
     <v-card>
      <v-img
        :src="image2.littlebirdtoldme"
        aspect-ratio="2"
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
       <v-card>
       <v-carousel>
         <v-carousel-item
           v-for="(item,i) in items"
           :key="i"
           :src="item.src"
         ></v-carousel-item>
       </v-carousel>
       </v-card>
     </v-flex>
   </v-layout>

  <v-layout row>
       <v-flex grow pa-1>
         <v-card dark color="green darken-3">
         <v-container grid-list-sm fluid>
           <v-layout row wrap>
             <v-flex
               v-for="n in 9"
               :key="n"
               xs4
               d-flex
             >
               <v-card flat tile class="d-flex">
                 <v-img
                   :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                   :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                   aspect-ratio="1"
                   class="grey lighten-2"
                 >
                   <v-layout
                     slot="placeholder"
                     fill-height
                     align-center
                     justify-center
                     ma-0
                   >
                     <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                   </v-layout>
                 </v-img>
               </v-card>
             </v-flex>
           </v-layout>
         </v-container>
         </v-card>
       </v-flex>
       <v-flex
         shrink
         pa-1
       >
         <v-card
           dark
           color="green darken-1"
         >
         <v-container grid-list-sm fluid>
           <v-layout row wrap>
             <v-flex
               v-for="n in 9"
               :key="n"
               xs4
               d-flex
             >
               <v-card flat tile class="d-flex">
                 <v-img
                   :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                   :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                   aspect-ratio="1"
                   class="grey lighten-2"
                 >
                   <v-layout
                     slot="placeholder"
                     fill-height
                     align-center
                     justify-center
                     ma-0
                   >
                     <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                   </v-layout>
                 </v-img>
               </v-card>
             </v-flex>
           </v-layout>
         </v-container>
         </v-card>
       </v-flex>
     </v-layout>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

  </v-layout>


    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>






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
          littlebirdtoldme: require('../assets/littlebirdtoldme.jpg')
        }
      }
    }
  }
</script>
