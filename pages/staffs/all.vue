<template>
    <div class="staf-area mt-3">
        <h4 style="color: #3385ff;">Staffs</h4>
    </div>
</template>

<script>
export default {
    middleware: ['auth', 'checkShopOpen'],
}
</script>