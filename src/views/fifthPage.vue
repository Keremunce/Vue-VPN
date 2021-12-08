<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/fourthPage" class="BackBtn">
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <Header />

            <div class="AboutText container-fluid">

                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-md-12">
                        <h2 class="fw-bolder my-5">What is the purpose of using VPN?</h2>

                    </div>
                    
                    <div class="col-md-3">

                        <div>
                            <router-link to="/sixthPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>Protect Privacy</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/sixthPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>Bypass Censorship</p>
                                </div>
                            </router-link>

                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/sixthPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>Faster Internet</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/sixthPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>I do not want to specify</p>
                                </div>
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

<style lang="scss" scoped>

</style>