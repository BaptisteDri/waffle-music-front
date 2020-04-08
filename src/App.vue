<template>
    <main id="app">
        <navbar></navbar>
        <router-view></router-view>
    </main>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    
    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    html {
        background-color: red;
    }

    #app {
        font-family: Hind madurai, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }
</style>
