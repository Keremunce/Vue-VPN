<template>
    <div class="d-flex justify-content-start align-items-center">
        <img width="50" src="https://i.hizliresim.com/s16r56n.png" alt="" class="img-fluid">
       <div class="timer ms-3"> {{ timeLeft }} </div>
    </div>
</template>

<script>
    export default {
        el: "#app",
        data() {
            return{
                time: 300, //in seconds
                timer: null,
            }
        },
        methods: {
            decrementOrAlert () {
                if (this.time > 0) {
                this.time--
                return
            }
            
            clearInterval(this.timer)
            }
        },
        computed: {
            timeLeft () {
                return `${this.minutes} : ${this.seconds} `
            },
            minutes () {
                return String(Math.floor(this.time / 60)).padStart(2, '0')
            },
            seconds () {
                return String(this.time % 60).padStart(2, '0')
            }
        },
        created () {
            this.timer = setInterval(this.decrementOrAlert, 1000)
        }
    }
</script>

<style lang="scss" scoped>

</style>