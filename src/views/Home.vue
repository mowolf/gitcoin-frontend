<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
                :src="require('../assets/logo.png')"
                class="my-3"
                contain
                height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Gitcoin!
        </h1>
        <p class="subheading font-weight-regular">
          The <b class="extra">Cryptocurrency</b> to support Open Source Contributors.
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <v-layout justify-center>
          <h1 class="">
            <input class="search-bar" v-model="node" placeholder="Enter your gitcoin node:">
          </h1>
        </v-layout>
        <v-btn  v-bind:href="'node/' + node" > Connect </v-btn>
      </v-flex>

    <BaseFooter></BaseFooter>

    </v-layout>
  </v-container>
</template>

<script>
  import BaseFooter from "../components/BaseFooter";

  export default {
    name: 'Home',
    components: {BaseFooter},
    data: () => ({
      node: '',
    }),
  };
</script>

<style>
  .search-bar {
    padding: 10px;
    border-style: solid;
    border-radius: 5px;
  }
  .text-center {
    margin-top: 3em;
  }
</style>
