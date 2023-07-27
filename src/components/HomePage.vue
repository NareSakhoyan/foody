<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-list-subheader>What's the name?</v-list-subheader>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-text-field label="name" v-model="name" placeholder="Yummy"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>For how many people?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field label="Portion" v-model="portion" suffix="per person"></v-text-field>
      </v-col>
    </v-row>

    <!-- https://codepen.io/kaelwd/pen/ZEYWvMQ -->
    <v-row>
      <v-col cols="4">
        <v-list-subheader>Ingredients</v-list-subheader>
      </v-col>

      <v-col>
        <v-combobox
          v-model="ingredients"
          v-model:search="search"
          :hide-no-data="false"
          :items="items"
          hide-selected
          hint="cucumber, chicken..."
          label="ingredients"
          multiple
          persistent-hint
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title>
                No results matching "<strong>{{ search }}</strong
                >". Press <kbd>enter</kbd> to create a new one
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>How much time is it gonna take?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field label="time" v-model="time"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>How much does it cost?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field label="Amount" v-model="cost" prefix="֏"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Notes</v-list-subheader>
      </v-col>
      <v-col cols="8">
        <v-textarea label="Like how should we cook it?" v-model="process"></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="addDish">
        Add
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
// shot the data https://vuetifyjs.com/en/components/data-tables/slots/#group-header-slot

import { db } from '@/firebase.js'
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { deepUnref } from 'vue-deepunref'

const items = ref(['cucumber', 'chicken', 'potato'])

const name = ref('')
const cost = ref(0)
const ingredients = ref([])
const search = ref('')
const process = ref('')
const time = ref('')
const portion = ref(2)

const addDish = async () => {
  const payload = {
    name: name.value,
    cost: cost.value,
    ingredients: deepUnref(ingredients),
    process: process.value,
    time: time.value,
    portion: portion.value
  }

  try {
    const docRef = await addDoc(collection(db, 'dishes'), payload)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
</script>
