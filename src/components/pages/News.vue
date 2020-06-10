<template>
    <div id="news-page">
        <main>
            <div class="header">
                <img src="../../assets/waffle_logo.png" alt="White waffle logo">
                <div class="links">
                    <all-links color="white" size="small" />
                </div>
            </div>
            <div class="content">
                <h1>News</h1>
                <div class="news-container">
                    <div v-bind:key="i" v-for="(news_item, i) in fields.news">
                        <news-item :i="i" :news_item="news_item" />
                    </div>
                </div>
            </div>
        </main>
        <aside>
            <spotify-last-release />
            <youtube-last-release />
        </aside>
    </div>
</template>

<script>
    import SpotifyLastRelease from '../widgets/SpotifyLastRelease'
    import YoutubeLastRelease from '../widgets/YoutubeLastRelease'
    import AllLinks from '../widgets/AllLinks'
    import NewsItem from '../widgets/NewsItem'

    export default {
        name: 'News',
        components: {
            SpotifyLastRelease,
            YoutubeLastRelease,
            AllLinks,
            NewsItem
        },
        data() {
            return {
                fields: {
                    news: []
                }
            }
        },
        methods: {
            getContent() {
                this.$prismic.client.query('').then((response) => {
                    this.fields.news = response.results[0].data.news_list
                })
            }
        },
        created() {
            this.getContent()
        }
    }
</script>

<style scoped>
    div#news-page {
        display: flex;
        height: 100%;
        background: #67447D;
    }
    main {
        width: calc(100% - 500px);
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    div.links {
        width: fit-content;
        margin-left: 40px;
    }
    img {
        margin-left: 40px;
        display: block;
        width: 300px;
    }
    main .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 40px;
        margin-bottom: 40px;
    }
    .content {
        padding: 0 40px;
    }
    .content h1 {
        margin-bottom: 20px;
        font-size: 2em;
        color: #FFFFFF;
    }
    .content .news-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
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
        div#news-page {
            flex-direction: column;
            height: 100vh;
        }
    }
    @media only screen and (max-width: 650px) {
        div#news-page {
            height: 100%;
        }
        main {
            height: calc(100% - 100px);
            align-items: center;
        }
        aside {
            height: 100px;
        }
    }   
</style>
