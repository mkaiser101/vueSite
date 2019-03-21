
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
     
      <h1 class="display-2 font-weight-thin mb-3">I like to make things with technology</h1>
      <h4 class="subheading">I'll build your solution today!</h4>
    </v-layout>
  </v-parallax>
  <v-layout row>
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
     <v-flex xs6>
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
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: '../assets/fcBenny.jpg'
          }
        ],
        images: {
          fcBenny: require('../assets/fcBenny.jpg')
        }
      }
    }
  }
</script>
