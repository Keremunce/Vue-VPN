<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/fourthPage" class="BackBtn"><img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/></router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>