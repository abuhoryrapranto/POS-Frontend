<template>
<!-- eslint-disable -->
    <div class="main-area mt-3">
        <h4 style="color: #00b359;">Add Product</h4>
        <br>
        <b-card>
            <b-row>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">Code:</label>
                      <input type="text" class="form-control" placeholder="Enter product code">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Title:</label>
                      <input type="text" class="form-control" placeholder="Enter product title">
                    </div>
                     <div class="form-group">
                      <label class="form-label">Select Brand</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option v-for="brand in brands" :value="brand.id">{{brand.name}}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Select Type</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option v-for="type in types" :value="type.id">{{type.name}}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Select Unit</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option v-for="unit in units" :value="unit.id">{{unit.name}}</option>
                      </select>
                    </div>
                </b-col>
                <b-col>
                  <!-- <div class="form-group">
                    <label class="form-label">Image</label>
                    <input type="file" class="form-control-file">
                  </div> -->
                    <div class="form-group">
                      <label class="form-label">Unit Price:</label>
                      <input type="text" class="form-control" placeholder="Enter product unit price">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Total Stock:</label>
                      <input type="text" class="form-control" placeholder="Enter product total stock">
                    </div>
                    <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" rows="8"></textarea>
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
  data() {
    return {
      brands: {},
      types: {},
      units: {},
    }
  },
  created() {
    this.getAllBrands();
    this.getAllTypes();
    this.getAllUnits();
  },
  methods: {
    async getAllBrands() {
      await this.$axios.$get('/brands/all-brands')
      .then(response => {
        if(response.status_code == 200) {
          this.loading = false;
          this.brands = response.data;
        } 
        else {
          this.brands = {};
        }
      })      
    },

    async getAllTypes() {
      await this.$axios.$get('/types/all-types')
      .then(response => {
        if(response.status_code == 200) {
          this.loading = false;
          this.types = response.data;
        } 
        else {
          this.types = {};
        }
      })      
    },

    async getAllUnits() {
      await this.$axios.$get('/units/all-units')
      .then(response => {
        if(response.status_code == 200) {
          this.loading = false;
          this.units = response.data;
        } 
        else {
          this.units = {};
        }
      })      
    }
  }
}
</script>