<template>
    <div>
        <section class="AboutSection">
            <router-link to="/about" class="BackBtn">
                <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50" />
                <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40" />
            </router-link>
            <router-view></router-view>


            <div class="AboutText">
                <div class="container">
                    <div class="row justify-content-center align-items-center text-center">
                        <Header />

                        <div class="col-md-12 py-2">
                            <h2>{{ translate('ThirdPageTitle1') }}</h2>
                        </div>

                        <div class=" col-xs-10 col-sm-6 col-md-7 card py-5">
                            <div class="d-flex justify-content-center align items-center mt-1 mb-5">
                                <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt=""
                                    class="img-fluid me-3">
                                <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt=""
                                    class="img-fluid me-3">
                                <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt=""
                                    class="img-fluid me-3">
                                <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt=""
                                    class="img-fluid me-3">
                                <img width="50" src="https://i.hizliresim.com/rld0yew.png" alt=""
                                    class="img-fluid me-3">
                            </div>
                            <p>{{ translate('ThirdPageTitle2') }}</p>

                            <div class="circleCustomer">
                                <img width="100" src="https://i.hizliresim.com/b3euzvb.jpg" alt="" class="img-fluid">
                            </div>

                            <p><b>Milica Vukovic</b> {{ translate('USA') }}</p>
                        </div>


                    </div>

                    <div class="row justify-content-center align-items-center ">
                        <div class=" col-sm-6 text-center">
                            <div class="my-5 ">
                                <router-link to="/fourthPage" class=" StartBtn Opportunity">
                                    {{ translate('GoAhead') }}
                                    <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid " id="ThirdPageIcon">
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
        data() {
            return {
                lang: window.navigator.language.slice(0, 2),
            }
        },
        components: {
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

<style scoped>
    .ThirdPage {
        background-color: hsl(0, 0%, 95%);
        height: 100vh;
    }

    .circleCustomer {
        margin: 1rem;
    }

    .circleCustomer img {
        border-radius: 100% !important;
        object-fit: cover !important;
    }

    .ThirdPage .card {
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
</style>