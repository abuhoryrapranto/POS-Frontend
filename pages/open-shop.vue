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
                        <input type="text" class="form-control" placeholder="Enter shop name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Country</label>
                        <select class="form-control">
                            <option value="">---Select---</option>
                            <option v-for="country in countries">{{country.name}}</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Currency</label>
                        <select class="form-control">
                            <option value="">---Select---</option>
                            <option v-for="currency in currencies">{{currency.name}}</option>
                        </select>
                        </div>
                        <button class="btn btn-success btn-sm float-right pl-3 pr-3">Next</button>
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
    margin-top: 15%;
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
    middleware: ['auth', 'checkShop'],
    head() {
        return {
            title: 'Open Shop'
        }
    },
    data() {
        return {
            countries: {},
            currencies: {}
        }
    },
    created() {
        this.getCountries();
        this.getCurrencies();
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
    }
}
</script>