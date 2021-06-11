<template>
<div>
<v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
  
      <v-card-title>MKs Ramen</v-card-title>
  
      <v-card-text>
 
          
  
  
        <div>Delicious ramen, using fresh broth, softish boiled eggs, miso carrots, corn, flash fried tofu, kimchi</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>How it's made</v-card-title>
  
      <v-card-text>
        hello
      </v-card-text>
  

    </v-card>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            color: 'indigo',
            icon: 'mdi-briefcase',
            text: 'Deploy software updates and patches to servers, write python scripts for automation, and test functionality of new open source solutions within Visas global network.',
            title: 'Associate Cyber Secuirty Engineer',
            header: '2018 - Present --- Visa Inc --- Ashburn, VA',
            buttonText: 'about',
            buttonColor: '#696969',
            route: 'https://www.linkedin.com/in/matthew-kaiserucb/'
          },
          {
            color: 'blue lighten-2',
            icon: 'mdi-briefcase',
            text: 'Helping students learn course content in core Computer Science, Physics, and Calculus classes at the University of Colorado.  Went to lecture halls pitching the company in its easrly stages in frnt of lecture halls and classrooms getting students signed up and informed about the service.',
            title: 'Teacher, Tutor, and Spokesperson',
            header: '2017 - 2018 --- Penji --- Boulder, CO',
            buttonText: 'about',
            buttonColor: '#696969',
            route: '/about'
          },
          {
            color: 'yellow darken-3',
            icon: 'mdi-briefcase',
            text: 'Computer Systems (CSCI 2400) Course Assistant for three semesters. I helped students prepare for grading interviews, write c and x86 assembly code, and learn the ins and outs of gdb, the GNU debugger. Collaborated with the professor and teaching assistants to effectively communicate key concepts such as memory management, hardware architecture, and stack visualization.',
            title: 'Computer Science Course Assistant',
            header: '2017 - 2018 --- University of Colorado at Boulder -- Boulder, CO',
            buttonText: 'about',
            buttonColor: '#fff',
            route: '/about'
          },
          {
            color: 'green darken-2',
            icon: 'mdi-airballoon',
            text: 'hello',
            title: 'IT / Application Developer Intern',
            header: '2016 - 2017 --- SEEC --- Silver Spring, MD',
            buttonText: 'about',
            buttonColor: '#696969',
            route: '/about'
          }
        ]
      }
    }}
</script>
<style>
.timeline {
    width: 98%;
    background-color:#d3d3d3;
    margin-left: auto;
    margin-right: auto;
}
.timelineitems {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
</style>