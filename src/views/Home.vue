<template>
    <div>
        <section class="mainPage ">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center text-start py-5">
                <!-- TEXT SECTION -->
                    <div class="col-md-6"> 
                        <div class="mainText">
                            <h1>Unlimited access to the whole world Get real privacy</h1>
                            <h5>Connect to dozens of different locations at high speed</h5>
                            <h6>Limited time offer 7-day trial 1.00 $</h6>
                        </div>

                        <div class="timerDiv">
                            <Counter />
                        </div>
                        
                        <div class="Opportunity">
                            <router-link to="/about">Don't miss the Opportunity</router-link>
                            <router-view></router-view>
                        </div>

                        <p class="d-flex align-items-center justify-content-start">
                            <img width="30" src="https://i.hizliresim.com/de2kkzb.png" alt="" class="img-fluid me-2"> 
                            30 days money back guarantee 
                        </p>
                    </div> 
                <!-- TEXT SECTION END -->

                    <!-- DEVICE -->
                    <div class="col-md-3">
                        <img  src="https://i.hizliresim.com/o6xkp81.png" alt="" class="img-fluid">
                    </div>
                    <!-- DEVICE END -->
                </div>
            </div>

            <div class="footer">
                <div >
                    <ul class="d-flex justify-content-evenly align-items-center py-4">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Mange Subscription</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                    
                    
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

    export default {
        el: '#app',
        components: {
            Counter

        }
        
    }
</script>

<style lang="scss" scoped>

</style>