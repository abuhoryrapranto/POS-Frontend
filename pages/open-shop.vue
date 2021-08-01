<template>
<!-- eslint-disable -->
    <div class="container-fluid main-area">
        <b-row>
            <b-col class="info-area">
                <div class="logo">
                    <img class="img-fluid" src="/logo.svg" alt="Flab POS" width="400">
                    <h4 class="float">POS & Inventory Solution</h4>
                </div>
            </b-col>
            <b-col class="open-shop">
                <div class="content-area">
                    <h4 class="text-center text-white mb-3">Open Your Shop</h4>
                    <b-card class="card">
                        <div class="form-group">
                        <label class="form-label">Name:</label>
                        <input type="text" class="form-control" v-model="shop.name" placeholder="Enter shop name">
                        <small v-if="errors.name"  class="form-text text-danger">{{errors.name[0]}}</small>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" v-model="shop.address" rows="3"></textarea>
                            <small v-if="errors.address"  class="form-text text-danger">{{errors.address[0]}}</small>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Country</label>
                        <select class="form-control" v-model="shop.country">
                            <option value="">---Select---</option>
                            <option v-for="country in countries" :value="country.id">{{country.name}}</option>
                        </select>
                        <small v-if="errors.country"  class="form-text text-danger">{{errors.country[0]}}</small>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Currency</label>
                        <select class="form-control" v-model="shop.currency">
                            <option value="">---Select---</option>
                            <option v-for="currency in currencies" :value="currency.id">{{currency.name}}</option>
                        </select>
                        <small v-if="errors.currency"  class="form-text text-danger">{{errors.currency[0]}}</small>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Timezone</label>
                        <select class="form-control" v-model="shop.timezone">
                            <option value="">---Select---</option>
                            <option v-for="timezone in timezones" :value="timezone.id">{{timezone.name}}</option>
                        </select>
                        <small v-if="errors.timezone"  class="form-text text-danger">{{errors.timezone[0]}}</small>
                        </div>
                        <button class="btn btn-success btn-sm float-right pl-3 pr-3" @click.prevent="openShop">Next</button>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
.open-shop {
    height: 100vh;
    background: #3385ff;
}
.card {
    width: 400px;
    margin: 0 auto;
}
.content-area {
    margin-top: 5%;
}
.form-label{
  color: #00b3b3;
  font-weight: 500;
}
.info-area {
    height: 100vh;
}
.logo {
    position: relative;
    top: 35%;
    left: 25%;
}
</style>

<script>
export default {
    layout: "empty",
    middleware: ['auth', 'accessShop'],
    head() {
        return {
            title: 'Open Shop'
        }
    },
    data() {
        return {
            countries: {},
            currencies: {},
            timezones: {},
            errors: {},
            shop: {
                name: '',
                address: '',
                country: '',
                currency: '',
                timezone: ''
            }
        }
    },
    created() {
        this.getCountries();
        this.getCurrencies();
        this.getTimezones();
    },
    methods: {
        async getCountries() {
            await this.$axios.$get('/all-countries')
            .then(response => {
                if(response.status_code == 200) {
                    this.countries = response.data;
                } 
                else {
                    this.countries = {};
                }
            })
        },

        async getCurrencies() {
            await this.$axios.$get('/all-currencies')
            .then(response => {
                if(response.status_code == 200) {
                    this.currencies = response.data;
                } 
                else {
                    this.currencies = {};
                }
            })
        },

        async getTimezones() {
            await this.$axios.$get('/all-timezones')
            .then(response => {
                if(response.status_code == 200) {
                    this.timezones = response.data;
                } 
                else {
                    this.timezones = {};
                }
            })
        },

        async openShop() {
            try {

                await this.$axios.$post('/shop/open-shop', this.shop)
                .then(response => {
                    if(response.status_code == 201) {
                       this.$router.push({ path: '/dashboard' }); 
                    }
                })

            }catch(err) {
                this.errors = err.response.data.errors || {};
            }
        }
    }
}
</script>