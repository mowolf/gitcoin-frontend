<template>
  <div>
    <BaseHeader></BaseHeader>

  <v-container>
    <v-layout text-center wrap>

      <v-flex mb-4>
        <v-data-table
                :headers="headers"
                :items="blockchain"
                :items-per-page="5"
                class="elevation-1"
                dark
        >

          <template v-slot:item.transactions="{ item }">
              <button v-on:click="showBlock(item)">
                <b>{{item.transactions}}</b>
              </button>
          </template>

          <template v-slot:item.creator_short="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <router-link :to=" node +'/wallet/'+ encodeURI(item.creator).replace(/\//g, '-')">
                <span v-on="on">{{item.creator_short}}</span>
              </router-link>
            </template>
            <span>{{item.creator}}</span>
          </v-tooltip>
        </template>

          <template v-slot:item.signature_short="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">{{item.signature_short}}</span>
            </template>
            <span>{{item.signature}}</span>
          </v-tooltip>
        </template>
        </v-data-table>


        <div v-if="blockData == ''" class="info_">
<p>
  Click on the <b># of Transactions</b> to explore the contents
</p>        </div>

        <v-data-table div v-if="blockData != ''"
                :headers="blockHeaders"
                :items="blockData.data"
                :items-per-page="5"
                class="elevation-1"
                dark
        >

          <template v-slot:item.fromAddress="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.fromAddress" target="_blank">
                <span v-on="on">{{item.fromAddress}}</span>
              </a>
            </template>
            <span>This takes you to the pull request.</span>
          </v-tooltip>
        </template>


          <template v-slot:item.toAddress="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <router-link :to=" node + 'wallet/'+ encodeURI(item.toAddress).replace(/\//g, '-')">
                  <span v-on="on">{{item.toAddress.substring(0,20)}}...</span>
                </router-link>
              </template>
              <span>{{item.toAddress}}</span>
            </v-tooltip>
          </template>

        </v-data-table>

      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";

  export default {
    name: 'node',
    components: {BaseHeader},
    data: () => ({
      headers: [
        { text: '# of Transactions', value: 'transactions'},
        { text: 'Timestamp', value: 'formattedTime' },
        { text: 'Creator', value: 'creator_short' },
        { text: 'Signature', value: 'signature_short' },
      ],
      blockHeaders: [
        { text: 'Pull request' , value: 'fromAddress'},
        { text: 'to Address', value: 'toAddress' },
      ],
      node: '',
      blockchain: [],
      apiUrl: '',
      data: '',
      blockData: "",
    }),
    methods: {
      getApi: async function (apiUrl) {
        let res = await this.axios.get(apiUrl)
        this.blockchain = res.data
        for (var i = 0; i < this.blockchain.length; i++) {

          this.blockchain[i]['transactions'] = this.blockchain[i]['data'].length

          this.blockchain[i]['creator_short'] = this.blockchain[i]['creator'].substring(0, 20) + "..."
          this.blockchain[i]['signature_short'] = this.blockchain[i]['signature'].substring(0, 20) + "..."

          var date = new Date(this.blockchain[i]['timestamp']);
          var day = date.getDate() + "." + date.getMonth() + " " + date.getFullYear();
          var hours = "0" + date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          this.blockchain[i]['formattedTime'] = day + " " + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        }


      },
      showBlock: function(item) {
        this.blockData = item
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
  .elevation-1 {
    margin-top: 3em;
    padding: 1em;
    border: 5px solid white;
  }
.info_ {
  margin-top: 3em;
  padding: 2em;
  background-color: rgb(66,66,66);
}

</style>
