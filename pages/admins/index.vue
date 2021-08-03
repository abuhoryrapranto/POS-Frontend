<template>
<!-- eslint-disable -->
    <div class="mt-3">
        <h4 style="color: #00b359; display: inline-block;">All  Admins</h4>
        
        <b-button v-if="$auth.user.is_super == 1" v-b-modal.modal-center size="sm" variant="primary" class="float-right">Add New</b-button>

        <b-modal id="modal-center" centered no-fade title="Add New Admin" header-text-variant="info" hide-footer> 
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
            <small v-if="errors.phone"  class="form-text text-danger">{{errors.phone[0]}}</small>
            <div class="form-group">
                <label class="form-label">Password:</label>
                <input type="password" class="form-control" v-model="admin.password" placeholder="Enter password">
                <small v-if="errors.password"  class="form-text text-danger">{{errors.password[0]}}</small>
            </div>
            <button class="btn btn-success btn-sm" @click.prevent="saveNewAdmin"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-modal>
        <br>
        <div v-if="loading == true">
            <Spiner />
        </div>
        <b-row>
            <b-col xs="12" sm="6" md="3" v-for="admin in admins" :key="admin.id">
                <div class="card mt-3" style="max-width: 18rem;">
                <img class="card-img-top" src="/admin.png" alt="Flab POS Admin" height="300">
                <div class="card-body">
                    <h5 class="card-title">{{admin.first_name}} {{admin.last_name}}</h5>
                    <p class="card-text">{{admin.is_super == 1 ? 'Super Admin' : 'General Admin'}}</p>
                    <b-dropdown size="sm" id="dropdown-dropup" dropup text="Actions" variant="info" class="m-2">
                        <NuxtLink v-if="admin.id == $auth.user.id || $auth.user.is_super == 1" @click.native="profile(admin.uuid)" to="/" class="link"><b-dropdown-item><span class="text-info">Profile</span></b-dropdown-item></NuxtLink>
                        <div v-if="$auth.user.is_super == 1">
                            <NuxtLink v-if="admin.id != $auth.user.id" to="/" class="link"><b-dropdown-item><span class="text-warning">Reset Password</span></b-dropdown-item></NuxtLink>
                            <NuxtLink v-if="admin.status == 0 && admin.id != $auth.user.id" @click.native="toggleActive(admin.uuid)" to="/" class="link"><b-dropdown-item><span class="text-success">Active</span></b-dropdown-item></NuxtLink>
                            <NuxtLink v-if="admin.status == 1 && admin.id != $auth.user.id" @click.native="toggleActive(admin.uuid)" to="/" class="link"><b-dropdown-item><span class="text-danger">Deactive</span></b-dropdown-item></NuxtLink>
                        </div>
                    </b-dropdown>
                </div>
            </div> 
            </b-col>
        </b-row>   
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
                phone: '',
                password: ''
            },
            isd: '',
            serverMessage: '',
            admins: {},
            errors: {},
            loading: true
        }
    },
    created() {
        this.getMyCountry();
        this.getAllAdmins();
    },
    methods: {
        async getMyCountry() {
            await this.$axios.$get('/admins/my-country')
            .then(response => {
                if(response.status_code == 200) {
                    this.isd = response.data.isd;
                } 
                else {
                    this.countries = '';
                }
            })
        },
        
        async saveNewAdmin() {
            try {

                await this.$axios.$post('/admins/save-new-admin', this.admin)
                .then(response => {
                    if(response.status_code == 200) {
                        this.$bvModal.hide('modal-center');
                        this.serverMessage = response.message;
                        this.getAllAdmins();
                        this.admin = {};
                    }
                })

            } catch(err) {
                this.errors = err.response.data.errors || {};
            }
            
        },

        async getAllAdmins() {
            await this.$axios.$get('/admins/all-admins')
            .then(response => {
                if(response.status_code == 200) {
                    this.loading = false;
                    this.admins = response.data;
                } 
                else {
                    this.admins = {};
                }
            })
        },

        async toggleActive(uuid) {
            await this.$axios.$get('/admins/admin-active-toggle/'+uuid)
            .then(response => {
                if(response.status_code == 200) {
                    this.serverMessage = response.message;
                    this.getAllAdmins();
                }
            })
        },

        profile(uuid) {
            this.$router.push({path: `/admins/${uuid}`});
        }
    }
}
</script>