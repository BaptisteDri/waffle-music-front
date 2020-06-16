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
            <router-link to="/biography">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                <span>Biography</span>
            </router-link>
            <router-link to="/news">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
                <span>News</span>
            </router-link>
            <router-link to="/">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                <span>Home</span>
            </router-link>
            <router-link to="/store">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tshirt" class="svg-inline--fa fa-tshirt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>
                <span>Store</span>
            </router-link>
            <router-link to="/contact">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                <span>Contact</span>
            </router-link>
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
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Safari */
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Firefox */
        z-index: 999999;
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
        position: fixed;
        bottom: 0;
        height: 60px;
        width: 100%;
        background: white;
        display: none;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Safari */
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Firefox */
        align-items: center;
        justify-content: space-evenly;
        z-index: 9999;
    }
    nav.mobile a {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;
        text-decoration: none;
    }
    nav.mobile a.active svg {
        color: red;
    }
    nav.mobile span {
        font-size: 0.75em;
    }
    nav.mobile svg {
        display: block;
        height: 20px;
        margin: 0 auto 5px auto;
    }

    @media only screen and (max-width: 650px) {
        nav.desktop {
            display: none;
        }
        nav.mobile {
            display: flex;
        }
    }
</style>