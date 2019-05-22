<template>
  <v-app>
    <v-toolbar class="teal" fixed="True">
      <v-toolbar-title dark>Matt Kaiser</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark to="/">home</v-btn>
        <v-btn flat dark to="/projects" exact>projects</v-btn>
        <v-btn flat dark to="/about" exact>about</v-btn>
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
        <strong class="subheading">Find me on these other sites!</strong>

        <v-spacer></v-spacer>

          <v-btn flat dark href="https://www.github.com/mkaiser101"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></v-btn>
          <v-btn flat dark href="https://stackoverflow.com/users/7637112/matt"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'stack-overflow' }"/></v-btn>
          <v-btn flat dark href="https://www.linkedin.com/in/matthew-kaiserucb/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></v-btn>
        
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Matt Kaiser</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>


