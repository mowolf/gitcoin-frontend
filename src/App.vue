<template>
  <v-app id="app">
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
  /* unvisited link */
  a:link {
    color: white !important;
  }

  /* visited link */
  a:visited {
    color: white !important;
  }

  /* mouse over link */
  a:hover {
    color: red !important;
  }

  /* selected link */
  a:active {
    color: red !important;
  }
    #app {
        background-color: #232225;
        color: white;
    }
  .extra {
      color: white;
      background-color: red;
      padding-left: 0.3em;
      padding-right: 0.3em;
  }
  .v-btn {
      cursor: pointer !important;
      text-decoration: none !important;
      color: white !important;
      margin-top: 22px !important;
      font-size: 16px !important;
      background-color: black !important;
  }
</style>
