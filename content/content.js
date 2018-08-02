// Write all your JavaScript and JQuery code in this file! 
var num = 0
$("#counter").on("click",function(){
	num++
	$("h1").eq(1).html(num)
})
$("#reset").on("click",function(){
	num = 0
	$("h1").eq(1).html(num)
})