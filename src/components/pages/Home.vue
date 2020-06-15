<template>
    <div id="home-page">
        <main>
            <img src="../../assets/waffle_logo.png" alt="White waffle logo">
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
        name: 'Home',
        components: {
            SpotifyLastRelease,
            YoutubeLastRelease,
            AllLinks
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