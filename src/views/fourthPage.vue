<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/thirdPage" class="BackBtn">
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <Header />

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
import Header from '@/components/header.vue'

    export default {
        el: '#app',
        components:{
            Header
        }
    }
</script>

<style  scoped>

.Fcard *{
    transition: .5s;
}

.Fcard:hover,
.Fcard:hover i
{
    border-color: var(--theme-clr);
    color: var(--theme-clr);
}



</style>