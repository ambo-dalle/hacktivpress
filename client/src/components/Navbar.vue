<template>
     <div class="">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Blog Componet</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><router-link to="/blog">Blog Artikel</router-link></li>
              </ul>
                <div v-if="status" class="">
                     <ul class="nav navbar-nav navbar-right">
                     <li><span class="glyphicon glyphicon-user"></span><router-link to="/signup">Sign Up</router-link></a></li>
                     <li><span class="glyphicon glyphicon-log-in"></span><router-link to="/login">Login</router-link></a></li>
                   </ul>
                </div>
                <div  v-else class="">
                     <button type="submit" class="btn btn-warning"><router-link to="/create">Create Artikel</router-link></button>
                    <button type="submit" class="btn btn-warning" @click="logout">Logout</button>
                </div>
            </div>
          </nav>
     </div>
</template>
<script>
export default{
  name: 'Navbar',
  data () {
   return {
      message: '',
      status: ''
   }
  },
  methods: {
   logout () {
      this.status = true
      localStorage.removeItem('data')
      localStorage.removeItem('token')
      this.$router.push('/')
   }
  }

}
</script>
