<template>
    <div id="home-page">
        <main>
            <img src="../../assets/waffle_logo.png" alt="White waffle logo">
            <div class="pictures">
                <div class="pic1-container" ref="pic1">
                    <div></div>
                </div>
                <div class="pic2-container" ref="pic2">
                    <div></div>
                </div>
            </div>
            <div class="links">
                <all-links />
            </div>
        </main>
        <aside>
            <spotify-last-release></spotify-last-release>
            <youtube-last-release></youtube-last-release>
        </aside>
    </div>
</template>

<script>
    import SpotifyLastRelease from '../widgets/SpotifyLastRelease'
    import YoutubeLastRelease from '../widgets/YoutubeLastRelease'
    import AllLinks from '../widgets/AllLinks'
    
    import { TimelineLite, Power4 } from 'gsap'

    export default {
        name: 'Home',
        components: {
            SpotifyLastRelease,
            YoutubeLastRelease,
            AllLinks
        },
        mounted() {
            const { pic1, pic2 } = this.$refs
            const timeline = new TimelineLite()

            timeline.to(pic1, 0.8, {
                width: '60%',
                ease: Power4.easeInOut
            }, '0')
            timeline.to(pic2, 0.8, {
                height: '70%',
                ease: Power4.easeInOut
            }, '0.3')
        }
    }
</script>

<style scoped>
    div#home-page {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
    }
    main {
        width: calc(100% - 500px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div.links {
        width: fit-content;
        margin: 0 auto 50px auto;
    }
    img {
        margin: 40px 0 0 40px;
        display: block;
        width: 300px;
    }

    div.pictures {
        position: relative;
        margin: 0 auto;
        height: 800px;
        width: 700px;
        max-height: 55%;
        max-width: 90%;
        overflow: hidden;
    }
    div.pic1-container {
        width: 0;
        height: 70%;
        margin-top: 30%;
        position: absolute;
        bottom: 0;
        left: 0;
        overflow: hidden;
        border-radius: 5px;
    }
    div.pic1-container div {
        background-image: url('/lp_utc.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    div.pic2-container {
        border-radius: 5px;
        width: 60%;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
    }
    div.pic2-container div {
        background-image: url('/lp_utc_2.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 1135px) {
        main {
            width: calc(100% - 400px);
        }
    }
    @media only screen and (max-width: 960px) {
        main {
            width: 100%;
            height: calc(100% - 150px);
        }
        aside {
            display: flex;
            flex-direction: row;
            height: 150px;
        }
        div#home-page {
            flex-direction: column;
            height: 100vh;
        }
    }
    @media only screen and (max-width: 650px) {
        div#home-page {
            height: 100%;
        }
        main {
            min-height: calc(100% - 160px);
            align-items: center;
        }
        img {
            margin-left: 0;
        }
        aside {
            position: fixed;
            bottom: 60px;
            width: 100%;
            height: 100px;
        }
    }
</style>