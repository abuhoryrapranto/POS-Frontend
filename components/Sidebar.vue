<template>
    <div class="wrapper">
        <div class="side-menu">
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
        </div>
        <div class="page-content">
            <Navbar :fullName="fullName" />
            <div class="container-fluid">
                <Nuxt />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

    data() {
        return {
            fullName: this.$store.state.auth.user ? this.$store.state.auth.user.last_name  : "Twing",
        }
    },

    mounted() {

    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    position: relative;
}
.side-menu {
    overflow-x: hidden;
}
.sidebar-area {
    position: fixed;
    height: 100vh;
    width: 230px;
}
.shop-info {
    padding: 15px 0px 0px 0px;
    border-bottom: 1px solid lightgray;
}
.page-content {
    width: 100%;
    margin-left: 230px;
    background: #f2f2f2;
    min-height: 100vh;
}
</style>