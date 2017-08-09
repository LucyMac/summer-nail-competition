
<template>
    <div class="grid-entry__wrapper col-xs-12">
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
    props: ['submissions'],
    data () {
        return {
            msg: 'Upload nails',
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


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>