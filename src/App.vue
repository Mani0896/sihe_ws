<template>
<div>
<div id="logo-left">
<h1>Logo</h1>
  </div>
<div id="logo-right">
  <h1> South Indian Heritage Express </h1>
</div>
<div id="header">
    <div id="nav">
      <router-link to="/">Home</router-link> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <router-link to="/package">Package</router-link>&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <router-link to="/contactus">Contact us</router-link> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <router-link to="/about">About us</router-link> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
    </div>
</div>
<router-view/>

<div id="footer">
  <p> Copyright &copy;2019 All Rights Reserved.</p>
</div>
</div>
</template>

<style>
#clear{
  clear: both;
}
#header {
  background-color: #e33449;
  padding: 15px;
  color: white;
}

#logo-left {
margin-left: 10px;
border-block: 00px solid red;
display: inline-block;
  height: 45px;
  margin-left: 200px
}

#logo-right{
  float:right;
  display: inline-block;
  height: 45px;
  margin-right: 400px
}

#nav{
  padding-bottom: 0px;
  text-align: center;
  height: 5px;
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
}

#nav a.router-link-exact-active {
  color: whitesmoke ;
}
#nav a:hover {
  background-color: #d0d3d4;
  color:#17202a;

  }
#footer {
  background-color: #e33449;
  padding: 0px;
  color: white;
  text-align:center;
  height: 35px;
  }
  #clear{
    clear: both;
  }
</style>
