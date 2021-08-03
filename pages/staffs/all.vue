<template>
    <div class="staf-area mt-3">
        <h4 style="color: #00b359;">Staffs</h4>
    </div>
</template>

<script>
export default {
    middleware: ['auth', 'checkShopOpen'],
}
</script>