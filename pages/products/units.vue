<template>
<!-- eslint-disable -->
    <div class="brands-area mt-3">
      <b-alert style="width: 400px; position: absolute; right: 10px;"
          :show="dismissCountDown"
          dismissible
          variant="success"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
          <p>{{server_message}}</p>
          <b-progress
            variant="success"
            :max="dismissSecs"
            :value="dismissCountDown"
            height="4px"
          ></b-progress>
        </b-alert>
        <h4 style="color: #00b359; display: inline-block;">Units</h4>
        <b-button v-b-modal.modal-center size="sm" variant="primary" class="float-right">Add New</b-button>
        <br>
        <br>
        <div v-if="loading == true">
            <Spiner />
        </div>
        <div v-else>
            <table class="table table-bordered">
                <thead class="bg-info text-white">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(unit, index) in units">
                        <th scope="row">{{(index+1)}}</th>
                        <td>{{unit.name}}</td>
                        <td v-if="unit.status == 1"><span class="bg-success pl-2 pr-2 pt-1 pb-1 text-white rounded">Active</span></td>
                        <td v-else><span class="bg-danger pl-2 pr-2 pt-1 pb-1 text-white rounded">Deactive</span></td>
                        <td>
                          <b-dropdown id="dropdown-1" text="Actions" variant="secondary" size="sm" class="btn-sm">
                            <NuxtLink v-if="unit.status == 1" @click.native="toggle(unit.uuid)" to="/" class="link"><b-dropdown-item variant="danger">Deactive</b-dropdown-item></NuxtLink>
                            <NuxtLink v-else @click.native="toggle(unit.uuid)" to="/" class="link"><b-dropdown-item variant="success">Active</b-dropdown-item></NuxtLink>
                            <b-dropdown-item @click="updateDialog(unit.name, unit.uuid)">Update</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item  @click="deleteUnit(unit.uuid)"><span class="text-warning">Delete</span></b-dropdown-item>
                          </b-dropdown>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal -->
        <b-modal id="modal-center" centered no-fade title="Add New Unit" header-text-variant="info" @hidden="cancelModal" hide-footer> 
            <div class="form-group">
                <label class="form-label">Name:</label>
                <input type="text" class="form-control" v-model="unit.name" placeholder="Enter unit name">
                <small v-if="errors.name"  class="form-text text-danger">{{errors.name[0]}}</small>
            </div>
            <button v-if="is_update" class="btn btn-success btn-sm" @click.prevent="updateUnit"><i class="fa fa-check" aria-hidden="true"></i> Update</button>
            <button v-else class="btn btn-success btn-sm" @click.prevent="saveUnit"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-modal>
    </div>
</template>

<style scoped>
.form-label{
  color: #3385ff;
  font-weight: 500;
}
.link {
  text-decoration: none;
}
</style>

<script>
export default {
  middleware: ['auth', 'checkShopOpen'],
  head() {
    return {
      title: 'Units'
    }
  },
  data() {
    return {
      units: {},
      unit: {
        name: ''
      },
      loading: true,
      is_update: false,
      update_uuid: '',
      server_message: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      errors: {}
    }
  },
  created() {
    this.getAllUnits();
  },
  methods: {
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
    },
    async toggle(uuid) {
      await this.$axios.$get('/units/toggle-unit/'+uuid)
      .then(response => {
        if(response.status_code == 200) {
          this.server_message = response.message;
          this.showAlert();
          this.getAllUnits();
        }
      })      
    },
    async saveUnit() {
      try {
        await this.$axios.$post('/units/save-new', this.unit)
        .then(response => {
            if(response.status_code == 201) {
              this.$bvModal.hide('modal-center');
              this.server_message = response.message;
              this.showAlert();
              this.getAllUnits(); 
              this.unit = {};
              this.errors = {};
            }
          })
        } catch(err) {
          this.errors = err.response.data.errors || {};
        }
      },

      async updateUnit() {
        try {
        await this.$axios.$put('/units/update-unit/'+this.update_uuid, this.unit)
        .then(response => {
            if(response.status_code == 200) {
              this.$bvModal.hide('modal-center'); 
              this.server_message = response.message;
              this.showAlert();
              this.getAllUnits();
              this.unit = {};
              this.errors = {};
            }
          })
        } catch(err) {
          this.errors = err.response.data.errors || {};
        }
      },

      async deleteUnit(uuid) {
        await this.$axios.$delete('/units/delete-unit/'+uuid)
        .then(response => {
            if(response.status_code == 200) {
              this.server_message = response.message;
              this.showAlert();
              this.getAllUnits();
            } else if(response.status_code == 200) {
              this.server_message = response.message;
              this.showAlert();
              this.getAllUnits();
            }
          })
      },

      updateDialog(name, uuid) {
        this.is_update = true;
        this.$bvModal.show('modal-center'); 
        this.unit.name = name;
        this.update_uuid = uuid;
      },

      cancelModal(e) {
        this.unit.name = '';
        this.is_update = false;
        this.errors = {};
      },

      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
  }
}
</script>