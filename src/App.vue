<template>
  <v-app>
    <v-toolbar class="green accent-3" fixed="True">
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
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

          <v-btn flat dark href="https://www.instagram.com/remy_mtndog"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></v-btn>
        
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Remy Mountain Dog</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>


