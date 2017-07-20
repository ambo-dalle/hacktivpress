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
              <input v-model="category" type="text" class="form-control" placeholder="category">
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
// import axios from 'axios'
export default {
     name: 'Createartikel',
     data () {
       return {
         title: '',
         content: '',
         author: '',
         category: '',
         listartikels: []
       }
     },
     methods: {
       createArtikel () {
         if (this.validdata()) {
           var self = this
           axios.post('http://localhost:3000/api/artikel', {
             title: self.title,
             content: self.content,
             author: self.author,
             category: self.category
           })
          .then((response) => {
            var data = response.data
            if (data.msg) {
              self.message = data.msg
              self.msgStatus = true
              self.title = ''
              self.content = ''
              self.category = ''
              self.author = ''
            }
            self.status = true
            self.listartikels.push(response.data)
            self.reset()
            alert('Data Artikel Berhasil di Submit')
            self.$router.push('/blog')
          })
          .catch((err) => {
            console.log(err)
          })
         }
       },
       validdata () {
         if (this.title === '' || this.content === '' || this.author === '') {
           return false
         } else {
           return true
         }
       },
       reset () {
         this.title = ''
         self.category = ''
         this.content = ''
         this.author = ''
       }
     }

}
</script>

<style lang="css">
</style>
