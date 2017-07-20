<template lang="html">
     <div class="container">
              <form class="form-horizontal">
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="name">UserName :</label>
                    <div class="col-sm-10">
                     <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="username">
                    </div>
                  </div>
                   <div class="form-group">
                     <label class="control-label col-sm-2" for="email">Email:</label>
                     <div class="col-sm-10">
                       <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
                     </div>
                   </div>
                   <div class="form-group">
                     <label class="control-label col-sm-2" for="pwd" v-model="password">Password:</label>
                     <div class="col-sm-10">
                       <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                     </div>
                   </div>
                   <div class="form-group">
                     <div class="col-sm-offset-2 col-sm-10">
                       <button type="submit" class="btn btn-primary" @click="login" style="width:150px">Submit</button>
                     </div>
                   </div>
            </form>
     </div>
</template>

<script>
export default {
     data () {
          return {
               username: '',
               email: '',
               password: '',
               status: true
          }
     },
     methods: {
          login () {
               let self = this
               axios.post('http://localhost:3000/api/users/signin', {
                    username: self.username,
                    email: self.name,
                    password: self.password
               })
               .then((response) => {
                    self.username = ''
                    self.email = ''
                    localStorage.setItem('token', response.data.token)
                    self.status = false
                    self.reset()
                    alert('SELAMAT DATANG BLOG FULLSTACK DEVELOPER')
                    self.$router.push('/')
               })
               .catch((err) => {
                    console.log(err);
               })
          },
          validdata () {
               if(this.username === '' || this.email === '') {
                    return false
               } else {
                    return true
               }
          },
          reset () {
               this.name = ''
               this.email = ''
               this.password = ''
          }
     }
}
</script>

<style lang="css">
</style>
