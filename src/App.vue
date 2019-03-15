<template>
  <v-app>
    <v-toolbar class="green accent-3">
      <v-toolbar-title dark>Navigate me</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark to="/">home</v-btn>
        <v-btn flat dark to="/second" exact>second</v-btn>
        <v-btn flat dark to="/hikes" exact>hikes</v-btn>
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
