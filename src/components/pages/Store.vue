<template>
    <div id="store-page">
        <div class="store-img red_front"></div>
        <div class="store-img blue_front"></div>
        <div class="store-img white_front"></div>
        <div class="store-img blue_front_2"></div>
        <div class="store-img black_front"></div>
        <div class="store-img blue_back"></div>
        <div ref="store_msg" class="store-msg">
            <p>Store out of stock</p>
            <all-links />
        </div>
    </div>
</template>

<script>
    import { TimelineLite, Power4 } from 'gsap'
    import AllLinks from '../widgets/AllLinks'

    export default {
        name: 'Store',
        components: {
            AllLinks
        },
        mounted() {
            const {
                store_msg
            } = this.$refs
            const timeline = new TimelineLite()

            timeline.to(store_msg, 1.2, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.1')
        }
    }
</script>

<style scoped>
    .store-msg {
        position: absolute;
        height: 100%; width: 100%;
        opacity: 0;
        background-color: rgba(0,0,0,0.5);
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .store-msg > p {
        font-size: 3em;
        margin-bottom: 20px;
    }
    #store-page {
        width: 100%; height: 100%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
    }
    .store-img {
        width: calc(100% / 3);
        height: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .black_front {
        background-image: url('/store/cap_black_front.jpeg');
    }
    .blue_back {
        background-image: url('/store/cap_blue_back.jpeg');
    }
    .blue_front {
        background-image: url('/store/cap_blue_front.jpeg');
    }
    .blue_front_2 {
        background-image: url('/store/cap_blue_front_2.jpeg');
    }
    .red_front {
        background-image: url('/store/cap_red_front.jpeg');
    }
    .white_front {
        background-image: url('/store/cap_white_front.jpg');
    }

    @media only screen and (max-width: 1135px) {
        .store-img {
            width: 50%;
            height: calc(100% / 3);
        }
        .store-msg > p {
            font-size: 2em;
        }
        .store-msg > section {
            padding: 0 20px;
        }
    }
    @media only screen and (max-width: 650px) {
        #store-page {
            height: calc(100% - 60px);
        }
    }
</style>