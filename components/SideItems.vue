<template>
<!-- eslint-disable -->
    <div class="item-name mt-3">
        <div v-for="(item, index) in items">
           <div class="item-link" v-if="item.data != ''" @click="item.active = !item.active">
                <i :class="item.icon" aria-hidden="true"></i> <span class="ml-2">{{index}}</span>
               <span class="float-right" v-if="item.data != ''">
                   <i class="fa fa-angle-left" aria-hidden="true" v-if="item.active == false"></i>
                   <i class="fa fa-angle-down" aria-hidden="true" v-if="item.active"> </i>
                </span> 
            </div>
            <div v-else>
                <NuxtLink class="link" :to="item.parentlink">
                    <div class="item-link">
                        <i :class="item.icon" aria-hidden="true"></i> <span class="ml-2">{{index}}</span>
                    </div>
                    
                </NuxtLink>
            </div>
            <div  v-show="item.active" v-if="item.data  != '' && child.show " v-for="child in item.data">
                <NuxtLink :to="child.link" class="link">
                    <p class="child-item-link"> {{child.label}} </p>
                </NuxtLink> 
            </div>
           
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
    padding: 5px 35px;
    border-left: 5px solid tomato;
    color: white;
    font-size: 13px;
}
.child-item-link:hover {
    background: tomato;
    cursor: pointer;
    color: white;
}
.link{
    color: white;
    text-decoration: none;
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
                        icon: "fa fa-tachometer",
                        parentlink: "/dashboard"
                    },
                    "Admins" : {
                        data: [],
                        active:false,
                        icon: "fa fa-user",
                        parentlink: "/admins"
                    },
                    "Staffs" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Staffs List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Staffs",
                                    link: "/",
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
                                    link: "/products/add-product",
                                    show: true
                            },
                            {
                                    label: "Products List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Products Brands",
                                    link: "/products/brands",
                                    show: true
                            },
                            {
                                    label: "Product Types",
                                    link: "/products/types",
                                    show: true
                            },
                            {
                                    label: "Products Units",
                                    link: "/products/units",
                                    show: true
                            },
                            {
                                    label: "Deleted Products",
                                    link: "/",
                                    show: false
                            }
                        ],
                        active:false,
                        icon: "fa fa-shopping-bag"
                    },
                    "Customers" : {
                        data: [],
                        active:false,
                        icon: "fa fa-address-card-o",
                        parentlink: "/"
                    },
                    "Suppliers" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Supplier List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Supplier",
                                    link: "/",
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
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Purchase List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Puchase",
                                    link: "/",
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
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Invoice List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Invoice",
                                    link: "/",
                                    show: false
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-files-o"
                    },
                    "Reports" : {
                        data: [],
                        active:false,
                        icon: "fa fa-file-pdf-o",
                        parentlink: "/"
                    },
                    "Branch Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-cogs",
                        parentlink: "/"
                    },
                    "Shop Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-wrench",
                        parentlink: "/"
                    },
                
                };
                this.items = data;
            }

            else if(this.isSuper == true) {
                let data = {
                    "Dashboard" : {
                        data: [],
                        active:false,
                        icon: "fa fa-tachometer",
                        parentlink: "/"
                    },
                    "Admins" : {
                        data: [],
                        active:false,
                        icon: "fa fa-user",
                        parentlink: "/admins"
                    },
                    "Staffs" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Staffs List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Staffs",
                                    link: "/",
                                    show: true
                            }
                        ],
                        active:false,
                        icon: "fa fa-users"
                    },
                    "Products" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/products/add-product",
                                    show: true
                            },
                            {
                                    label: "Products List",
                                    link: "",
                                    show: true
                            },
                            {
                                    label: "Products Brands",
                                    link: "/products/brands",
                                    show: true
                            },
                            {
                                    label: "Product Types",
                                    link: "/products/types",
                                    show: true
                            },
                            {
                                    label: "Products Units",
                                    link: "/products/units",
                                    show: true
                            },
                            {
                                    label: "Deleted Products",
                                    link: "/",
                                    show: true
                            }
                        ],
                        active:false,
                        icon: "fa fa-shopping-bag"
                    },
                    "Customers" : {
                        data: [],
                        active:false,
                        icon: "fa fa-address-card-o",
                        parentlink: "/"
                    },
                    "Suppliers" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Supplier List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Supplier",
                                    link: "/",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-industry"
                    },
                    "Purchase" : {
                        data: [
                            {
                                    label: "Add New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Purchase List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Puchase",
                                    link: "/",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-shopping-basket"
                    },
                    "Invoices" : {
                        data: [
                            {
                                    label: "Create New",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Invoice List",
                                    link: "/",
                                    show: true
                            },
                            {
                                    label: "Deleted Invoice",
                                    link: "/",
                                    show: true
                            },
                            
                        ],
                        active:false,
                        icon: "fa fa-files-o"
                    },
                    "Reports" : {
                        data: [],
                        active:false,
                        icon: "fa fa-file-pdf-o",
                        parentlink: "/"
                    },
                    "Branch Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-cogs",
                        parentlink: "/"
                    },
                    "Shop Settings" : {
                        data: [],
                        active:false,
                        icon: "fa fa-wrench",
                        parentlink: "/"
                    },
                
                };
                this.items = data;
            }

            
        }
    },
}
</script>