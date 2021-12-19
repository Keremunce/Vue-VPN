<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/seventhPage" class="BackBtn"> 
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <Header />

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-10">
                        <p class="py-3" style="color: #1488CC;">Last question!</p>
                        <h2 class="fw-bolder mb-5">Share your Vue-VPN plan with other family members. would you like to share?</h2>

                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="box my-5" v-for="(item, index) in items" :key="index" >
                            <div class="innerBox">
                                <router-link to="/ninethPage">
                                    <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                        <p>{{item.title}}</p>
                                    </div>
                                </router-link>
                                <router-view></router-view>
                            </div>
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
        data () {
            return {
                items: [
                    {title: '2 person family plan',},
                    {title: '4 person family plan',},
                    {title: '6 person family plan'},
                    {title: 'Just for myself',}
                ]
            }
        },
        components:{
            Header
        }
    }
</script>

<style lang="scss" scoped>

</style>