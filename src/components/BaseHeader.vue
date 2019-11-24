<template>
    <v-layout text-center wrap>
    <div class="Header">
        <p class="subheading font-weight-regular connected">
            You are connected!
        </p>
        <h1>Node: <span class="extra">{{node}}</span></h1>
        <v-btn class="l-button" href="/">Select other node</v-btn>
    </div>
    </v-layout>
</template>

<script>
    export default {
        name: 'baseheader',
        data: () => ({
            node: '',
        }),
        created() {
            // get node
            this.node = this.$route.params.node;
        }
    }
</script>

<style>
 .Header{
     margin-bottom: 2em;
     background-color: #191719;
     width: 100%;
     padding-bottom: 2em;
     color: white;
     top: 0;
     padding-top: 1em;
 }

 .text-center {
     margin-top: 0 !important;
 }
.connected {
    color: #e7e6e9;

}
 .r-button {
     background-color: #232225 !important;
     position: absolute;
     right: 1em;
     top: 0;
 }
    .l-button {
        position: absolute;
        left: 1em;
        top: 0;
        background-color: #232225 !important;
    }

    @media screen and (max-width: 768px)  {
        .l-button {
            left: 0;
            right: 0;
            top: 0;
        }
        .r-button {
            left: 0;
            right: 0;
            top: 8em;
        }
    }

</style>
