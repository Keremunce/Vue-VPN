<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/fifthPage" class="BackBtn"> 
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <Header />

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-12">
                        <h2 class="fw-bolder my-5">{{ translate('SixthPageTitle1') }}</h2>

                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <div class="box my-5" v-for="(item, index) in items" :key="index" >
                            <div class="innerBox">
                                <router-link to="/seventhPage">
                                    <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                        <p>{{ translate(item.title)}}</p>
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
    import en from "../locales/en.js";
    import tr from "../locales/tr.js";
    export default {
        el: '#app',
        mixins: [en, tr],
        data () {
            return {
                items: [
                    {title: 'SixthPageTitle2',},
                    {title: 'SixthPageTitle3',},
                    {title: 'SixthPageTitle4'},
                    {title: 'SixthPageTitle5',}
                ],
                lang: window.navigator.language.slice(0, 2),

            }
        },
        components:{
            Header
        },
        created() {

            if (this.lang == 'en') {
                return this.lang = 'en'
            } else if (this.lang == 'tr') {
                return this.lang = 'tr'
            } else {
                return this.lang = 'en'
            }
        },
        methods: {
            translate(prop) {
                return this[this.lang][prop];
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>