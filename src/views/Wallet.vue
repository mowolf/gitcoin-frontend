<template>
  <div>
    <BaseHeader></BaseHeader>

  <v-container class="dark">

    <h1 class="">Total coins:  <span class="extra"> {{money}} G</span></h1>
    <br>
    <v-layout text-center wrap>
      <v-flex mb-4>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <h4 class="left"  v-on="on">Wallet: <span class="extra">{{wallet.substr(0,50)}}..</span></h4>
            </template>
            <span>{{wallet}}</span>
          </v-tooltip>
      </v-flex>
    </v-layout>

  </v-container>
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader";
  export default {
    name: 'wallet',
    components: {BaseHeader},
    data: () => ({
      node: '',
      wallet: '',
      apiUrl: '',
      money: 0,
    }),
    methods: {
      getApi: async function (apiUrl) {
        let res = await this.axios.get(apiUrl)
        this.money = res.data.funds
      }
    },
    created() {

      this.wallet = this.$route.params.wallet.replace(/-/g, '/');
      this.node = this.$route.params.node
      // get api
      this.wallet = encodeURIComponent(this.wallet);
      this.apiUrl = 'http://' + this.node + '/wallet?walletId=' + this.wallet;

      this.getApi(this.apiUrl)
    }
  }
</script>

<style>
  .subheading {
    margin-top: 1em;
  }
  .elevation-1 {
    margin-top: 3em;
  }

  .left {
    text-align: left;
  }

  .dark {
    background-color: #191719;
    padding: 3em;
  }

</style>
