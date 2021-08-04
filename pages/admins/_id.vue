<template>
<!-- eslint-disable -->
    <div class="mt-3">
        <h4 style="color: #00b359;">Profile</h4>
        <div v-if="loading == true">
            <Spiner />
        </div>
        <div class="update-fileds" v-else>
            <b-row>
                <b-col md="7">
                    <b-card>
                <div class="form-group">
                <label class="form-label">First Name:</label>
                <input type="text" class="form-control" v-model="admin.first_name" placeholder="Enter first name">
                <small v-if="errors.first_name"  class="form-text text-danger">{{errors.first_name[0]}}</small>
            </div>
            <div class="form-group">
                <label class="form-label">Last Name:</label>
                <input type="text" class="form-control" v-model="admin.last_name" placeholder="Enter last name">
                <small v-if="errors.last_name"  class="form-text text-danger">{{errors.last_name[0]}}</small>
            </div>
            <div class="form-group">
                <label class="form-label">Email:</label>
                <input type="email" class="form-control" v-model="admin.email" placeholder="Enter email address">
                <small v-if="errors.email"  class="form-text text-danger">{{errors.email[0]}}</small>
            </div>

            <label class="form-label">Phone:</label>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">{{isd}}</span>
            </div>
            <input type="text" class="form-control" placeholder="Enter phone number" v-model="admin.phone" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <small v-if="errors.phone"  class="form-text text-danger mb-1">{{errors.phone[0]}}</small>
            <button class="btn btn-success btn-sm" @click.prevent="updateProfile"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
            </b-card>
                </b-col>
                <b-col md="5">
                    
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<style scoped>
.link {
    text-decoration: none;
}
.form-label{
  color: #3385ff;
  font-weight: 500;
}
</style>

<script>
export default {
    middleware: ['auth', 'checkShopOpen'],
    head() {
        return {
            title: 'Admins'
        }
    },
    data() {
        return {
            admin: {
                first_name: '',
                last_name: '',
                email: '',
                phone: ''
            },
            isd: '',
            serverMessage: '',
            errors: {},
            loading: true
        }
    },
    created() {
        this.getMyCountry();
        this.getProfileInfo();
    },
    methods: {
        async getMyCountry() {
            await this.$axios.$get('/admins/my-country')
            .then(response => {
                if(response.status_code == 200) {
                    this.isd = response.data.isd;
                } 
                else {
                    this.isd = '';
                }
            })
        },

        async getProfileInfo() {
            await this.$axios.$get('/admins/profile/'+this.$route.params.id)
            .then(response => {
                if(response.status_code == 200) {
                    this.loading = false;
                    this.admin.first_name = response.data.first_name;
                    this.admin.last_name = response.data.last_name;
                    this.admin.email = response.data.email;
                    this.admin.phone = response.data.phone;
                }
            })
        },

        async updateProfile() {
            try {
                await this.$axios.$put('/admins/update-profile/'+this.$route.params.id, this.admin)
                .then(response => {
                    if(response.status_code == 200) {
                        this.getProfileInfo();
                        this.errors = {};
                    }
                })
            } catch(err) {
                this.errors = err.response.data.errors || {};
            }
        }
    }
}
</script>