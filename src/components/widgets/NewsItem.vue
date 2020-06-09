<template>
    <div ref="news_item" class="news-item">
        <a href="">
            <div class="img"></div>
            <div class="title">Rubayne Teams Up With Stella And Waffle For Uplifting Cut “Keep It Up”</div>
        </a>
    </div>
</template>

<script>
    import { TimelineLite, Power4 } from 'gsap'

    export default {
        name: 'NewsItem',
        props: {
            i: Number
        },
        mounted() {
            const { news_item } = this.$refs

            const timeline = new TimelineLite()

            const heightTime = this.i * 0.1
            const boxShadowTime = this.i * 0.2

            timeline.to(news_item, 0.75, {
                height: 400,
                ease: Power4.ease
            }, heightTime)
            timeline.to(news_item, 0.8, {
                boxShadow: 'inset -8px 8px 16px #583a6a, inset 8px -8px 16px #764e90',
                ease: Power4.ease
            }, boxShadowTime)
        }
    }
</script>

<style scoped>
    .news-item {
        width: 300px; height: 0;
        border-radius: 50px;
        overflow: hidden;
        transition: 0.3s;
        margin: 0 20px 40px 20px;
    }
    .news-item:hover {
        box-shadow: none !important;
        transition: 0.3s;
    }

    .news-item a {
        width: 300px; height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 1.2em;
    }
    .news-item .img {
        background: red;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    .news-item .title {
        max-width: calc(100% - 30px);
        margin: 0 auto;
        text-align: center;
    }
</style>