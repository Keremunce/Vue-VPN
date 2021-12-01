<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/thirdPage" class="BackBtn"> <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/></router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center ">

                    <div class="col-md-12 mb-5 pb-3">
                        <h2 class="fw-bolder my-5">Choose your phone's operating system.</h2>

                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-7 mt-5">

                        <div>
                            <router-link to="/fifthPage">
                                <div class="card Fcard d-flex  flex-row justify-content-start align-items-center" style="height: 50px">
                                    <i class="fab fa-apple mx-3 img-fluid" style="font-size: 1.5rem;" ></i>
                                    <p>IOS</p>
                                </div>
                            </router-link>
                            <router-view></router-view>
                        </div>

                        <div>
                            <router-link to=/fifthPage>
                                <div class="card Fcard d-flex flex-row my-5 justify-content-start align-items-center" style="height: 50px">
                                    <i class="fab fa-android mx-3 img-fluid" style="font-size: 1.5rem;" ></i>
                                    <p>Android</p>
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

<style  scoped>




</style>