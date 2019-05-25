<template>
<div>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        large
      >
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title class="title">{{ item.title }}</v-card-title>
          <v-card-title>
            <h3>{{ item.header }}</h3>
            </v-card-title>
            <v-card-text>
             {{ item.text }}
          </v-card-text>
           <v-btn round :color="item.color" :to="item.route">{{ item.buttonText }}</v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            color: 'red lighten-2',
            icon: 'mdi-briefcase',
            text: 'Deploy software updates and patches to servers, write python scripts for automation, and test functionality of new open source solutions within Visas global network.',
            title: 'Associate Cyber Secuirty Engineer',
            header: '2018 - Present --- Visa Inc --- Ashburn, VA',
            buttonText: 'about',
            route: '/about'
          },
          {
            color: 'blue lighten-2',
            icon: 'mdi-briefcase',
            text: 'Helping students learn course content in core Computer Science, Physics, and Calculus classes at the University of Colorado.  Went to lecture halls pitching the company in its easrly stages in frnt of lecture halls and classrooms getting students signed up and informed about the service.',
            title: 'Teacher, Tutor, and Spokesperson',
            header: '2017 - 2018 --- Penji --- Boulder, CO',
            buttonText: 'home',
            route: '/'
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-briefcase',
            text: 'Computer Systems (CSCI 2400) Course Assistant for three semesters. I helped students prepare for grading interviews, write c and x86 assembly code, and learn the ins and outs of gdb, the GNU debugger. Collaborated with the professor and teaching assistants to effectively communicate key concepts such as memory management, hardware architecture, and stack visualization.',
            title: 'Computer Science Course Assistant',
            header: '2017 - 2018 --- University of Colorado at Boulder',
            buttonText: 'click me',
            route: '/about'
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: 'Visa Inc',
            buttonText: 'click me',
            route: '/about'
          },
          {
            color: 'indigo',
            icon: 'mdi-buffer',
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: 'Visa Inc',
            buttonText: 'click me',
            route: '/about'
          }
        ]
      }
    }}
</script>