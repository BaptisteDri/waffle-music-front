<template>
    <nav>
        <div class="logo"></div>
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/biography">Biography</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/store">Store</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
        <div class="navbar-footer"></div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
    nav {
        width: 100px;
        height: 100vh;
        background-color: #FFF;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    nav .logo {
        height: 20%;
    }
    nav .links {
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    nav .links * {
        color: #000000;
        font-size: 1.2em;
        text-decoration: none;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg); /* Safari */
        -moz-transform: rotate(-90deg); /* Firefox */
        -ms-transform: rotate(-90deg); /* IE */
        -o-transform: rotate(-90deg); /* Opera */
        transition: 0.3s;
    }
    nav .links *:hover {
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
    }
    nav .navbar-footer {
        height: 20%;
    }
</style>