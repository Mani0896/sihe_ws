<template>
<div>
  <div id ="heading">
<em><h1><strong> South India Heritage Express  </strong></h1></em>
  </div>
<div id="header">
    <div id="nav">
      <router-link to="/">Home</router-link>
       &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <div class="dropdown">
      <router-link to="/package"> Package </router-link>
      &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <div class="dropdown-content">
      <strong>
     <router-link to="/package"> Coastal Breeze </router-link>
     <router-link to="/Package_vijayanagar"> Vijayanagar Experience </router-link>
     <a href="#">Deccan Dilbaug</a>
     <a href="#">Eastern Seascape</a>
      </strong>
      </div>
      </div>
      <router-link to="/contactus">Contact us</router-link> 
      &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
      <router-link to="/about">About us</router-link> 
      &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp
    </div>
</div>
<router-view/>

<div id="footer">
  <h4> Copyright &copy;2019 All Rights Reserved.</h4>
</div>
</div>
</div>
</template>

<style>
#heading {
  font-size: 20px;
  text-align: center;
}
#header {
  background-color: #e33449;
  padding: 15px;
  color: white;
}

#logo-left {
margin-left: 10px;
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

  .dropbtn {
  font-weight: bold;
  padding: 0px;
  border: black 0px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:lightslategrey;
  min-width: 250px;
  z-index: 1;
}

.dropdown-content a {
  color:;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown:hover .dropdown-content {display: block;
}
</style>
