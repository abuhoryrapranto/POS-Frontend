<template>
    <div class="mt-3">
        <h4 style="color: #3385ff;">All  Admins</h4>
        <div class="card mt-3" style="width: 18rem;">
        <img class="card-img-top" src="/admin.png" alt="Flab POS Admin" height="300">
        <div class="card-body">
            <h5 class="card-title">Md. Abu Horyra Pranto</h5>
            <p class="card-text">General Admin</p>
            <b-dropdown size="sm" id="dropdown-dropup" dropup text="Actions" variant="info" class="m-2">
                <NuxtLink to="/" class="link"><b-dropdown-item>Profile</b-dropdown-item></NuxtLink>
                <NuxtLink to="/" class="link"><b-dropdown-item>Reset Passowrd</b-dropdown-item></NuxtLink>
                <NuxtLink to="/" class="link"><b-dropdown-item>Active</b-dropdown-item></NuxtLink>
                <NuxtLink to="/" class="link"><b-dropdown-item>Deactive</b-dropdown-item></NuxtLink>
            </b-dropdown>
        </div>
    </div>
    </div>
</template>
<style scoped>
.link {
    text-decoration: none;
}
</style>