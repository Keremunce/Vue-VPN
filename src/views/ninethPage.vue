<template>
    <div>
        
        <section class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/eighthPage" class="BackBtn"> 
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <div class="AboutText container-fluid ">

                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-10">
                        <h2 class="fw-bolder my-5">Thanks! Your plan is being prepared</h2>
                        <p class="py-3" style="color: #1488CC;">Please wait a moment...</p>

                    </div>

                    <div class="col-md-5 d-flex flex-column justify-content-center align-items-center text-center">
                        <!-- <percentCounter /> -->
                        <ve-progress class="progressCircle position-relative"   :progress="progress"    />

                        <ol class="p-0 m-0 mt-3" >
                            <li v-for="todo in todos" :key="todo" class="my-3 d-flex justify-content-start progressText">
                                <label :class="{ 'passed': progress >= todo.progress}">
                                    <i class="fas fa-check me-2 pt-1" style="color: limegreen;"></i>
                                    {{ todo.text }}
                                </label>
                            </li>
                        </ol>
                    </div>
                </div>

                <transition name="slide-fade">
                    <div class="popup" v-if="PopupBtn" >
                        <div class="popup-inner card active">
                            <slot />
                            <h2 class="fw-bolder">Suggested Offer</h2>
                            <p class="fw-bold my-4"> Do you want 2 times faster connection with a difference of 1$? </p>
                            <p> <i class="fas fa-check-circle me-2" style="color: limegreen;"></i>30 days money back guarantee</p>
                            <div class="d-flex flex-column justify-content-center align-items-center my-4">
                                <button class="popup-close my-3 btn btn-primary w-100 py-3" @click="CloseBtn(); updateProgress();"> Yes </button>
                                <button class="popup-close btn btn-light w-100 py-3" @click="CloseBtn(); updateProgress();"> No </button>
                            </div>
                            <p> 97% of our users choose YES. </p>
                        </div>
                    </div>
                </transition>
            </div>
        </section>
    </div>
</template>


<script>
// import percentCounter from '../components/percentCounter.vue'
// import Progress from '../components/progress2.vue'
// import Popup from '@/components/popup.vue'
import { ref } from 'vue';

    export default {
        el: '#app',
        data() {
            return {
                todos: [
                    { text: "Your answers are being analyzed.", progress: 20 },
                    { text: "Account setup in progress.", progress: 40 },
                    { text: "Server location setup is in progress.", progress: 60 },
                    { text: "Your account is being created.", progress: 100 }
                ],
                progress: 0,
                PopupBtn: false,
                isActive: true,
                redirect: false,
            }
        },
        setup() {
            const showModal = ref(false);

            return { showModal };
        },
        methods:{
            startProgress() {
                if ( this.progress < 75 ) {
                    this.progress += 1;
                }
            },
            finishProgress(){
                if ( this.progress < 100 ) {
                    this.progress += 1;
                }
                if (this.progress == 100 ) {
                    if(this.redirect == false){
                        this.redirect = true;
                        // Page redirect function in 2 seconds
                        setTimeout(() => {
                            this.$router.push({path:"/tenthPage"})
                        }, 2000);
                    }
                }
            },
            updateProgress() {
                setInterval(this.finishProgress, 50)
                // SÜREKLİ DÖNÜYOR
            },
            buttonTrigger() {
                this.PopupBtn = !this.PopupBtn;
            },
            CloseBtn() {
                this.PopupBtn = false;
            },
        },
        // When Page upload
        created() {
            setInterval(this.startProgress, 1); //  When page upload starProgress function in 1 miliseconds
            setTimeout(this.buttonTrigger , 2000); //  When page upload buttonTrigger function in 2 seconds
        }
    }
</script>

<style  scoped>

.progressCircle{
    font-size: 1.5rem !important;
}
.progressCircle::before{
    content: '%';
    position: absolute;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
}
/* .progressText{
    opacity: .4;
    color: #111;
} */
label {
    opacity: 0.4;
}
label.passed {
    opacity: 1;
    transition: 1s;
    text-decoration-line: line-through

}



.popup{
    position: fixed;  
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 2s;
}
.popup-inner{
    background: #fff;
    padding: 2rem;
    transition: 2s;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
