<template>
    <div style="height: 100vh;">
        <Header />
        <div class="AboutText">
            <div class="container">
                <div class="row justify-content-center align-items-center text-center mt-5 pt-5">
                    <div class="col-8">
                        <h1>7 days free trial only $1</h1>
                        <p>
                            Your plan includes unlimited access. If you do not cancel, it will be renewed as 24.99 TL per month at the end of the trial.
                        </p>
                    </div>
                </div>

                <div class="row justify-content-evenly align-items-center  mt-5">
                    <!-- COL-LEFT -->
                        <div class="col-sm-12 col-md-5 col-lg-5 py-5 px-3 card ">
                            <img src="https://cdn.zotlo.com/affiliate/themes/568f0b65-88c7-4598-a87e-85da10de60f8.png" alt="" class="img-fluid rounded">
                        </div>
                    <!-- COL-LEFT -->
                    <!-- COL-RIGHT -->
                        <div class="col-sm-12 col-md-5 col-lg-5 py-4 px-4 card ">
                            <div class="input-group">
                                <!-- INPUT GROUP -->
                                    <div class="col-12 my-3">
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Kredi Kartı Numarası">
                                        </div>
                                    </div>

                                    <div class="col-12 my-3">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Kart Uzerindeki Isim">
                                        </div>
                                    </div>

                                    <div class="col-xs-12  col-sm-12 col-md-5 ">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="GecerliliK Tarihi">
                                        </div>
                                    </div>

                                    <div class=" col-xs-12 col-sm-12 col-md-3">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="CVV">
                                        </div>
                                    </div>
                                <!-- INPUT GROUP -->


                                <div class="col-12 my-3 d-flex justify-content-between">
                                    <p>Toplam: </p>
                                    <span class="fw-bold"><p>1,00 $</p></span>
                                </div>

                                <div class="col-12 my-3">
                                    <router-link to="/DownloadSection">
                                        <button class="btn btn-primary w-100 py-3 fw-bolder">Start Trial</button>
                                    </router-link>
                                    <router-view></router-view>
                                </div>

                                <div class="col-12 my-3 text-center Trial_info">
                                    <p>"Denemeyi Başlat" butonuna tıklayarak Kullanım Şartları, Gizlilik Sözleşmesi ve 18 yaşından büyük olduğunuzu kabul etmiş olursunuz.</p>
                                </div>
                            </div>
                        </div>
                    <!-- COL-RIGHT -->
                </div>
                <div class="row justify-content-end payment_img">
                    <div class="col-4">
                        <div>
                            <img src="https://cdn-assets.zotlo.com/assets/platform3p/img/card-types.jpg?ver=249" class="img-fluid">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import Header from '@/components/header.vue'

    export default {
        el: '#app',
        name: 'CreditArea',
        components:{
            Header
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
</style>