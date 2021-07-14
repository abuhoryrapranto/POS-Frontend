<template>
    <b-navbar class="navbar" toggleable="sm" type="light" variant="light">
            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown :text="name" right>
                    <b-dropdown-item href="#" class="dropdown-list">Change Password</b-dropdown-item>
                    <hr>
                    <b-dropdown-item href="#" class="dropdown-list" variant="danger">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
    </b-navbar>
</template>

<style scoped>
.navbar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.dropdown-list {
    font-size: 14px;
}
</style>

<script>
export default {

    props: ['fullName'],
    data() {
        return {
            name: this.fullName
        }
    },
    
}
</script>