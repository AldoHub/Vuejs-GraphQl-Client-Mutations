<template>
  <div id="app">
    <nav>
      <ul>
       <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/posts">Posts</router-link></li>
      <li><router-link to="/addpost">Add Post</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
 
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    background: #333;
    font-family: poppins;
    color: #eee;
 }
 h2 {
    border-bottom: 2px solid rgb(72, 252, 126);
    text-transform: uppercase;
  }
  #app {
    width: 70%;
    margin: 0 auto;
   background: #222;
    -webkit-box-shadow: 0px 10px 24px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 24px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 24px -6px rgba(0,0,0,0.75);
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-gap: 30px;
    
  }


  nav {
    margin: 0;
    padding: 0px;
    background:  rgb(72, 252, 126);
  }
  nav ul {
    padding: 0;
    margin: 0;
  }
  nav ul li{
    list-style: none;
    display: inline-block;
    margin: 0px;
    border-bottom:1px solid #111;
    width: 100%
  }
  nav ul li a {
    display: block;
    padding: 10px;
    color: #111;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
  }

  input, textarea {
    font-family: poppins;
  }
 


</style>
