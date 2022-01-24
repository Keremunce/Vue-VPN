<template>
    <section class=" d-flex flex-column justify-content-center align-items-start text-center ">
        <div class="mainPage">
            <img src="https://i.hizliresim.com/t2il7hd.jpg" alt="" class="img-fluid">
        </div>
        <div class=" w-100">
            <Header />
            <section>
                <div class="container">
                    <div class="row justify-content-center align-items-center text-start py-5">
                        <!-- TEXT SECTION -->
                        <div class="col-xs-12 col-md-6 my-4">
                            <div class="mb-5">
                                <div class="mainText">
                                    <h1>{{ translate('HomeTitle1') }}</h1>
                                    <h5>{{ translate('HomeTitle2') }}</h5>
                                    <h6>{{ translate('HomeTitle3') }}</h6>
                                </div>

                                <div class="timerDiv">
                                    <Counter />
                                </div>

                                <div class="my-5 ">
                                    <router-link to="/about" class="Opportunity">{{ translate('DontMissBtn') }}
                                    </router-link>
                                    <router-view></router-view>
                                </div>

                                <p class="d-flex align-items-center justify-content-start">
                                    <img width="30" src="https://i.hizliresim.com/de2kkzb.png" alt=""
                                        class="img-fluid me-2">
                                    {{ translate('Guarantee') }}
                                </p>
                            </div>


                        </div>
                        <!-- TEXT SECTION END -->

                        <!-- DEVICE -->
                        <div class=" col-sm-6 col-md-3">
                            <img src="https://i.hizliresim.com/o6xkp81.png" alt="" class="img-fluid">
                        </div>
                        <!-- DEVICE END -->
                    </div>
                    <div class="row">
                        <div class="footer">
                            <div>
                                <ul class="d-flex flex-wrap justify-content-start align-items-center py-4 px-0">
                                    <li class="m-2 mx-4"><a href="#">{{ translate('Subscription') }}</a></li>
                                    <li class="m-2 mx-4"><a href="#">{{ translate('PrivacyPolicy') }}</a></li>
                                    <li class="m-2 mx-4"><a href="#">{{ translate('TermsOfUse') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    import Counter from '@/components/Counter.vue'
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
            Counter,
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
            },

        }
    }
</script>

<style scoped>
    .mainPage > img{
        /* background: url(https://i.hizliresim.com/t2il7hd.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%; */
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100% !important;
        min-height: 100% !important;
    }

</style>