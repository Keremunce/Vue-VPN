<template>
    <div>
        
        <section id="seventhPage" class="AboutSection d-flex flex-column justify-content-center align-items-start text-center pt-5">

            <div>
                <router-link to="/sixthPage" class="BackBtn"> <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/></router-link>
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


                        <div class="box my-4" v-for="(item, index) in items" :key="index" >
                            <div :class="{ active: selectedItem(item.title)}" @click="toggleActive(item.title)" class="innerBox">
                                <div >
                                    <p >{{item.title}}</p>
                                </div>
                            </div>
                        </div>
                        

                        <button class="button Opportunity StartBtn" :class="{ ClassDisabled: active1 }" >
                            <router-link to="/eighthPage"   >Continue <img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid "></router-link>
                            <router-view></router-view>
                        </button>
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
                {title: 'American continent(1-3 country)',},
                {title: 'Europe continent(1-6 country)',},
                {title: 'Asia continent(1-10 country)',}
            ],
            active1: false,
            selected: []
            }
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

.button{
    opacity: .4;
    border: none;
}
.ClassDisabled{
    opacity: 1;
    background-color: blue;
}
</style>