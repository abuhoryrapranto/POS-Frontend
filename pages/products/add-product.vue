<template>
    <AddProducts />
</template>
<script>
export default {
  middleware: ['auth', 'checkShop'],
}
</script>