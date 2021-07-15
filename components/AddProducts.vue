<template>
    <div class="main-area mt-3">
        <h4 style="color: #3385ff;">Add Product</h4>
        <br>
        <b-card>
            <b-row>
                <b-col>
                    <div class="form-group">
                      <label class="form-label">Code:</label>
                      <input type="text" class="form-control" placeholder="Enter product code">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Title:</label>
                      <input type="text" class="form-control" placeholder="Enter product title">
                    </div>
                     <div class="form-group">
                      <label class="form-label">Select Brand</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Select Type</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Select Unit</label>
                      <select class="form-control">
                        <option value="">---Select---</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                </b-col>
                <b-col>
                  <div class="form-group">
                    <label class="form-label">Image</label>
                    <input type="file" class="form-control-file">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" rows="5"></textarea>
                  </div>
                    <div class="form-group">
                      <label class="form-label">Unit Price:</label>
                      <input type="text" class="form-control" placeholder="Enter product unit price">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Total Stock:</label>
                      <input type="text" class="form-control" placeholder="Enter product total stock">
                    </div>
                </b-col>
        </b-row>
        <button class="btn btn-success btn-sm pl-2 pr-2"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-card>
    </div>
</template>

<style scoped>
.form-label{
  color: #3385ff;
  font-weight: 500;
}
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