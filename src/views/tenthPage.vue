<template>
    <div style="height: 100vh">
        <Header />

        <main class="AboutText">
            <div class="container-fluid">
                <div class="row flex-column justify-content-center align-items-center text-center">
                    <div class="col-md-6 my-5">
                        <h1> Please enter your e-mail adress </h1>
                        <p>Your Vue-Vpn account creating with this e-mail </p>
                    </div>

                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-5 my-5">
                        <div class="card p-5">
                            <div class="inputDiv">
                                <i class="fas fa-envelope-open-text"></i>
                                <input type="text" name="email" placeholder="E-mail" class="email_input w-100" @input="updateValueinput" v-model="state.email" required>
                                <span v-if="v$.email.$error">
                                    {{ v$.email.$error[0].$message }}
                                </span>
                            </div>


                            <div class=" text-center">
                                <div class="my-5 ">
                                    <router-link tag="button" to="/Kredi_Form" class="button StartBtn Opportunity" :class="{ ClassDisabled: active }"  @click="submitForm">
                                        Continue<img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid " id="ThirdPageIcon">
                                    </router-link>
                                    <router-view></router-view>
                                </div>
                            </div>

                            <div>
                                <p>We guarantee the security of your information. Updates and campaigns related to your account will be sent to this e-mail address. As you proceed, you accept the JetVPN Privacy and Usage agreements. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'


    export default {
        el: '#app',
        setup() {
            const state = reactive({
                email: '',
            })

            const mustBeMail = (value) => value.includes('@')

            const rules = computed(() => {
                return {
                    email: { required, email, mustBeMail: helpers.withMessage('It must be example@outlook.com', mustBeMail) }
                }
            })
            const v$ = useValidate(rules, state)

            return {
                state,
                v$,
            }
        },

        data() {
            return {
                items: [
                    {title: 'American continent(1-3 country)',},
                    {title: 'Europe continent(1-6 country)',},
                    {title: 'Asia continent(1-10 country)',}
                ],
                active: false,
            }
        },

        components:{
            Header
        },

        methods: {
            selectedItem(item) {
                return this.selected.find(s => s === item)
            },
            toggleActive(item) {
                if (this.selected.find(s => s === item)) {
                    this.selected = this.selected.filter(f => f !== item)
                } 
                else {
                    this.selected.push(item)
                }
                this.selected.length ? this.active = true : this.active = false
            },
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

            submitForm() {
                this.v$.$validate();
                if(!this.v$.$error) { 
                    console.log('Form successfully submitted.');
                    this.$store.commit("setAuthentication", true);
                    
                } else {
                    console.log('Invalid email. Form failed validation.')
                    // this.active = false;
                    console.log(this.active)
                }

            }
        },

        created() {

        }
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
</style>