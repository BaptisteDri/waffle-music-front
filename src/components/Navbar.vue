<template>
    <div>    
        <nav ref="navbar" class="desktop">
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
        <nav class="mobile">
            <div class="mb-logo">
                <router-link to="/">
                    <img src="./../assets/logo.png" alt="Waffle logo">
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    import { TimelineLite, Power4 } from 'gsap'
    
    export default {
        name: 'Navbar',
        mounted() {
            const { navbar } = this.$refs
            const timeline = new TimelineLite()

            timeline.to(navbar, 0, {
                x: -100
            })
            timeline.to(navbar, 1, {
                x: 0,
                ease: Power4.easeOut
            })
        }
    }
</script>

<style>
    nav.desktop {
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
    nav.desktop .logo {
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
    nav.desktop .links {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-height: fit-content;
    }
    nav.desktop .links a {
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
    nav.desktop .links *:hover {
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
    nav.desktop .navbar-footer {
        height: 15%;
    }

    nav.mobile {
        height: 60px;
        background: white;
        display: none;
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
        -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Safari */
        -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Firefox */
        position: relative;
        z-index: 9999;
    }
    nav.mobile .mb-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    nav.mobile .mb-logo img {
        height: 40px;
    }

    @media only screen and (max-width: 650px) {
        nav.desktop {
            display: none;
        }
        nav.mobile {
            display: block;
        }
    }
</style>