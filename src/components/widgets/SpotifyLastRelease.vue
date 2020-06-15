<template>
    <div id="spotify" @click="goToSpotify()" ref="spotify_release">
        <div class="header"></div>
        <div ref="spotify_content" class="container">
            <div class="img-container">
                <prismic-image :field="fields.img" />
            </div>
            <div class="infos">
                <span class="title" ref="spotify_title">
                    <prismic-rich-text :field="fields.title" />
                </span>
                <span class="authors" ref="spotify_p">
                    <prismic-rich-text :field="fields.authors" />
                </span>
            </div>
        </div>
        <div class="footer">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="spotify"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
            >
                <path
                fill="currentColor"
                d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
    import { TimelineLite, Power4 } from 'gsap'

    export default {
        name: 'SpotifyLastRelease',
        data() {
            return {
                fields: {
                    title: null,
                    authors: null,
                    link: null,
                    img: null
                }
            }
        },
        methods: {
            getContent() {
                this.$prismic.client.getSingle('homepage')
                    .then(document => {
                        this.fields.title = document.data.latest_song_name,
                        this.fields.authors = document.data.latest_song_authors
                        this.fields.link = document.data.latest_song_link,
                        this.fields.img = document.data.latest_song_img1
                    })
                    .then(() => {
                        const { 
                            spotify_release,
                            spotify_content,
                            spotify_title,
                            spotify_p
                        } = this.$refs
                        const timeline = new TimelineLite()

                        timeline.to(spotify_release, 0, {
                            x: +500
                        })
                        timeline.to(spotify_release, 0.8, {
                            x: 0,
                            ease: Power4.easeOut
                        })
                        timeline.to(spotify_content, 0.3, {
                            opacity: 1
                        }, '0.15')
                        timeline.to(spotify_title, 0, {
                            y: +50
                        }, '0')
                        timeline.to(spotify_title, 0.5, {
                            y: 0,
                            ease: Power4.easeInOut
                        }, '0.3')
                        timeline.to(spotify_p, 0, {
                            y: +50
                        }, '0')
                        timeline.to(spotify_p, 0.5, {
                            y: 0,
                            ease: Power4.easeInOut
                        }, '0.37')
                    })
            },
            goToSpotify() {
                if(this.fields.link.url) {
                    window.open(this.fields.link.url, '_blank')
                }
            }
        },
        created() {
            this.getContent()
        }
    }
</script>

<style scoped>
    div#spotify {
        width: 500px;
        height: 50%;
        background-color: #5F2B7E;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
    div#spotify:hover .container {
        transition: 0.3s;
        transform: scale(1.1);
    }
    .container {
        transition: 0.3s;
        opacity: 0;
    }
    .img-container {
        width: 250px;
        height: 250px;
        overflow: hidden;
        border-radius: 20px;
        margin: 0 auto;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Safari */
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Firefox */
    }
    .img-container img {
        width: 100%;
        height: 100%;
    }
    .infos {
        margin: 20px auto 0 auto;
        text-align: center;
        max-width: 450px;
    }
    .title {
        color: #FFFFFF;
        font-size: 1.6em;
        font-weight: 700;
        display: block;
    }
    .authors {
        display: block;
        color: rgba(255, 255, 255, 0.3);
    }
    .header,
    .footer {
        height: 30px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
    }
    .footer svg {
        height: 20px;
        color: #FFFFFF;
    }
    @media only screen and (max-width: 1135px) {
        div#spotify {
            width: 400px;
        }
    }
    @media only screen and (max-width: 960px) {
        div#spotify {
            width: 50%;
            height: 150px;
            flex-direction: row;
            position: relative;
        }
        div#spotify:hover .container {
            transform: none;
        }
        .header {
            display: none;
        }
        .container {
            display: flex;
            width: 100%;
        }
        .img-container {
            border-radius: 0;
            width: 150px;
            height: 150px;
            box-shadow: none;
        }
        .infos {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            width: calc(100% - 170px);
        }
        .title {
            font-size: 1.3em;
        }
        .footer {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
    @media only screen and (max-width: 650px) {
        div#spotify {
            height: 70px;
            width: calc(50% - 30px);
            margin: 15px;
            border-radius: 50px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Safari */
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Firefox */
        }
        .img-container {
            height: 70px;
            width: 60px;
            display: flex;
            align-items: center;
            margin: 0 0 0 10px;
        }
        .img-container img {
            width: 55px;
            height: 55px;
            border-radius: 50px;
        }
        .infos {
            width: calc(100% - 130px);
        }
        .title {
            font-size: 0.7em;
        }
        .authors {
            display: none;
        }
        .footer {
            height: fit-content;
            padding-bottom: 15px;
            padding-right: 20px;
        }
        .footer svg {
            height: 10px;
            color: #FFFFFF;
        }
    }
</style>