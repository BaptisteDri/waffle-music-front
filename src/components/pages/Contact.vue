<template>
    <div id="contact-page">
        <main>
            <img src="../../assets/waffle_logo.png" alt="White waffle logo">
            <div class="contact">
                <p>
                    <span>Contact us at</span>
                    <a href="mailto:contact@waffle-music.com">CONTACT@WAFFLE-MUSIC.COM</a>
                </p>
                <p>
                    <span>or send us demos at</span>
                    <a href="mailto:demo@waffle-music.com">DEMO@WAFFLE-MUSIC.COM</a>
                </p>
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
    
    export default {
        name: 'Contact',
        components: {
            SpotifyLastRelease,
            YoutubeLastRelease,
            AllLinks
        }
    }
</script>

<style scoped>
    div#contact-page {
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
        background-image: url('/bg_single_man_cropped-min.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
    div.contact {
        margin: 0 auto;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    div.contact span {
        font-size: 1.2em;
        text-align: center;
        display: block;
        margin-bottom: 10px;
        color: #FFFFFF;
    }
    div.contact a {
        display: block;
        font-size: 1.5em;
        color: #FFFFFF;
        text-decoration: none;
        font-weight: bold;
        transition: 0.3s;
    }
    div.contact a:hover {
        transition: 0.3s;
        transform: scale(1.2);
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
        div#contact-page {
            flex-direction: column;
            height: 100vh;
        }
    }
    @media only screen and (max-width: 650px) {
        div#contact-page {
            height: 100%;
        }
        main {
            min-height: calc(100% - 60px);
            align-items: center;
        }
        .links {
            padding-bottom: 90px;
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
        div.contact a {
            font-size: 1.3em;
        }
    }
</style>