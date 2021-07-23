<template>
  <div class="main-div mt-3">
    <h4 style="color: #3385ff;">Dashboard {{todos}}</h4>
    <DashboardInfo />
    <br>
    <Chart />
  </div>
</template>
<style scoped>

</style>
<script>
import { mapMutations } from 'vuex'
export default {
  middleware: ['auth', 'checkShop'],
  head() {
    return {
      title: "Dashboard"
    }
  },
   computed: {
    todos () {
      return this.$store.state.shop;
    }
  },
}
</script>
