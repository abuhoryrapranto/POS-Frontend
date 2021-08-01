<template>
    <div class="brands-area mt-3">
        <h4 style="color: #3385ff;">Types</h4>

        <b-button v-b-modal.modal-center size="sm" variant="primary" class="float-right">Add New</b-button>

        <b-modal id="modal-center" centered no-fade title="Add New Type" header-text-variant="info" hide-footer> 
            <div class="form-group">
                <label class="form-label">Name:</label>
                <input type="text" class="form-control" placeholder="Enter type name">
            </div>
            <button class="btn btn-success btn-sm"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-modal>
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
  middleware: ['auth', 'checkShopOpen'],
}
</script>