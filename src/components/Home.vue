<template>
<div>
  <div class="container">
  <div class="wrapper">
<div class="row">
  <div class="col-3 col-s-3 menu">
    <ul>
     <li> <router-link to="/package"> Coastal Breeze</router-link> </li>
      <li><router-link to="/Package_vijayanagar">Vijayanagar Experience</router-link></li>
      <li>Deccan Dilbaug</li>
      <li>Eastern Seascape </li>
    </ul>
  </div>
   <div class="col-6 col-s-9">
<img src="../assets/train.jpg" height="250px" width="470px">
   </div>
   <div class="col-3 col-s-12">
    <div class="aside">
      <h1><b>Advertising</b></h1>
      <img src="../assets/hotel.jpg" height="130px" width="180px">
      <p>Book Hotel Now & Get 30% Discount!</p>
      <h1>----------------------------</h1>
     <img src="../assets/trip.jpg" height="130px" width="180px">
     <p> Book Your Trip Now! <br> www.WeTravel.com <br> Save 50% off when you book 4 nights or more.</p>

    </div>
  </div>
    </div>
    </div>
</div>
</div>
</template>


<style>
.container{
  width: 100%;
   text-align: center;
   border: 0px solid black;
}
.wrapper{
  border: 0px solid red;
  width: 1000px;
  margin: auto;
  padding: 25px;
}
* {
  box-sizing: border-box;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
[class*="col-"] {
  float: left;
  padding: 10px;
}
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  width: 175px;
  margin-bottom: 7px;
  background-color: #d0d3d4;
  color: #17202a;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #e33449;
   color: #ffffff;
}
.aside {
  background-color: #f4f6f6 ;
  padding: 5px;
  color: #17202a;
  text-align: center;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

</style>
