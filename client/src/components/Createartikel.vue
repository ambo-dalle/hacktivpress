<template lang="html">
     <div class="container">
      <div class="row">
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
          <div class="alert alert-success" id="createsuccess" role="alert" style="display:none;">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Success create!</strong>
          </div>
          <div class="alert alert-warning" id="createwarning" role="alert" style="display:none;">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong> input field.
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <input v-model="title" type="text" class="form-control" placeholder="Title">
              <br>
              <select required>
                 <option value="">Select Category</option>
                 <option value="kesehatan">Kesehatan</option>
                 <option value="politik">Politik</option>
                 <option value="nasional">Nasional</option>
                 <option value="pendidikan">Pendidikan</option>
               </select>
              <br>
              <textarea v-model="content" class="form-control" rows="3" placeholder="Content Artikel"></textarea>
              <input v-model="author" type="text" class="form-control" placeholder="Author">

            </div>
            <div class="panel-footer">
              <button @click="createArtikel" type="button" class="btn btn-success">Create</button>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
