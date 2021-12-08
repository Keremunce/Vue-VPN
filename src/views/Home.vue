<template>
        <section class="mainPage container-fluid">
            <Header />
                <div class="row justify-content-center align-items-center text-start py-5">
                <!-- TEXT SECTION -->
                    <div class="col-xs-12 col-md-6 my-4"> 
                        <div class="mainText">
                            <h1>Unlimited access to the whole world Get real privacy</h1>
                            <h5>Connect to dozens of different locations at high speed</h5>
                            <h6>Limited time offer 7-day trial 1.00 $</h6>
                        </div>

                        <div class="timerDiv">
                            <Counter />
                        </div>
                        
                        <div class="my-5 ">
                            <router-link to="/about" class="Opportunity">Don't miss the Opportunity</router-link>
                            <router-view></router-view>
                        </div>

                        <p class="d-flex align-items-center justify-content-start">
                            <img width="30" src="https://i.hizliresim.com/de2kkzb.png" alt="" class="img-fluid me-2"> 
                            30 days money back guarantee 
                        </p>
                    </div> 
                <!-- TEXT SECTION END -->

                    <!-- DEVICE -->
                    <div class=" col-sm-6 col-md-3">
                        <img  src="https://i.hizliresim.com/o6xkp81.png" alt="" class="img-fluid">
                    </div>
                    <!-- DEVICE END -->
                </div>

            <div class="footer">
                <div >
                    <ul class="d-flex flex-wrap justify-content-evenly align-items-center py-4 px-0">
                        <li class="m-2"><a href="#">Support</a></li>
                        <li class="m-2"><a href="#">Manage Subscription</a></li>
                        <li class="m-2"><a href="#">Privacy Policy</a></li>
                        <li class="m-2"><a href="#">Terms of Use</a></li>
                    </ul>
                    
                    
                </div>
            </div>

        </section>
</template>

<script>
import Counter from '@/components/Counter.vue'
import Header from '@/components/header.vue'

    export default {
        el: '#app',
        components: {
            Counter,
            Header

        }
        
    }
</script>

<style  scoped>
.mainPage{
    background: url(https://i.hizliresim.com/t2il7hd.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 100%!important;
    position: relative;
}
</style>