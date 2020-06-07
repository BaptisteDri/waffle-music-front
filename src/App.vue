<template>
    <main id="app">
        <navbar></navbar>
        <div id="content">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    import Navbar from './components/Navbar'
    
    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: Hind madurai, Helvetica, Arial, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    #content {
        height: 100vh;
        width: calc(100vw - 100px); /* navbar width */
        overflow: hidden;
    }
</style>
