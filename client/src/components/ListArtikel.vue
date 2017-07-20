<template lang="html">
     <div class="container-fluid">
          <div v-for="artikel in artikels">
               <div class="col-md-4">
                 <div class="thumbnail">
                  <h2>{{ artikel.title }}</h2>
                   <a href="">
                     <img src="../assets/hackers.jpg" alt="Fjords" style="width:100%">
                     <div class="caption">
                         <h4>{{ artikel.content }}
                        </h4>
                     </div>
                   </a>
                 </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     me: 'listartikel',
     props: ['artikels']
}
</script>

<style lang="css">
</style>
