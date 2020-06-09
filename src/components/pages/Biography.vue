<template>
    <div id="bio-page">
        <main>
            <div class="header">
                <img src="../../assets/waffle_logo_dark.png" alt="White waffle logo">
                <div class="links">
                    <all-links color="black" size="small" />
                </div>
            </div>
            <div class="content">
                <h1>Biography</h1>
                <p ref="bio_p1">
                    <span>Self-taught musician, sound explorer, show creator</span>, Théo Le Roy alias Waffle, expresses his imagination and his sensitivity through his songs and his multiple collaborations. Portrait of a prolific artist in constant evolution.
                </p>
                <p ref="bio_p2">
                    <span>There was already the young self-taught guitarist</span>, who, with his group of friends participated in several festivals. It is in the experience of the stage and the meeting with the different audiences that Théo flourishes. His most memorable memory was notably during the Emerganza Festival, a real springboard for his rock group of the time: "The final took place on the stage of Bataclan and it was the best concert I did in all my life. I remember perfectly the sound of the bass and the kick that started our live ”. Between group composition and co-writing, Théo gradually builds the foundations of his artistic universe.
                </p>
                <p ref="bio_p3">
                    <span>But it was solo that Théo became "Waffle"</span>, and that he then individualized as an artist. A choice that leaves nothing to chance since Theo has always had a sense of spectacle and the composition of his public character goes the same. Very admiring of the iconic Matthieu Chedid -M-, he first represents himself with the letter "W" which interests him visually - a gesture which also seems to be a kind of homage to his idol, the W being an M reversed. Waffle is then its emblem, a name which reflects its own and unique identity with a hint of derision: "I liked very much to bear a funny name and easily identifiable by others".
                </p>
                <p ref="bio_p4">
                    <span>In a musicality that widens at the crossroads of all the arts</span>, genres, and possible structures, Waffle is above all an explorer of sound. His passion for film music - which he discovered in particular during his career at the ISTS school in Paris - is reflected in multiple projects : his collaboration with the youtuber Akim Omiri (for whom he creates more than one ten songs), but also his EP Alone released in 2018. Although the work of Madeon inspires Waffle and leads him to make his first tests of electronic music using his launchpad, other notable influences like The Chainsmokers , Said the Sky, or even William Black interest him strongly and push him to explore more to arrive at a sound identity that he defines himself "rather like future bass, remaining open to mixes and hybridizations". By combining the warmth of real instruments (guitar, bass, drums) and the density that electronic music brings, Waffle, in chameleon, is not confined to a single style and always seeks to diversify.
                </p>
                <p ref="bio_p5">
                    <span>Always with a desire to transmit powerful emotions</span>, Waffle expresses his ideas through his music. At the very stage of the creative process, he integrates into his musical construction his relationship with the public. For him, everything is a matter of sharing the imagination: "Often, when we listen to music, we imagine a scene or a memory […] for my part, I like to create my sounds in a fairly visual way, direct, and sensitive ”. If sometimes it is the chords that allow Waffle to build the global atmosphere and the tone of a song, it is especially in a work of collage and assembly that he forms the great structure then gradually refines until 'to the final version. His latest single United we are free in collaboration with Jane Sarkis was notably the subject of several transformations (ranging from the softest to the most pop) before being broadcast on NRJ radio in 2019.
                </p>
                <p ref="bio_p6">
                    <span>As a rising star</span>, Waffle is shaping a future full of promise with ambitious projects and challenges. If he has already achieved several goals at a young age (million views on Youtube with "Le rap anti-Fortnite", passage on the big radio stations, live at the Festival UTCéenne ...), Waffle continues his ascent with the preparation of 'a new album and a tour. Since musical design is not without showmanship, Waffle also wants to be a show creator: "I don't want to do only a live performance, I want to create a show that upsets audiences in different emotions with change of universe, beautiful transitions, and music that transports everyone ”. A creative project that prepares Waffle for his entry into the prestigious panel of musical revelations for the coming year.
                </p>
                <p ref="bio_p7">Deborah D.</p>
            </div>
        </main>
        <aside ref="aside_bio">
            <div class="aside-content">
                <a href="">
                    <span>Utcéenne - 2018</span>
                </a>
            </div>
        </aside>
    </div>
</template>

<script>
    import AllLinks from '../widgets/AllLinks'
    
    import { TimelineLite, Power4 } from 'gsap'

    export default {
        name: 'Biography',
        components: {
            AllLinks
        },
        mounted() {
            const { 
                aside_bio,
                bio_p1,
                bio_p2,
                bio_p3,
                bio_p4,
                bio_p5,
                bio_p6,
                bio_p7
            } = this.$refs
            const timeline = new TimelineLite()

            timeline.to(bio_p1, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p1, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.2')

            timeline.to(bio_p2, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p2, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.27')

            timeline.to(bio_p3, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p3, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.34')

            timeline.to(bio_p4, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p4, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.41')

            timeline.to(bio_p5, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p5, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.48')

            timeline.to(bio_p6, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p6, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.55')
            
            timeline.to(bio_p7, 0, {
                opacity: 0
            }, '0')
            timeline.to(bio_p7, 0.8, {
                opacity: 1,
                ease: Power4.easeInOut
            }, '0.62')


            timeline.to(aside_bio, 0, {
                width: 20,
                height: 50
            }, '0')
            timeline.to(aside_bio, 0.8, {
                height: '100%',
                ease: Power4.easeInOut
            }, '0')

            let width = 500
            if (window.innerWidth <= 1135) {
                width = 300
            }
            timeline.to(aside_bio, 0.8, {
                width: width,
                ease: Power4.easeInOut
            }, '0.7')
        }
    }
</script>

<style scoped>
    div#bio-page {
        background: #F2F3F4;
        display: flex;
        height: 100%;
    }
    aside {
        width: 500px;
        overflow: hidden;
    }
    .aside-content {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100vh;
        width: 500px;
        background-image: url('/waffle_bio-min.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .aside-content a {
        display: block;
        color: #FFFFFF;
        font-weight: bold;
        padding: 0 10px 10px 0;
    }

    main {
        width: calc(100% - 500px);
        display: flex;
        flex-direction: column;
        color: #5e5d5d;
        overflow-y: auto;
    }
    main .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 40px;
        margin-bottom: 40px;
    }
    main .content {
        max-width: calc(100% - 80px);
        margin: 0 auto;
    }
    .content h1 {
        margin-bottom: 20px;
        font-size: 2em;
    }
    .content p {
        margin-bottom: 40px;
        font-size: 1.2em;
        line-height: 1.5em;
    }
    .content span {
        font-weight: bold;
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

    @media only screen and (max-width: 1135px) {
        main {
            width: calc(100% - 300px);
        }
        aside .aside-content {
            width: 300px;
        }
        main .header {
            flex-direction: column;
            padding: 0 10px;
        }
        main .content {
            max-width: calc(100% - 25px);
        }
        div.links {
            margin: 20px 0 0 0;
        }
        img {
            margin: 20px 0 0 0;
            max-width: calc(100% - 20px);
            width: 250px;
        }
    }
    @media only screen and (max-width: 650px) {
        main {
            align-items: center;
            width: 100%;
        }
        main .content {
            max-width: calc(100% - 40px);
        }
        aside {
            display: none;
        }
    }
</style>