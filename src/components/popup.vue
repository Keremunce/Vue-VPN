<template>
    <div>
        <button @click="PopupBtn = !PopupBtn">Open Popup</button> 

        <div class="popup" v-if="PopupBtn">
            <div class="popup-inner card">
                <slot />
                <h2 class="fw-bolder">Suggested Offer</h2>
                <p class="fw-bold my-4"> Do you want 2 times faster connection with a difference of 1 TL? </p>
                <p> <i class="fas fa-check-circle me-2" style="color: limegreen;"></i>30 days money back guarantee</p>
                <div class="d-flex flex-column justify-content-center align-items-center my-4">
                    <button class="popup-close my-3 btn btn-success w-100 py-3" @click="CloseBtn"> Yes </button>
                    <button class="popup-close btn btn-light w-100 py-3" @click="CloseBtn"> No </button>
                </div>
                <p> 97% of our users choose YES. </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data()  {
        return {
            PopupBtn: false,
        }
    },

    methods: {
        buttonTrigger1() {
            // this.PopupBtn = !this.PopupBtn;
        },
        CloseBtn() {
            console.log(1)
            this.PopupBtn = false;
        },
    }
}
</script>

<style >
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
}
.popup-inner{
    background: #fff;
    padding: 2rem;
}

</style>