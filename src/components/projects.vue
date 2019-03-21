
<template>
<v-layout row>
     <v-flex xs6 order-lg2>
       <v-card>
            <!-- BEGIN Hiking Project -->
            <iframe style="width:100%; max-width:1200px; height:500px;" frameborder="0" scrolling="no" src="https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=-11720099&y=4865450&z=6&h=500"></iframe>
            <!-- END Hiking Project -->
       </v-card>
     </v-flex>
     <v-flex xs6>
       <v-card>
       <v-avatar
                size="36px"
              >
                <img
                  v-if="message.avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  alt="Avatar"
                >
                </v-avatar>
       </v-card>
     </v-flex>
   </v-layout>
</template>

<script>
export default {
  data () {
    return {
      img: require('../assets/remby.jpg')
    }
  }
}
</script>