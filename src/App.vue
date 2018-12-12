<template>
  <v-app>
    <v-toolbar class="deep-purple">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-title dark>Vuetify Tutorial</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat dark>Vue</v-btn>
        <v-btn flat dark>Vuex</v-btn>
        <v-btn flat dark>Nuxt</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="mini"
      light
      absolute
    >

    
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
