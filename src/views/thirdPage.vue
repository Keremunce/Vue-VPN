<template>
    <div>
        <section class="ThirdPage">
            <router-link to="/about" class="BackBtn"> <i class="fas fa-angle-left"></i> Back</router-link>
            <router-view></router-view>

            <div class="container">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-md-12">
                        <h1>Vue-Vpn</h1>
                    </div>

                    <div class="col-md-12 py-2">
                        <h2>Vue-VPN Customer Comments</h2>
                    </div>

                    <div class="col-md-4 card py-5">
                        <div class="d-flex justify-content-center align items-center mt-1 mb-5" >
                            <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt="" class="img-fluid me-3">
                            <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt="" class="img-fluid me-3">
                            <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt="" class="img-fluid me-3">
                            <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt="" class="img-fluid me-3">
                            <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt="" class="img-fluid me-3">
                        </div>
                        <p>In a word, magnificent! I finally found an app that fully met my expectations. I have never used such a simple, reliable and fast VPN application before. I recommend it to everyone!</p>

                        <div class="circleCustomer">
                            <img width="100" src="https://i.hizliresim.com/b3euzvb.jpg" alt="" class="img-fluid">
                        </div>

                        <p><b>Milica Vukovic</b> USA</p>
                    </div>

                    <div class="Opportunity AboutBtn">
                        <router-link to="/fourthPage" class="StartBtn">Go ahead! <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid "></router-link>
                        <router-view></router-view>
                    </div>
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