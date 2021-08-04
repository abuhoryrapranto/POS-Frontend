<template>
    <div class="staf-area mt-3">
        <h4 style="color: #00b359; display:inline-block;">Customers</h4>

        <b-button v-b-modal.modal-center size="sm" variant="primary" class="float-right">Add New</b-button>

        <b-modal id="modal-center" centered no-fade title="Add New Customer" header-text-variant="info" hide-footer> 
            <div class="form-group">
                <label class="form-label">Full Name:</label>
                <input type="text" class="form-control" placeholder="Enter full name">
            </div>
            <div class="form-group">
                <label class="form-label">Phone:</label>
                <input type="text" class="form-control" placeholder="Enter phone number">
            </div>
            <div class="form-group">
                <label class="form-label">Email:</label>
                <input type="email" class="form-control" placeholder="Enter email address">
            </div>
            <div class="form-group">
                <label class="form-label">Address</label>
                <textarea class="form-control" rows="2"></textarea>
            </div>
            <button class="btn btn-success btn-sm"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
        </b-modal>
    </div>
</template>

<script>
export default {
    middleware: ['auth', 'checkShopOpen'],
}
</script>