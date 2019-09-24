  <template>
<div>
  <div class="container">
  <div class="wrapper">  
  <div class="row">
  <div class="col-3 col-s-3 menu">
    <ul>
     <li> <router-link to="/package"> Coastal Breeze</router-link> </li>
      <li><router-link to="/Package_vijayanagar">Vijayanagar Experience</router-link></li>
      <li><router-link to="/Package_Deccan">Deccan Dilbaug</router-link></li>
      <li><router-link to="/payment">Eastern Seascape </router-link></li>
    </ul>
  </div>
   <div class="col-6 col-s-9">
  <img src="../assets/train.jpg" height="250px" width="470px">
   </div>
   <div class="col-3 col-s-12">
    <div class="aside"> <br>
     <a href='https://www.wetravel.com/'> <img src="../assets/trip.jpg" height="140px" width="170px"> </a>
     <p> Book Your Trip Now! <br> www.WeTravel.com <br> Save 50% off when you book 4 nights or more.</p>
    </div>
    </div>
    </div>
    </div>
<div class="container">
<div class="wrapper">  
ADFFFF
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
  background-color: #f2f2f2;
  color:;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #e33449;
   color: #f2f2f2;
}
.aside {
  background-color: #f2f2f2;
  padding: 5px;
  color: #17202a;
  text-align: center;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

</style>
