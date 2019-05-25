<template>
<div>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
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
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: '2018 - Present --- Visa Inc'
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: 'Visa Inc'
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: 'Visa Inc'
          },
          {
            color: 'indigo',
            icon: 'mdi-buffer',
            text: 'hello',
            title: 'Associate Cyber Secuirty Engineer',
            header: 'Visa Inc'
          }
        ]
      }
    }}
</script>