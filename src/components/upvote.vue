<template>
    <div class="upvote col-xs-5">
        <p class="upvote__total">{{likes}} likes</p>
        <button v-on:click="plusOne" class="upvote__btn">+ 1</button>
    </div>
</template>

<script>
export default {
    name: 'upvote',
    props: ['likes'],
    data () {
        return {
            //
        }
    },
    methods: {  //maybe change this to event brodcasting to parent method
        plusOne () {
            this.likes += 1
        }
    }
}
</script>


<style lang="scss" scoped>
   @import '../scss/main.scss'
</style>