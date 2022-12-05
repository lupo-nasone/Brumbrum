<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <v-app>
    <v-main>
      <div class="header">
        <router-link to="/" id="palle">MOTO</router-link>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
    .header{
        height: 5vh;
        background-color: #181818;
        text-align: center;
        padding: 20px;
    }
    .header h1{
        text-align: center;
        padding-top: 30px;
    }
    #palle{
      color: white;
      text-decoration: none;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;
      text-align: center;
    }
</style>
