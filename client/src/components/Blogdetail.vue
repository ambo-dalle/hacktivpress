<template lang="html">
     <div class="">
          <div>
               <div class="col-md-9">
                 <div class="thumbnail">
                  <h2>{{ listartikel.title }}</h2>
                     <img src="../assets/hackers.jpg" style="width:100%">
                     <div class="caption">
                         <h4>{{ listartikel.description }} </h4>
                         <h5>{{ listartikel.author }}</h5>
                     </div>
                   </a>
                   <button type="button" name="button" v-on:click="EditArtikel(listartikel._id)">Edit Artikel</button>
                   <button type="button" name="button" v-on:click="deleteArtikel(listartikel._id)">Delete Artikel</button>

                 </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'blogdetail',
     data () {
       return {
         listartikel: {}
       }
     },
     watch: {
       '$route'  (to, from) {
         this.getArtikel()
       }
     },
     methods: {
       getArtikel () {
         let idartikel = this.$route.params.id
         let self = this
         axios.get('http://localhost:3000/api/artikel/' + idartikel)
              .then((response) => {
                self.listartikel = response.data
              })
            .catch((err) => {
              console.log(err)
            })
       }
     //   deleteArtikel (id) {
     //    //  let id = this.$route.params.id
     //     let self = this
     //     var index = this.listartikels.findIndex(lists => lists._id === id)
     //     self.listartikels.splice(index, 1)
     //     axios.delete(`http://localhost:3000/api/artikels/${id}`)
     //      .then((response) => {
     //        self.msgStatus = true
     //        self.message = response.data.msg
     //      })
     //      .catch((err) => {
     //        console.log(err)
     //      })
     //   }
     },
     created () {
       this.getArtikel()
     }

}
</script>

<style lang="css">
</style>
