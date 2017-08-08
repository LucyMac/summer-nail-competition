
<template>
    <div class="grid-entry__wrapper">
         <ul class="grid-entry__list">
            <thumbnail :submissions="submissions"></thumbnail>
        </ul>
    </div>
</template>

<script>

import thumbnail from './thumbnail.vue';

export default {
    name: 'entrygrid',
    components: {
        'thumbnail': thumbnail
    },
    data () {
        return {
            msg: 'Upload nails',
            submissions: [
                {
                    id: 0,
                    src: 'https://s-media-cache-ak0.pinimg.com/736x/c3/0a/14/c30a14b4a62c2a5c640b693d9d589f09--summer-nail-designs-hue.jpg',
                    name: 'Caroline',
                    email: 'example@beamly.com',
                    likes: 0
                },
                {
                    id: 1,
                    src: 'https://s-media-cache-ak0.pinimg.com/736x/e8/67/47/e867479240baba528a609c5196663aca--nail-ideas-for-summer-summer-nail-art.jpg',
                    name: 'Justine',
                    email: 'example@beamly.com',                    
                    likes: 5
                },
                {
                    id: 2,
                    src: 'http://stayglam.com/wp-content/uploads/2015/05/928482_636096789801621_1293490820_n.jpg',
                    name: 'Eugene',
                    email: 'example@beamly.com',                    
                    likes: 3
                },
                {
                    id: 3,
                    src: 'https://s-media-cache-ak0.pinimg.com/736x/bc/79/a6/bc79a607697a3efbe588ebd92f8ad779--pink-yellow-pink-and-gold.jpg',
                    name: 'Marc',
                    email: 'example@beamly.com',                    
                    likes: 7
                },
                {
                    id: 4,
                    src: 'https://s-media-cache-ak0.pinimg.com/736x/2b/87/d9/2b87d9342c5fa59340d758aa9d6b5f2e--beach-pedicure-ideas-toenails-toe-nails-ideas.jpg',
                    name: 'Janett',
                    email: 'example@beamly.com',                    
                    likes: 0
                },
                {
                    id: 5,
                    src: 'https://s-media-cache-ak0.pinimg.com/736x/c8/6a/81/c86a81f7db00fb890cb733237095ac5b--beach-vacation-nails-beach-vacations.jpg',
                    name: 'Lucy',
                    email: 'example@beamly.com',                    
                    likes: 1
                }
            ]
        }
    },
    computed: {

    },
    methods: {

    },
    events: {

    }
}
</script>