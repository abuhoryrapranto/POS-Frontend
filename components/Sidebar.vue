<template>
    <div class="main-div">
        <aside class="side-menu">
            <div class="sidebar-area bg-dark">
                <div class="sidebar-content">
                    <div class="shop-info">
                        <p class="text-white ml-2">Shop Name - Branch Name</p>
                    </div>
                    <div class="sidebar-items">
                        <SideItems />
                    </div>
                </div>
            </div>
        </aside>
        <Navbar :fullName="fullName" />
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName: "Md. Abu Horyra Pranto"
        }
    },
}
</script>

<style scoped>

.side-menu {
    float: left;
}
.sidebar-area {
    height: 100vh;
    width: 230px;
}
.shop-info {
    padding: 15px 0px 0px 0px;
    border-bottom: 1px solid lightgray;
}

</style>