<script setup>
</script>

<template>
    <v-app>
    <v-main>
      <div class="header">
        <h1>MOTO</h1>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
    .header{
        height: 10vh;
        background-color: #181818;
    }
    .header h1{
        text-align: center;
        padding-top: 30px;
    }
</style>
