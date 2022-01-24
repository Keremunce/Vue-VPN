<template>
    <div>
        <section class="d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <Header />
            <div class="container-fluid" style="background: hsl(0, 0%, 95%);">
                <div class="container">
                    <div class="row justify-content-center align-items-center text-center mt-5 pt-5">
                        <div class="col-lg-8">
                            <h1>{{ translate('BuyingPageTitle1') }}</h1>
                            <p>
                                {{ translate('BuyingPageTitle2') }}
                            </p>
                        </div>
                    </div>
                    
                    <CreditForm>
                    </CreditForm>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
import Header from '@/components/header.vue'
import CreditForm from '@/components/form.vue'
    import en from "../locales/en.js";
    import tr from "../locales/tr.js";

    export default {
        el: '#app',
                mixins: [en, tr],

        data() {
            return {
                active: false,
                lang: window.navigator.language.slice(0, 2),
            }
        },
        components:{
            Header,
            CreditForm
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
            updateValueinput(event) {
                // console.log(event)
                // console.log(event.target.value);
                if(event.target.value == ''){
                    this.active = false;
                }
                else {
                    this.active = true;
                }
            },
            translate(prop) {
                return this[this.lang][prop];
            }
        }
    }
</script>

<style  scoped>
.Trial_info{
    color: hsl(0, 0%, 70%);
    font-size: .8rem;
    font-family: 'Oxygen', sans-serif!important;
    font-weight: bold;
}
.payment_img{
    margin-right: 8rem;
    margin-top: 1rem;
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
</style>