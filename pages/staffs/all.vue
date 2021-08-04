<template>
<!-- eslint-disable -->
    <div class="staf-area mt-3">
        <h4 style="color: #00b359;">Staffs</h4>
        <br>
        <div v-if="loading == true">
            <Spiner />
        </div>
        <div v-else>
            <table class="table table-bordered">
                <thead class="bg-info text-white">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Eamil</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Departemnt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(staff, index) in staffs">
                        <th scope="row">{{(index+1)}}</th>
                        <td>{{staff.first_name}}</td>
                        <td>{{staff.last_name}}</td>
                        <td>{{staff.email ? staff.email : 'N/A'}}</td>
                        <td>{{isd}}{{staff.phone}}</td>
                        <td><span class="bg-success pl-2 pr-2 pt-1 pb-1 text-white rounded">{{staff.department ? staff.department : 'N/A'}}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth', 'checkShopOpen'],
    head() {
        return {
            title: 'All Staffs'
        }
    },
    data() {
        return {
            staffs: {},
            isd: '',
            loading: true
        }
    },
    created() {
        this.getAllStaffs();
        this.getMyCountry();
    },
    methods: {
        async getAllStaffs() {
            await this.$axios.$get('/staffs/all-staffs')
            .then(response => {
                if(response.status_code == 200) {
                    this.loading = false;
                    this.staffs = response.data;
                } 
                else {
                    this.staffs = {};
                }
            })
        },

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
    }
}
</script>