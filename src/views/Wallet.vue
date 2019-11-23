<template>
  <div>
    <BaseHeader></BaseHeader>

  <v-container>

    <v-layout text-center wrap>
      <v-flex mb-4>



          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <h4 class="left"  v-on="on">Wallet: {{wallet.substr(0,50)}}..</h4>
            </template>
            <span>{{wallet}}</span>
          </v-tooltip>


        <h4 class="left">Total coins:  {{money}} G</h4>



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
      // get api
      this.apiUrl = 'http://' + this.node + '/wallet?walletId' + encodeURI(this.wallet);
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

</style>
