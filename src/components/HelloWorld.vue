<template>
<div>
  
	<pre>
		
	





	




	<h1 align="center"><b>ATTENDANCE TRACKER</b></h1>
	</pre>


	<table id="t1" align="center">
		<tr><td><font size=5 color="lime" ><button class="button">Signup</button></font></td></tr>
    </table>
    <br>
    <table id="t2" align="center">
		<tr><td><font size=5 color="lime" ><button class="button is-primary is-fullwidth is-uppercase">Login</button></font> </td></tr>	
	</table>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
	font-family: Copperplate, "Copperplate Gothic Light", fantasy; 
	color: lime;
	font-size: 50px;
  background-color: black;

}
pre{
  background-color: black;
}
table{
  background-color: black;
}
div{
  background-color: black;
}



.button {
  background-color: transparent;
  border-radius: 15px;
  border-color: lime;           
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

}

.button1 {
  background-color: transparent;
  border-radius: 20px;
  border-color: lime;           
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;

}



.button:hover{


 font-size: 20px;

}

.button1:hover{

	font-size: 40px;
}
</style>
