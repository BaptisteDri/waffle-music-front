<template>
    <div id="youtube" @click="goToYoutube()">
        <div class="header"></div>
        <div class="container">
            <div class="img-container">
                <prismic-image :field="fields.img" />
            </div>
            <div class="infos">
                <span class="title">
                    <prismic-rich-text :field="fields.title" />
                </span>
                <span class="authors">
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
            },
            goToYoutube() {
                window.open(this.fields.link.url, '_blank')
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
    }
    .img-container {
        width: 250px;
        height: 250px;
        overflow: hidden;
        border-radius: 20px;
        margin: 0 auto;
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
        -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Safari */
        -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4); /* Firefox */
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
    #youtube .header,
    #youtube .footer {
        height: 30px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
    }
    .footer svg {
        height: 20px;
        color: #FFFFFF;
    }
</style>