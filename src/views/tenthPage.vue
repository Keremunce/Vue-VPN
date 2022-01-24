<template>
    <div>
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <Header />

            <main class="AboutText">
                <div class="container-fluid" style="background-color:hsl(0, 0%, 95%);">
                    <div class="row flex-column justify-content-center align-items-center text-center">
                        <div class="col-md-6 my-5">
                            <h1>{{ translate('TenthPageTitle1') }}  </h1>
                            <p>{{ translate('TenthPageTitle2') }} </p>
                        </div>

                        <div class="col-xs-12 col-sm-8 col-md-7 col-lg-5 my-5">
                            <div class="card p-5">
                                <div class="inputDiv">
                                    <i class="fas fa-envelope-open-text"></i>
                                    <input type="text" class="email_input w-100" placeholder="Email" v-model="state.email" @input="updateValueinput"  v-on:keyup.enter="submitForm()"/>


                                </div>
                                <div class="position-relative">
                                    <span class="errorMsg" v-if="v$.email.$error">
                                        {{ v$.email.$errors[0].$message }}
                                    </span>
                                </div>
                                <div class=" text-center">
                                    <div class="my-5 ">
                                        <button @click="submitForm()"  to="/BuyingPage" class="button StartBtn Opportunity" :class="{ ClassDisabled: active }"  >
                                            {{ translate('GoAhead') }} <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid " id="ThirdPageIcon">
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <p>{{ translate('TenthPageTitle3') }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import useValidate from "@vuelidate/core";
import {required, email,  } from "@vuelidate/validators";
import {reactive, computed} from "vue";
import store from "@/store";
    import en from "../locales/en.js";
    import tr from "../locales/tr.js";

    export default {
        el: '#app',
        mixins: [en, tr],

        setup() {
            const state = reactive({
                email: '',
            })


            const rules = computed(() => {
                return {
                    email: {
                        required,
                        email,
                    },
                };
            });

            const v$ = useValidate(rules, state)

            return{
                state,
                v$, 
            }
        },
        data() {
            return {
                active: false,
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
            updateValueinput() {
                this.v$.$validate() // checks all inputs
                if (!this.v$.$error) { // if ANY fail validation
                    // console.log('Form SUCCESS submitted.');
                    this.active = true;
                } else {
                    // console.log('Form FAILED validation')
                    this.active = false;
                }
            },
            login() {
                store.user = this.state.email;
                const redirectPath = this.$route.query.redirect || "/BuyingPage";
                this.$router.push(redirectPath);
            },
            submitForm() {
                // console.log(this.v$)
                this.v$.$validate() // checks all inputs
                if (!this.v$.$error) { // if ANY fail validation
                    // console.log('Form SUCCESS submitted.');
                    this.login();
                    
                } else {
                    // console.log('Form FAILED validation')
                }
            },
            translate(prop) {
                return this[this.lang][prop];
            }
        },

    }
</script>

<style  scoped>
.email_input{
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 5px;
}
.inputDiv > input{
    position: relative;
}
.inputDiv{
    position: relative;
}
.inputDiv > i{
    font-size: 1rem;
    position: absolute;
    z-index: 10;
    top: 50%;
    left: .5%;
    transform: translate(50%, -50%);
    border-right: 1px solid hsl(0, 0%, 94%);
    padding-right: .6em;
}
.active{
    /* border: 1px solid  #1488CC; */
    border-radius: 5px;
    box-shadow: 0 0 0 1px #1488CC;
    color: #2B32B2;
    background: #fff;

}
.disabled {
    pointer-events:none; 
}
.button{
    opacity: .4;
    border: none;
    pointer-events: none;
}

.ClassDisabled{
    opacity: 1;
    background-color: blue;
    pointer-events:all;
}
input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}
.errorMsg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
}
</style>