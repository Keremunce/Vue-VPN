<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/eighthPage" class="BackBtn"> <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/></router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-10">
                        <h2 class="fw-bolder mb-5">Thanks! Your plan is being prepared</h2>
                        <p class="py-3" style="color: #1488CC;">Please wait a moment...</p>

                    </div>

                    <div class="col-md-4">
                        <percent-counter />
                        <progress-circle> </progress-circle>
                    </div>

                    <h1>IN PROGRESS</h1>
                </div>

            </div>

           

        </section>
    </div>
</template>


<script>
import percentCounter from '../components/percentCounter.vue'
import ProgressCircle from '../components/progressCircle.vue'

    export default {
        el: '#app',
        components: { 
            percentCounter ,
            ProgressCircle
        },
            
               
    }
</script>

<style lang="scss" scoped>

</style>