<template>
    <AddProducts />
</template>
<script>
export default {
  middleware: ['auth', 'checkShopOpen'],
  head() {
    return {
      title: 'Add Product'
    }
  },
}
</script>