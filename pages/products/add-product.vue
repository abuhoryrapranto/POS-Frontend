<template>
    <AddProducts />
</template>
<script>
export default {
  middleware: ['auth', 'checkShopOpen'],
}
</script>