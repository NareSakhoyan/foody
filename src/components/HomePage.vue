<template>
  <v-container fluid>

    <v-row>
       
      <v-col cols="4">
        <v-list-subheader>What's the name?</v-list-subheader>
      </v-col>

      <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="name"
            v-model="name"
            placeholder="Yummy"
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>How much does it cost?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Amount"
          v-model="cost"
          prefix="֏"
        ></v-text-field>
      </v-col>
    </v-row>

<!-- https://codepen.io/kaelwd/pen/ZEYWvMQ -->
    <v-row>
      <v-col cols="4">
        <v-list-subheader>Ingredients</v-list-subheader>
      </v-col>

      <v-col>
        <v-chip-group
        v-model="selection"
        selected-class="text-deep-purple-accent-4"
        mandatory
      >
        <v-chip
          v-for="ingr in ingredients"
          :key="ingr.name"
          :value="ingr.name"
          class="ma-2"
          size="medium"
          closable
          close-icon="mdi-delete"
          color="teal"
          variant="outlined"
          label
        >
          <template v-slot:prepend>
            <v-avatar
              class="green-darken-4"
            >
              {{ingr.amount}}
            </v-avatar>
          </template>
          {{ ingr.name }}
        </v-chip>
        <v-chip
          @click="addIngredient"
          value="add"
          > + 
        </v-chip>
      </v-chip-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>How much time is it gonna take?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="time"
          v-model="time"
          type="time"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>How should we cook it?</v-list-subheader>
      </v-col>
      <v-col cols="8">
        <v-textarea 
          label="Please metnion the details, it's important"
          v-model="process"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>For how many people?</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Portion"
          v-model="portion"
          suffix="per person"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="addDish"
      >
        Add
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
// shot the data https://vuetifyjs.com/en/components/data-tables/slots/#group-header-slot

import { db } from '@/firebase.js'
import { ref, onMounted } from 'vue'
import { collection, addDoc } from "firebase/firestore"; 
import { deepUnref } from 'vue-deepunref';

const name = ref('')
const cost = ref(0)
const ingredients = ref([
  {
    'name':'cucumber',
    'amount': 2
  },
  {
    'name':'chicken',
    'amount': 2
  },
  {
    'name':'pasta',
    'amount': 1
  }])
const process = ref('')
const time = ref('')
const portion = ref(2)

const addIngredient = () => {
  ingredients.value.push('')
}

const addDish = async () => {
  const payload = {
      name: name.value,
      cost: cost.value,
      ingredients: deepUnref(ingredients),
      process: process.value,
      time: time.value,
      portion: portion.value,
    }
  console.log(payload);
  try {
    const docRef = await addDoc(collection(db, "dishes"), payload);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

onMounted(() => {
  console.log('go the database: ', db);
})
</script>