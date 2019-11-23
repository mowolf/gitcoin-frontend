<template>
  <v-container>
    <v-layout text-center wrap>

      <v-flex mb-4>
        <div class="Header">
        <p class="subheading font-weight-regular">
          You are connected!
        </p>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Gitcoin!
        </h1>
          <h1>Node: {{node}}</h1>
        </div>
        <v-data-table
                :headers="headers"
                :items="blockchain"
                :items-per-page="5"
                class="elevation-1"
                hide-default-footer
                light
        ></v-data-table>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>

  export default {
    name: 'node',
    components: {},
    data: () => ({
      headers: [
        { text: '# of Transactions', value: 'transactions'},
        { text: 'Timestamp', value: 'formattedTime' },
        { text: 'Creator', value: 'creator' },
        { text: 'Signature', value: 'signature' },
      ],
      node: '',
      blockchain: [],
      apiUrl: '',
      data: '',
    }),
    methods: {
      getApi: async function (apiUrl) {
        let res = await this.axios.get(apiUrl)
        this.blockchain = res.data
        for (var i = 0; i < this.blockchain.length; i++) {
          this.blockchain[i]['transactions'] = this.blockchain[i]['data'].length

          var date = new Date(this.blockchain[i]['timestamp']);
          var day = date.getDate() + "." + date.getMonth() + " " + date.getFullYear();
          var hours = "0" + date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          this.blockchain[i]['formattedTime'] = day + " " + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        }


      }
    },
    created() {
      // get node
      this.node = this.$route.params.node;
      // get api
      this.apiUrl = 'http://' + this.node + '/blockchain/full';
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

</style>
