<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/fifthPage" class="BackBtn"> <i class="fas fa-angle-left"></i> Back</router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-12">
                        <h2 class="fw-bolder my-5">How many GB of data do you need monthly?</h2>

                    </div>
                    
                    <div class="col-md-3">

                        <div>
                            <router-link to="/seventhPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>1-2 GB between</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/seventhPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>2-5 GB between</p>
                                </div>
                            </router-link>

                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/seventhPage">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>5-10 GB between</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to="/seventhPage">
                                <div class="card Fcard d-flex flex-row my-5 justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p>Limitless</p>
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