<template>
    <div>
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <router-link to="/" class="BackBtn">
                <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="40" />
                <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40" />
            </router-link>
            <router-view></router-view>

            <Header />

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-10 my-5">
                        <h1>{{ translate('AboutTitle1') }}</h1>
                        <h5>{{ translate('AboutTitle2') }}</h5>
                    </div>


                    <p class="About_info col-md-4 mt-5">{{ translate('AboutTitle3') }}</p>

                </div>

                <div class="row justify-content-center align-items-center ">
                    <div class="col-md-2">
                        <div class=" my-5">
                            <router-link to="/thirdPage" class="Opportunity StartBtn  ">
                                {{ translate('StartBtn') }}
                                <img width="16" id="AboutNextIcon" src="https://i.hizliresim.com/agv40t1.png" alt=""
                                    class="img-fluid">
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
            window.addEventListener('resize', this.onResize);

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

</style>