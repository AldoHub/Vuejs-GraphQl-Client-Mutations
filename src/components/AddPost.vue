<template>
<div>
  <h2>Add Post component</h2>
  <form @submit="addPost">
      <div class="form-control">
          <label for="postName">Post Title: </label>
          <input v-model="postName" type="text" name="postName" placeholder="name" /> 
      </div>
      <div class="form-control">
          <label for="postDesc">Post Content: </label>
          <textarea v-model="postDesc" name="postDesc"></textarea>
      </div>
    <input type="submit" value="send" />

  </form>
</div>
</template>


<script>
import gql from "graphql-tag";


export default {
   
    data: function(){
        return{
            postName: "",
            postDesc: "",
            
        }
    },
    methods: {
      
        addPost(e){
            let self = this;
            e.preventDefault();
            console.log(self.postName + " : " + self.postDesc);
            self.$apollo.mutate({
                mutation: gql`mutation ($name: String!, $desc: String!){
                    createPost(name: $name, description: $desc){
                        _id
                        name
                        description
                    }
                }`,
                //parameters
                variables:{
                  name: self.postName,
                  desc: self.postDesc
                }
               
            })
            self.postName= "";
            self.postDesc= "";
            
        }
    }
}



</script>
<style scoped>

    form {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 20px;
        
    }
    .form-control{
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin-bottom: 20px;
    }
    label{
        font-size: 1.2rem;
    }

    input, textarea{
        padding: 10px;
        font-family: "poppins";
        border: 1px solid rgb(72, 252, 126);
        border-radius: 5px;
        background: #222;
        color: #eee;
    }
    textarea {
        resize: none;
        height: 200px;
    }
   input[type="submit"]{
       background: rgb(72, 252, 126);
       font-size: 1.1rem;
       color: #111;
       cursor: pointer;
       display: block;
      margin: 0 0 0 auto;
   }

</style>

