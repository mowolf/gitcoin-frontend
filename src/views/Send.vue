<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-5 xs12>

        <v-layout justify-center>
          <h1 class="input input_">
            To Address
            <br>
            <input class="input_" v-model="toAddress" placeholder="enter address">
          </h1>
        </v-layout>
        <br>
        <v-layout justify-center>
          <h1 class="input">
            Amount
            <br>
            <input class="input_" v-model="amount" placeholder="0 G">
          </h1>
        </v-layout>
        <br>

        <v-layout justify-center class="key">
          <h1 class="input input_">
          Key
            <br>
            <v-textarea
                    v-model="secretKey"
                    label="paste your private key here"
                    full-width
                    single-line
                    color="red"
            ></v-textarea>
          </h1>

        </v-layout>
        <br>
        <div>
          <v-btn @click="sendMoney"> Send </v-btn>
          {{response}}
        </div>
        <br>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    components: {},
    data: () => ({
      toAddress: '',
      amount: '',
      secretKey: '',
      response: '',
      apiUrl: ''
    }),
    methods: {
      sendData: async function (apiUrl, payload) {
        await this.axios.put(apiUrl, payload)

      },
      sendMoney: function () {
        let payload = {
          "toAddress": this.toAddress.trim(),
          "amount": parseInt(this.amount.trim()),
          "secretKey": this.secretKey.trim()
        }
        this.sendData(this.apiUrl, payload)

      }
    },
    created() {
      this.node = this.$route.params.node
      this.apiUrl = 'http://' + this.node + '/transaction';
    }
  };


</script>

<style>
  .input {
    padding: 10px;
    border-style: solid;
    border-radius: 5px;
  }
  .input_ {
    width: 100%
  }
  .text-center {
    margin-top: 3em;
  }
  .key {
    color: red;
  }

</style>
