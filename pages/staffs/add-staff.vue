<template>
    <div class="staf-area mt-3">
        <h4 style="color: #00b359;">Add new staff</h4>
        <br>
        <b-card>
            <b-row>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">First Name:</label>
                      <input type="text" class="form-control" placeholder="Enter first name">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Last Name:</label>
                      <input type="text" class="form-control" placeholder="Enter last name">
                    </div>
                    <label class="form-label">Phone:</label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">{{isd}}</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Enter phone number" aria-describedby="basic-addon1">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Email:</label>
                      <input type="text" class="form-control" placeholder="Enter email">
                    </div>
                </b-col>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">Department:</label>
                      <input type="text" class="form-control" placeholder="Enter department name">
                    </div>
                  <div class="form-group">
                      <label class="form-label">NID:</label>
                      <input type="text" class="form-control" placeholder="Enter national identity number">
                    </div>
                  <div class="form-group">
                    <label class="form-label">Address</label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                </b-col>
        </b-row>
        <button class="btn btn-success btn-sm pl-2 pr-2"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
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
                    this.countries = '';
                }
            })
        },
  }
}
</script>