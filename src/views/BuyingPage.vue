<template>
    <div>
        <section class=" d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <Header />
            <div class="container-fluid" style="background: hsl(0, 0%, 95%);">
                <div class="container">
                    <div class="row justify-content-center align-items-center text-center mt-5 pt-5">
                        <div class="col-8">
                            <h1>7 days free trial only $1</h1>
                            <p>
                                Your plan includes unlimited access. If you do not cancel, it will be renewed as 24.99$ per month at the end of the trial.
                            </p>
                        </div>
                    </div>
                    
                    <CreditForm>
                    </CreditForm>


                    <div class="row justify-content-end payment_img">
                        <div class="col-4">
                            <div>
                                <img src="https://cdn-assets.zotlo.com/assets/platform3p/img/card-types.jpg?ver=249" class="img-fluid">
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
import CreditForm from '@/components/form.vue'


    export default {
        el: '#app',
        data() {
            return {
                active: false,
            }
        },
        components:{
            Header,
            CreditForm
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