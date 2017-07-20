<template lang="html">
     <div class="container-fluid">
          <div class="navbar">
            <div class="alert alert-danger" id="registerfailed" role="alert" style="display:none;">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Register Failed !</strong> {{message}}.
            </div>
            <div class="alert alert-success" id="registersuccess" role="alert" style="display:none;">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Register Success</strong> {{message}}.
            </div>
          </div>

          <!-- Form Register -->
          <div id="register">
               <div class="row">
                     <div class="col-lg-10" style="background-color:lightblue">
                          <h1>Form Register</h1>
                          <hr>
                       <!-- <form> -->
                         <div class="form-group">
                           <label for="name">UserName:</label>
                           <input v-model="username" type="text" class="form-control" name="username" placeholder="input your username">
                         </div>
                         <div class="form-group">
                           <label for="email">Email:</label>
                           <input v-model="email" type="text" class="form-control" name="email" placeholder="input your email">
                         </div>
                         <div class="form-group">
                           <label for="password">Password:</label>
                           <input v-model="password" type="password" class="form-control" name="password" placeholder="input your password">
                         </div>
                         <br>
                         <button v-on:click="onRegister" type="submit" class="btn btn-success" style="width:250px; height:40px; align:center;"><b>Submit</b></button>
                       <!-- </form> -->
                     </div>
               </div>
          </div>
     </div>
</template>

<script>
// import axios from 'axios'
export default {
     name: 'signup',
     data () {
          return {
               username: '',
               email: '',
               password: '',
               message: '',
               status: true
          }
     },
     methods: {
          onRegister () {
               if(this.validdata()) {
                    let self = this
                    axios.post('http://localhost:3000/api/users/signup', {
                         username: self.username,
                         email: self.email,
                         password: self.password
                    })
                    .then((response) => {
                         var data = response.data
                         if(data.msg) {
                              self.message = data.msg
                              self.msgStatus = true
                              self.username = ''
                              self.email = ''
                              self.password = ''
                         }
                         self.status = true
                         self.reset()
                         self.$router.push('/')
                    })
                    .catch((err) => {
                         console.log(err);
                    })
               }
          },
          validdata () {
               if(this.name === '' || this.email === '' ) {
                    return false
               } else {
                    return true
               }
          },
          reset () {
               this.username = ''
               this.email = ''
               this.password = ''
          }
     }
}
</script>

<style lang="css">
</style>
