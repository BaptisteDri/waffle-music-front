<template>
    <div id="youtube" @click="goToYoutube()" ref="youtube_release">
        <div class="header"></div>
        <div ref="youtube_content" class="container">
            <div class="img-container">
                <prismic-image :field="fields.img" />
            </div>
            <div class="infos">
                <span class="title" ref="youtube_title">
                    <prismic-rich-text :field="fields.title" />
                </span>
                <span class="authors" ref="youtube_p">
                    <prismic-rich-text :field="fields.authors" />
                </span>
            </div>
        </div>
        <div class="footer">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
            >
                <path
                fill="currentColor"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
    import { TimelineLite, Power4 } from 'gsap'

    export default {
        name: 'YoutubeLastRelease',
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
                        this.fields.title = document.data.latest_yt_name,
                        this.fields.authors = document.data.latest_yt_authors
                        this.fields.link = document.data.latest_yt_link,
                        this.fields.img = document.data.latest_yt_img1
                    })
                    .then(() => {
                        const { 
                            youtube_release,
                            youtube_content,
                            youtube_title,
                            youtube_p
                        } = this.$refs
                        const timeline = new TimelineLite()

                        timeline.to(youtube_release, 0, {
                            x: +500
                        })
                        timeline.to(youtube_release, 0.8, {
                            x: 0,
                            ease: Power4.easeOut
                        }, '+=0.1')
                        timeline.to(youtube_content, 0.3, {
                            opacity: 1
                        }, '0.15')
                        timeline.to(youtube_title, 0, {
                            y: +50
                        }, '0')
                        timeline.to(youtube_title, 0.5, {
                            y: 0,
                            ease: Power4.easeInOut
                        }, '0.31')
                        timeline.to(youtube_p, 0, {
                            y: +50
                        }, '0')
                        timeline.to(youtube_p, 0.5, {
                            y: 0,
                            ease: Power4.easeInOut
                        }, '0.38')
                    })
            },
            goToYoutube() {
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
    div#youtube {
        width: 500px;
        height: 50%;
        background-color: #2C2A74;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
    div#youtube:hover .container {
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
        display: block;
        color: #FFFFFF;
        font-size: 1.6em;
        font-weight: 700;
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
        div#youtube {
            width: 400px;
        }
    }
    @media only screen and (max-width: 960px) {
        div#youtube {
            width: 50%;
            height: 150px;
            flex-direction: row;
            position: relative;
        }
        div#youtube:hover .container {
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
        div#youtube {
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