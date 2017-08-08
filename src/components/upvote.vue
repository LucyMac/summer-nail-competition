<template>
    <div class="upvote">
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


<style>
.upvote__btn {
    border: 0;
    border-radius: 50%;
    padding: 10px;
    font-weight: bold;
}

.upvote__total {
    font-weight: bold;
    width: 50%;
    float: left; 
    margin-top: 7px;
}
</style>
