<template>
  <div class="main-div mt-3">
    <h4 style="color: #00b359;">Dashboard</h4>
    <DashboardInfo />
    <br>
    <Chart />
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  middleware: ['auth', 'checkShopOpen'],
  head() {
    return {
      title: "Dashboard"
    }
  }
}
</script>
