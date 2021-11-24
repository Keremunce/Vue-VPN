<template>
    <div>
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <router-link to="/" class="BackBtn"> <i class="fas fa-angle-left"></i> Back</router-link>
            <router-view></router-view>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center "> 
                    <div class="col-md-10 my-5">
                        <h1>For us to prepare the best VPN connection plan for you We ask you to answer a few questions.</h1>
                        <h5>Please do not rush to reply.</h5>

                    </div>

                    <div class="Opportunity AboutBtn my-5">
                        <router-link to="/thirdPage" class="StartBtn">Start <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid "></router-link>
                        <router-view></router-view>
                    </div>

                    <p class="About_info col-md-3 mt-5">We guarantee the security of your information. As you proceed, you accept Vue-VPN's <a href="#"><u>Privacy Policy </u></a>  and <a href="#"><u>Terms of Use</u></a> .</p>

                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
</style>