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
                        <button @click="updateProgress">Arttır</button>

                        <ol class="p-0 m-0 mt-3" >
                            <li v-for="todo in todos" :key="todo" class="my-3 d-flex justify-content-start progressText">

                                
                                <label :class="{ 'passed': progress >= todo.progress}">
                                    <i class="fas fa-check me-2 pt-1" style="color: limegreen;"></i>
                                    {{ todo.text }}
                                </label>

                            </li>
                        </ol>

                        
                    </div>
                    

                    <h1>IN PROGRESS</h1>

                    <div class="col-md-5 pop-up">
                        <div class="inner_pop text-center">
                            <h2 class="warning">Önerilen Teklif</h2>
                            <h4>1 TL farkla 2 kat daha hızlı baglantı ister misiniz ?</h4>
                            <p>
                                <i class="fas fa-check me-2 pt-1" style="color: limegreen;"></i>
                                <span>30 gün para iade garantisi</span>
                            </p>

                            <div class="d-flex flex-column justify-content-center align-items-center my-2">
                                <button @click="updateProgress" class="btn-success">Evet</button>
                                <button @click="updateProgress" class="btn-primary">Hayır</button>
                            </div>

                            <p>Kullanıcılarımızın %97'si EVET secenegini tercih ediyor.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>


<script>
// import percentCounter from '../components/percentCounter.vue'
// import Progress from '../components/progress2.vue'

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
                progress: 0
            }
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
            },
            updateProgress() {
                setInterval(this.finishProgress, 50)
            }
        },
        created() {
            setInterval(this.startProgress, 1)

        },
    }
</script>

<style  scoped>
.progressCircle{
    font-size: 1.5rem;
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
}

</style>
