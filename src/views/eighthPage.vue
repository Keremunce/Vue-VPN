<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/seventhPage" class="BackBtn"> <i class="fas fa-angle-left"></i> Back</router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-10">
                        <p class="py-3" style="color: #1488CC;">Last question!</p>
                        <h2 class="fw-bolder mb-5">Share your Vue-VPN plan with other family members. would you like to share?</h2>

                    </div>
                    
                    <div class="col-md-3">

                        <div>
                            <router-link to="/ninethPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>2 person family plan</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/ninethPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>4 person family plan</p>
                                </div>
                            </router-link>

                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/ninethPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>6 person family plan</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/ninethPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>Just for myself</p>
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>