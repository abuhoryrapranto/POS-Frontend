<template>
    <div class="container-fluid main-area">
        <b-row>
            <b-col class="info-area">
                <div class="logo">
                    <img src="/logo.svg" alt="Flab POS" width="400">
                    <h4 class="float">POS & Inventory Solution</h4>
                </div>
            </b-col>
            <b-col class="open-shop">
                <div class="content-area">
                    <h4 class="text-center text-white">Open Your Shop</h4>
                    <b-card class="card">
                        <div class="form-group">
                        <label class="form-label">Name:</label>
                        <input type="text" class="form-control" placeholder="Enter shop name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Country</label>
                        <select class="form-control">
                            <option value="">---Select---</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <label class="form-label">Currency</label>
                        <select class="form-control">
                            <option value="">---Select---</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
.open-shop {
    height: 100vh;
    background: #3385ff;
}
.card {
    width: 400px;
    margin: 0 auto;
}
.content-area {
    margin-top: 15%;
}
.form-label{
  color: #00b3b3;
  font-weight: 500;
}
.info-area {
    height: 100vh;
}
.logo {
    position: relative;
    top: 35%;
    left: 25%;
}
</style>

<script>
export default {
    layout: "empty"
}
</script>