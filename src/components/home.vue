
<template>
  <div>

  <v-parallax
    dark
    :src="images.fcBenny"
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
     <v-card height="550">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>

     </v-flex>
     <v-flex xs6 order-lg2>
       <v-card>
       <v-carousel height="550">
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
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
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
        images: {
          fcBenny: require('../assets/distortedtree.jpg')
        }
      }
    }
  }
</script>
