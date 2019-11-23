<template>
    <v-layout text-center wrap>
    <div class="Header">

        <p class="subheading font-weight-regular connected">
            You are connected!
        </p>

        <h1>Node: <span class="extra">{{node}}</span></h1>

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
 }

.connected {
    color: #e7e6e9;

}

</style>
