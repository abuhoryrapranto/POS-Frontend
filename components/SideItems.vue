<template>
<!-- eslint-disable -->
    <div class="item-name mt-3">
        <div v-for="(item, index) in items">
           <p class="item-link" @click="item.active = !item.active">
                <i :class="item.icon" aria-hidden="true"></i> <span class="ml-2">{{index}}</span>
               <span class="float-right" v-if="item.data != ''">
                   <i class="fa fa-angle-left" aria-hidden="true" v-if="item.active == false"></i>
                   <i class="fa fa-angle-down" aria-hidden="true" v-if="item.active"> </i>
                </span> 
            </p>
           <p class="child-item-link" v-show="item.active" v-if="item.data  != '' && child.show " v-for="child in item.data">
               {{child.label}}
            </p>
        </div>
    </div>
</template>

<style scoped>
.item-name {
    font-size: 14px;
}

.item-link {
    margin-bottom: 0px;
    padding: 8px 10px;
    color: lightgray;
}
.item-link:hover {
    background: #1a75ff;
    cursor: pointer;
    color: white;
}
.child-item-link {
    margin-bottom: 0px;
    padding: 3px 35px;
    border-left: 5px solid tomato;
    color: white;
    font-size: 13px;
}
.child-item-link:hover {
    background: tomato;
    cursor: pointer;
    color: white;
}
</style>

<script>
export default {
    data() {
        return {
            items: [],
            isSuper: false
        }
    },

    created() {
        this.getItems();
    },

    methods: {
        getItems() {
            if(this.isSuper == false) {
                let data = {
                    "Dashboard" : {
                        data: [],
                        active:false,
                        icon: "fa fa-tachometer"
                    },
                    "Admins" : {
                        data: [],
                        active:false,
                        icon: "fa fa-user"
                    },
                    "Staffs" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Staffs List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Staffs",
                                    link: "",
                                    show: false
                            }
                        ],
                        active:false,
                        icon: "fa fa-users"
                    },
                    "Products" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products Brands",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Product Types",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products Units",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Products",
                                    link: "",
                                    show: false
                            }
                        ],
                        active:false,
                        icon: "fa fa-shopping-bag"
                    },
                    "Customers" : {
                        data: [],
                        active:false,
                        icon: "fa fa-address-card-o"
                    },
                    "Suppliers" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Supplier List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Supplier",
                                    link: "",
                                    show: false
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-industry"
                    },
                    "Purchase" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Purchase List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Puchase",
                                    link: "",
                                    show: false
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-shopping-basket"
                    },
                    "Invoices" : {
                        data: [
                            {
                                    label: "Create New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Invoice List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Invoice",
                                    link: "",
                                    show: false
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-files-o"
                    },
                    "Reports" : {
                        data: [],
                        active:false,
                        icon: "fa fa-file-pdf-o"
                    },
                    "Branch Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-cogs"
                    },
                    "Shop Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-wrench"
                    },
                
                };
                this.items = data;
            }

            else if(this.isSuper == true) {
                let data = {
                    "Dashboard" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                    "Admins" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                    "Staffs" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Staffs List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Staffs",
                                    link: "",
                                    show: true
                            }
                        ],
                        active:false,
                        icon: ""
                    },
                    "Products" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products Brands",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Product Types",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products Units",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Products",
                                    link: "",
                                    show: true
                            }
                        ],
                        active:false,
                        icon: ""
                    },
                    "Customers" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                    "Suppliers" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Supplier List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Supplier",
                                    link: "",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: ""
                    },
                    "Purchase" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Purchase List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Puchase",
                                    link: "",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: ""
                    },
                    "Invoices" : {
                        data: [
                            {
                                    label: "Create New",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Invoice List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Deleted Invoice",
                                    link: "",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: ""
                    },
                    "Reports" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                    "Branch Settings" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                    "Shop Settings" : {
                        data: [],
                        active:false,
                        icon: ""
                    },
                
                };
                this.items = data;
            }

            
        }
    },
}
</script>