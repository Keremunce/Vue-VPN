<template>
    <div style="background: #f6f9ff; height: 100vh;">
        <div class="container">
            <div class="row justify-content-center align-items-center ">
                <div class="col-12">
                    <!-- <img src="https://i.hizliresim.com/5buummk.png" class="img-fluid"  /> -->
                    <img src="https://i.hizliresim.com/nvddds4.png" class="desktop img-fluid "  />
                    <img src="https://i.hizliresim.com/hql0eg5.png" class="mobile  img-fluid "  />
                    <a href="/" class="Downloadlink">Download Now </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        el: '#app',

    }
</script>

<style  scoped>
.Downloadlink{
    padding: 1.5rem 5rem;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #e68c44;
    border-radius: 10px;
    color: white!important;
    font-weight: bolder;
    white-space: nowrap;
}
@media (max-width: 1024px) and (min-width: 768px){
    .Downloadlink{
        top: 40%;
        padding: 1em 4rem;
    }
    
}
@media (max-width: 430px) and (min-width: 320px){
    .Downloadlink{
        top: 55%;
        padding: 1em 4rem;
    }
    
}
@media (max-width: 319px){
    .Downloadlink{
        top: 40%;
        padding: 0.8em 2rem;
    }
    
}
</style>