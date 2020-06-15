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

    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: #e1e1e1;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #000000;
    }
    ::-webkit-scrollbar-track {
        background: #666666;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #666666;
    }
    ::-webkit-scrollbar-track:active {
        background: #333333;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
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
        background-image: url('/bg_couple_cropped-min.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

    #content {
        height: 100vh;
        width: calc(100vw - 100px); /* navbar width */
        overflow: hidden;
    }

    @media only screen and (max-width: 650px) {
        html, body {
            height: 100%;
            background-color: #5F2B7E;
        }
        #app {
            flex-direction: column;
            height: 100%;
        }
        #content {
            width: 100%;
            height: 100%;
        }
    }
</style>
