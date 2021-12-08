<template>
    <div>
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <router-link to="/" class="BackBtn"> 
                <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
            </router-link>
            <router-view></router-view>

            <!-- <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div> -->
            <Header />

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center "> 
                    <div class="col-md-10 my-5">
                        <h1>For us to prepare the best VPN connection plan for you We ask you to answer a few questions.</h1>
                        <h5>Please do not rush to reply.</h5>
                    </div>

                    
                    <p class="About_info col-md-4 mt-5">We guarantee the security of your information. As you proceed, you accept Vue-VPN's <a href="#"><u>Privacy Policy </u></a>  and <a href="#"><u>Terms of Use</u></a> .</p>

                </div>

                <div class="row justify-content-center align-items-center ">
                    <div class="col-md-2">
                        <div class=" my-5">
                            <router-link to="/thirdPage" class="Opportunity StartBtn  ">
                                Start 
                                <img width="16" id="AboutNextIcon" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid">
                            </router-link>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>  

            </div>

        </section>
    </div>
</template>

<script>
import Header from '@/components/header.vue'

    export default {
        el: '#app',
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>