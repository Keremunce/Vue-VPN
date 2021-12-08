<template>
    <div>
        
        <section id="seventhPage" class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/sixthPage" class="BackBtn"> 
                    <img src="https://i.hizliresim.com/t8o0zvr.png" class="mobile img-fluid" width="50"/>
                    <img src="https://i.hizliresim.com/60p7jc1.png" class="desktop img-fluid" width="40"/>
                </router-link>
                <router-view></router-view>
            </div>

            <Header />

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-12 py-4">
                        <h2 class="fw-bolder " >Which region do you prefer VPN connection from?</h2>
                        <h5>You can choose more than one.</h5>
                    </div>

                    <div class="col-md-3">


                        <div class="box my-4" v-for="(item, index) in items" :key="index" >
                            <div :class="{ active: selectedItem(item.title)}" @click="toggleActive(item.title)" class="innerBox">
                                <div >
                                    <p >{{item.title}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center align-items-center ">
                            <div class=" col-sm-6 text-center">
                                <div class="my-5 ">
                                    <router-link to="/eighthPage" class="button StartBtn Opportunity" :class="{ ClassDisabled: active1 }" >
                                        Continue<img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid " id="ThirdPageIcon">
                                    </router-link>
                                    <router-view></router-view>
                                </div>
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
export default {
        el: "#app",
        data() {
            return {
                items: [
                    {title: 'American continent(1-3 country)',},
                    {title: 'Europe continent(1-6 country)',},
                    {title: 'Asia continent(1-10 country)',}
                ],
                active1: false,
                selected: [],
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
            this.selected.length ? this.active1 = true : this.active1 = false

        },
    },
}

</script>

<style scoped>
.innerBox{
    border: 1px solid rgba(150, 150, 150, .4);
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;

}
.active{
    /* border: 1px solid  #1488CC; */
    border-radius: 5px;
    box-shadow: 0 0 0 1px #1488CC;
    color: #2B32B2;
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