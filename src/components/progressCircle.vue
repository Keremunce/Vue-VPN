<template>
    <div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="box position-relative">
                <canvas id="my_canvas" width="200" height="200"></canvas>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style scoped>
.circle{
    width: 200px;
    height: 200px;
    border: 1px solid #333;
    position: absolute;
}
.points{
    width: 3px;
    height: 15px;
    background: #0007;
    position: absolute;
    transform: rotate(calc(var(--i)*var(--r))) translateY(-100px);
    border-radius: 3px;
    animation: glow .01s linear forwards;
    animation-delay: calc(var(--i)* .05s);
}
@keyframes glow{
    100%{
        background: #52a8ff;
        box-shadow: 0 0 20ppx #52a8ff;
    }
}
</style>