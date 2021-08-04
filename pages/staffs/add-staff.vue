<template>
<!-- eslint-disable -->
    <div class="staf-area mt-3">
        <h4 style="color: #00b359;">Add new staff</h4>
        <br>
        <b-card>
            <b-row>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">First Name:</label>
                      <input type="text" class="form-control" v-model="staff.first_name" placeholder="Enter first name">
                      <small v-if="errors.first_name"  class="form-text text-danger">{{errors.first_name[0]}}</small>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Last Name:</label>
                      <input type="text" class="form-control" v-model="staff.last_name" placeholder="Enter last name">
                      <small v-if="errors.last_name"  class="form-text text-danger">{{errors.last_name[0]}}</small>
                    </div>
                    <label class="form-label">Phone:</label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">{{isd}}</span>
                    </div>
                    <input type="text" class="form-control" v-model="staff.phone" placeholder="Enter phone number" aria-describedby="basic-addon1">
                    </div>
                    <small v-if="errors.phone"  class="form-text text-danger">{{errors.phone[0]}}</small>
                    <div class="form-group">
                      <label class="form-label">Email:</label>
                      <input type="text" class="form-control" v-model="staff.email" placeholder="Enter email">
                      <small v-if="errors.email"  class="form-text text-danger">{{errors.email[0]}}</small>
                    </div>
                </b-col>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">Department:</label>
                      <input type="text" class="form-control" v-model="staff.department" placeholder="Enter department name">
                    </div>
                  <div class="form-group">
                      <label class="form-label">NID:</label>
                      <input type="text" class="form-control" v-model="staff.nid" placeholder="Enter national identity number">
                    </div>
                  <div class="form-group">
                    <label class="form-label">Address</label>
                    <textarea class="form-control" v-model="staff.address" rows="4"></textarea>
                    <small v-if="errors.address" class="form-text text-danger">{{errors.address[0]}}</small>
                  </div>
                </b-col>
        </b-row>
        <button class="btn btn-success btn-sm pl-2 pr-2" @click.prevent="saveStaff"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-card>
    </div>
</template>

<style scoped>
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
      title: 'Add Staff'
    }
  },
  data() {
    return {
      staff: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        department: '',
        nid: '',
        address: ''
      },
      errors: {},
      isd: ''
    }
  },
  created() {
    this.getMyCountry();
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
        async saveStaff() {
            try {
                await this.$axios.$post('/staffs/save-new-staff', this.staff)
                .then(response => {
                    if(response.status_code == 201) {
                        this.staff = {};
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