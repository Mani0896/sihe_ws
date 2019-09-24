<template>

<div class="container"><br><br>
  <img src="../assets/IB.jpg" height="250px" width="500px">
  <h1> <em> Make Your Payment Now! </em> </h1>
<div class="wrapper">
    <center>
<div class="form">
                
                <label>NAME</label><br>
                <input type="text" name="name" id="name" placeholder="Enter name" required="" autofocus=""><br>
                
                 <label>CARD NUMBER</label><br>
                 <input type="text" name="card_number" id="card_number" placeholder="1234 1234 1234" autocomplete="off" required=""><br>            
                 
                  <label>EXPIRY DATE </label><br>
                  <input type="text" name="card_exp_month" id="card_exp_month" placeholder="MM" required=""><br>
                  <input type="text" name="card_exp_year" id="card_exp_year" placeholder="YYYY" required=""> <br>
   
                  <label>CVC CODE</label><br>
                  <input type="text" name="card_cvc" id="card_cvc" placeholder="CVC" autocomplete="off" required=""><br>
                    
                <input type="submit" value="Submit"> 
</div>
</center>
</div>
</div>
</div>
</div>
</template> 
   
<style>
input[type=text], select {
  width: 300px;
  padding: 15px 20px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 200px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.form{
  width: 500px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>   