<template>
  <div class="card-form">
    <div class="card-list">
      <div class="container">
        <div class="row justify-content-evenly align-items-center  mt-5">
          <!-- COL-LEFT -->
          <div class="col-sm-12 col-md-8 col-lg-6">
            <VuePaycard :valueFields="valueFields" :isCardNumberMasked="false" class="my-5" />
          </div>  
          <!-- COL-LEFT -->
          <!-- COL-RIGHT -->
          <div class="col-sm-12 col-md-8 col-lg-5 py-4 px-4 card ">
            <div class="input-group">
              <!-- INPUT GROUP -->
              <div class="col-12 my-3">
                <div class="input-group my-3">
                  <input type="tel" :id="inputFields.cardNumber" title="Number" class="card-input__input form-control"
                    :value="valueFields.cardNumber" @input="changeNumber" data-card-field autocomplete="off"
                    :maxlength="cardNumberMaxLength" placeholder="Card Number" />
                </div>
                <!-- <span>
                  <p v-show="error" class="error text-danger fw-bold fs-6">ERROR</p>
                </span> -->
              </div>

              <div class="col-12 my-3">
                <div class="input-group mb-3">
                  <input type="text" :id="inputFields.cardName" title="Name" v-letter-only
                    class="card-input__input form-control" :value="valueFields.cardName" @input="changeName"
                    data-card-field autocomplete="off" placeholder="Card Name" />
                </div>
              </div>

              <div class="col-xs-12  col-sm-12 col-md-5 ">
                <div class="input-group mb-3">
                  <select class="card-input__input -select form-control" :id="inputFields.cardMonth" aria-label="Card Month" title="Month" v-model="valueFields.cardMonth" data-card-field>
                    <option value disabled selected>Month</option>
                    <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth"
                      v-bind:key="n">{{generateMonthValue(n)}}</option>
                  </select>
                  <select class="card-input__input -select form-control" :id="inputFields.cardYear"
                    aria-label="Card year" title="Year" v-model="valueFields.cardYear" data-card-field>
                    <option value disabled selected>Year</option>
                    <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                      {{$index + minCardYear}}</option>
                  </select>
                </div>
              </div>

              <div class=" col-xs-12 col-sm-12 col-md-3 CVV">
                <div class="input-group mb-3">
                  <input type="tel" title="CVV" class="card-input__input form-control" v-number-only
                    :id="inputFields.cardCvv" maxlength="4" :value="valueFields.cardCvv" @input="changeCvv"
                    data-card-field autocomplete="off" placeholder="CVV" />
                </div>
              </div>
              <!-- INPUT GROUP -->



              <div class="col-12">
                <div class="my-5 ">
                  <button @click="SubmitForm" to="/BuyingPage" class=" btn btn-primary w-100 p-3">
                    Start Trial
                  </button>
                </div>
              </div>


              <div class="col-12 my-3 text-center Trial_info">
                <p>"Denemeyi Başlat" butonuna tıklayarak Kullanım Şartları, Gizlilik Sözleşmesi ve 18 yaşından büyük
                  olduğunuzu kabul etmiş olursunuz.</p>
              </div>
            </div>
          </div>
          <!-- COL-RIGHT -->


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePaycard from "vue-paycard";


  export default {
    name: 'FormComponent',

    components: {
      VuePaycard
    },
    directives: {
      'number-only': {
        bind(el) {
          function checkValue(event) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '')
            if (event.charCode >= 48 && event.charCode <= 57) {
              return true
            }
            event.preventDefault()
          }
          el.addEventListener('keypress', checkValue)
        }
      },
      'letter-only': {
        bind(el) {
          function checkValue(event) {
            if (event.charCode >= 48 && event.charCode <= 57) {
              event.preventDefault()
            }
            return true
          }
          el.addEventListener('keypress', checkValue)
        }
      }
    },
    data: () => ({
      minCardYear: new Date().getFullYear(),
      mainCardNumber: '',
      cardNumberMaxLength: 19,
      valueFields: {
        cardName: '',
        cardNumber: '',
        cardMonth: null,
        cardYear: null,
        cardCvv: null
      },
      inputFields: {
        cardNumber: 'v-card-number',
        cardName: 'v-card-name',
        cardMonth: 'v-card-month',
        cardYear: 'v-card-year',
        cardCvv: 'v-card-cvv'
      },
      error: false
    }),
    computed: {
      minCardMonth() {
        if (this.valueFields.cardYear === this.minCardYear) return new Date().getMonth() + 1
        return 1
      }
    },
    watch: {
      cardYear() {
        if (this.valueFields.cardMonth < this.minCardMonth) {
          this.valueFields.cardMonth = ''
        }
      }
    },
    methods: {

      SubmitForm() {
        if (this.valueFields.cardName && this.valueFields.cardNumber.length >= 14  && this.valueFields.cardMonth && this.valueFields.cardYear && this.valueFields.cardCvv.length >= 3) {
          this.active =true
          const redirectPath = this.$route.query.redirect || "/DownloadSection";
          this.$router.push(redirectPath);
          console.log("if deönüyor")

        } else {
          this.$route.params.pathMatch
          this.error = true
          console.log("else deönüyor")
        }
      },






      changeName(e) {
        this.valueFields.cardName = e.target.value
        this.$emit('input-card-name', this.valueFields.cardName)
      },
      changeNumber(e) {
        this.valueFields.cardNumber = e.target.value
        const value = this.valueFields.cardNumber.replace(/\D/g, '')
        // american express, 15 digits
        if ((/^3[47]\d{0,13}$/).test(value)) {
          this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
          this.cardNumberMaxLength = 17
        } 
        else if ((/^3(?:0[0-5]|[68]\d)\d{0,11}$/).test(value)) { // diner's club, 14 digits
          this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
          this.cardNumberMaxLength = 16
        } 
        else if (/^62[0-9]\d*/.test(value)) {
          this.valueFields.cardNumber = value.replace(/(\d{6})/, '$1 ').replace(/(\d{6}) (\d{7})/, '$1 $2 ').replace(
            /(\d{6}) (\d{7}) (\d{6})/, '$1 $2 $3 ').replace(/(\d{5}) (\d{5}) (\d{5}) (\d{4})/, '$1 $2 $3 $4')
          this.cardNumberMaxLength = 21
        }
         else if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
          this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(
            /(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
          this.cardNumberMaxLength = 19
        }
        // eslint-disable-next-line
        if (e.inputType == 'deleteContentBackward') {
          const lastChar = this.valueFields.cardNumber.substring(this.valueFields.cardNumber.length, this.valueFields
            .cardNumber.length - 1)
          // eslint-disable-next-line
          if (lastChar == ' ') {
            this.valueFields.cardNumber = this.valueFields.cardNumber.substring(0, this.valueFields.cardNumber.length - 1)
          }
        }
        if(this.valueFields.cardCvv){
          if(e.target.value == ''  ){
            this.active = false;
          } else {
            this.active = true;
          }
        }

        this.$emit('input-card-number', this.valueFields.cardNumber)
      },
      changeMonth() {
        this.$emit('input-card-month', this.valueFields.cardMonth)
      },
      changeYear() {
        this.$emit('input-card-year', this.valueFields.cardYear)

      },
      changeCvv(e) {
        this.valueFields.cardCvv = e.target.value
        this.$emit('input-card-cvv', this.valueFields.cardCvv)
        // if(this.valueFields.cardNumber){
        //   if(e.target.value == ''  ){
        //     this.active = false;
        //   } else {
        //     this.active = true;
        //     console.log("baqım")

        //   }
        // }
      },
      generateMonthValue(n) {
        return n < 10 ? `0${n}` : n
      },
      toggleMask() {
        this.isCardNumberMasked = !this.isCardNumberMasked
        if (this.isCardNumberMasked) {
          this.maskCardNumber()
        } else {
          this.unMaskCardNumber()
        }
      },
      maskCardNumber() {
        this.valueFields.cardNumberNotMask = this.valueFields.cardNumber
        this.mainCardNumber = this.valueFields.cardNumber
        const arr = this.valueFields.cardNumber.split('')
        arr.forEach((element, index) => {
          if (index > 4 && index < 14 && element.trim() !== '') {
            arr[index] = '*'
          }
        })
        this.valueFields.cardNumber = arr.join('')
      },
      unMaskCardNumber() {
        this.valueFields.cardNumber = this.mainCardNumber
      }
    }
  }
</script>

<style lang="css">
  .active {
    /* border: 1px solid  #1488CC; */
    border-radius: 5px;
    box-shadow: 0 0 0 1px #1488CC;
    color: #2B32B2;
    background: #fff;
  }

  .disabled {
    pointer-events: none;
  }

  .button {
    opacity: .4;
    border: none;
    pointer-events: none;
    transition: .5s;
  }

  .ClassDisabled {
    opacity: 1;
    background-color: blue;
    pointer-events: all;
        transition: .5s;
  }

</style>