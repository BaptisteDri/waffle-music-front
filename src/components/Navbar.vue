<template>
    <nav >
        <div class="logo">
            <router-link to="/">
                <img src="./../assets/logo.png" alt="Waffle logo">
            </router-link>
        </div>
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
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
        -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Safari */
        -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Firefox */
        z-index: +1;
    }
    nav .logo {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        min-height: fit-content;
    }
    .logo img {
        margin-top: 45px;
        width: 55px;
    }
    nav .links {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-height: fit-content;
    }
    nav .links a {
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        font-size: 1em;
        text-decoration: none;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg); /* Safari */
        -moz-transform: rotate(-90deg); /* Firefox */
        -ms-transform: rotate(-90deg); /* IE */
        -o-transform: rotate(-90deg); /* Opera */
        transition: 0.3s;
        text-transform: uppercase;
    }
    nav .links *:hover {
        transform: rotate(0deg);
        width: 100px;
        -webkit-transform: rotate(0deg); /* Safari */
        -moz-transform: rotate(0deg); /* Firefox */
        -ms-transform: rotate(0deg); /* IE */
        -o-transform: rotate(0deg); /* Opera */
        cursor: pointer;
        transition: 0.3s;
        text-decoration: underline;
    }
    nav .navbar-footer {
        height: 15%;
    }
</style>