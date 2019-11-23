<template>
    <v-flex mb-5 xs12 footer>
        <h2 class="headline font-weight-bold">Important Links</h2>
    <v-layout justify-center>
        <a
                v-for="(link, i) in importantLinks"
                :key="i"
                :href="link.href"
                class="subheading mx-3"
                target="_blank"
        >
            {{ link.text }}
        </a>
    </v-layout>
    </v-flex>
</template>

<script>
export default {
    name: 'footer',
    data: () => ({
        importantLinks: [
            {
                text: 'Documentation',
                href: 'https://vuetifyjs.com',
            },
            {
                text: 'Articles',
                href: 'https://medium.com/vuetify',
            },
        ],
    })
}

</script>
