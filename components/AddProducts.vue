<template>
    <div class="main-area mt-2">
        <h4>Add Product</h4>
        <b-card>
            <b-row>
                <b-col>
                    <div role="group">
                        <label for="input-live">Product Code:</label>
                        <b-form-input
                        id="input-live"
                        v-model="code"
                        placeholder="Enter product code"
                        trim
                        ></b-form-input>
                    </div>
                    <div role="group">
                        <label for="input-live">Product Title:</label>
                        <b-form-input
                        id="input-live"
                        v-model="title"
                        placeholder="Enter product code"
                        trim
                        ></b-form-input>
                    </div>
                </b-col>
                <b-col>
                    <div role="group">
                        <label for="input-live">Product Title:</label>
                        <b-form-input
                        id="input-live"
                        v-model="title"
                        placeholder="Enter product code"
                        trim
                        ></b-form-input>
                    </div>
                </b-col>
        </b-row>
        </b-card>
    </div>
</template>

<style scoped>

</style>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    }
  }
</script>