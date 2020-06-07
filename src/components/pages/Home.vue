<template>
    <div id="home-page">
        <main>
            <img src="../../assets/waffle_logo.png" alt="White waffle logo">
            <div class="links">
                <all-links></all-links>
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
        background-color: #67447D;
    }
    main {
        background-image: url('/bg_couple_cropped-min.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: calc(100% - 500px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px;
    }
    div.links {
        width: fit-content;
        margin: 0 auto 2% auto;
    }
    img {
        width: 300px;
    }
</style>