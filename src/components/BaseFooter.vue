<template>
    <v-flex mb-5 xs12 footer>
        <h2 class="headline font-weight-bold "> <span class="extra">Important Links</span></h2>
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
    name: 'basefooter',
    data: () => ({
        importantLinks: [
            {
                text: 'Documentation Frontend',
                href: 'https://github.com/mowolf/gitcoin-frontend',
            },
            {
                text: 'Documentation Backend',
                href: 'https://github.com/konstantinullrich/gitcoin',
            },
        ],
    })
}
</script>

<style>
    .footer {
        position: relative;
        margin-top: 200px !important;
        bottom: 0;
        width: 100%;
        left: 0;
        background: #191719;
        padding: 60px;
        margin: 0;
    }
    @media screen and (max-width: 768px)  {
        .footer {
            position: relative;
            margin-top: 100px;
        }
    }
</style>
