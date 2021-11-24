<template>
    <div>
        <!-- ISMAILS WORKSPACE -->
        
        <section id="seventhPage" class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/sixthPage" class="BackBtn"> <i class="fas fa-angle-left"></i> Back</router-link>
                <router-view></router-view>
            </div>

            <div class="container-fluid logoHeader">
                <h1>Vue-VPN</h1>
            </div>

            <div class="AboutText container-fluid ">
                <div class="row justify-content-center align-items-center text-center ">
                    <div class="col-md-12 py-4">
                        <h2 class="fw-bolder " >Which region do you prefer VPN connection from?</h2>
                        <h5>You can choose more than one.</h5>
                    </div>

                    <div class="col-md-3">


                        <div class="box my-4" v-for="(item,index) in items" :key="index">
                            <div :class="{ active: item.active}" @click="toggleActive(index)">
                                <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                    <p> <label :for="item.title">{{item.title}}</label>  </p>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="box my-4"  v-for='(item, index) in items' :key="index">
                            <div :class="{ active: item.active}" @click="toggleActive(index)">

                                
                            </div>
                        </div> -->

                        <!-- <div class="box my-4" 
                            :class="boxBSelected ? 'active' : '' "
                            @click= "onBoxSelected('B')">

                            <div class="card Fcard d-flex flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                <p>{{ item }} </p>
                            </div>

                        </div>

                        <div class="box" 
                            :class="boxCSelected ? 'active' : '' "
                            @click= "onBoxSelected('C')">

                            <div class="card Fcard d-flex  flex-row justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                <p>{{ item }} </p>
                            </div>
                        </div>

                        <div class="box my-4" :class="boxDSelected ? 'active' : '' " @click= "onBoxSelected('D')">

                            <div class="card  Fcard d-flex flex-row  justify-content-center align-items-center" style="padding: 1rem 2rem !important">
                                <p>{{ item }} </p>
                            </div>

                        </div> -->

                        <div class="Opportunity AboutBtn ">
                            <router-link to="/eighthPage" class="StartBtn">Continue <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid "></router-link>
                            <router-view></router-view>
                        </div>
                    </div>
                    
                </div>  

            </div>

           

        </section>
    </div>
</template>


<script>
export default {
        el: "#app",
        data() {
            return {
                items: [
                    {
                        title: 'American continent(1-3 country)',
                    },
                    {
                        title: 'American continent(1-3 country)',
                    },
                    {
                        title: 'American continent(1-3 country)',
                    }
                ]
            }
        
    },
    methods: {
        toggleActive(index) {
            let item = this.items[index];
            
            item.active = !item.active;
            
            this.$set(this.items, index, item);
            
        }
    }
}
</script>

<style scoped>
.active{
    /* border: 1px solid  #1488CC; */
    border-radius: 5px;
    box-shadow: 0 0 0 1px #1488CC;
    color: #2B32B2;
}
</style>