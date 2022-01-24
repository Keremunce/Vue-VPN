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
                        <h2 class="fw-bolder " >{{ translate('SeventhPageTitle1') }}</h2>
                        <h5>{{ translate('SeventhPageTitle2') }}</h5>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="box my-4" v-for="(item, index) in items" :key="index" >
                            <div :class="{ active: selectedItem(item.title)}" @click="toggleActive(item.title)" class="innerBox">
                                <div >
                                    <p >{{ translate(item.title) }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center align-items-center ">
                            <div class=" col-sm-6 text-center">
                                <div class="my-5 ">
                                    <router-link to="/eighthPage" class="button StartBtn Opportunity" :class="{ ClassDisabled: active }" >
                                        {{ translate('GoAhead') }}<img width="16" src="https://i.hizliresim.com/agv40t1.png" alt="" class="img-fluid " id="ThirdPageIcon">
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
    import en from "../locales/en.js";
    import tr from "../locales/tr.js";
export default {
        el: "#app",
        mixins: [en, tr],

        data() {
            return {
                items: [
                    {title: 'SeventhPageTitle3',},
                    {title: 'SeventhPageTitle4',},
                    {title: 'SeventhPageTitle5',}
                ],
                active: false,
                selected: [],
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
            translate(prop) {
                return this[this.lang][prop];
            }
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