function myFunction(){
  var element=document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("bj").classList.toggle("dark-mode2");
}


function dot2d(){
	var a=prompt("please enter the first number of your first vector");
	var b=prompt("please enter the second number of your first vector");
	var c=prompt("please enter the first number of your second vector");
	var d=prompt("please enter the second number of your second vector");
	var aa=a*c+b*d;
	alert("the value of ["+a+","+b+"] dot products ["+c+","+d+"] is "+aa)
}

function dot3d(){
	var a=prompt("please enter the first number of your first vector");
	var b=prompt("please enter the second number of your first vector");
	var c=prompt("please enter the third number of your first vector");
	var d=prompt("please enter the first number of your second vector");
	var e=prompt("please enter the second number of your second vector");
	var f=prompt("please enter the third number of your second vector");
	var aa=a*d+b*e+c*f;
	alert("the value of ["+a+","+b+","+c+"] dot products ["+d+","+e+","+f+"] is "+aa)

}

function cross(){
	var a=prompt("please enter the first number of your first vector");
	var b=prompt("please enter the second number of your first vector");
	var c=prompt("please enter the third number of your first vector");
	var d=prompt("please enter the first number of your second vector");
	var e=prompt("please enter the second number of your second vector");
	var f=prompt("please enter the third number of your second vector");

	var aa=b*f-c*e;
	var bb=c*d-a*f;
	var cc=a*e-b*d;
	alert("the vector you got is ["+aa+","+bb+","+cc+"].")

}





function facee(){
	var c=Math.ceil(Math.random()*10)
	
  switch(c)
  {
   case 1: 
    document.getElementById('demo').innerHTML= "; ;";
  break;
      case 2: 
    document.getElementById('demo').innerHTML= "TT";
  break;
      case 3: 
    document.getElementById('demo').innerHTML= "y( `v. )";
  break;
      case 4: 
    document.getElementById('demo').innerHTML= "(`w`)";
  break;
      case 5: 
    document.getElementById('demo').innerHTML= "(`^`)";
  break;
            case 6: 
    document.getElementById('demo').innerHTML= ":)";
  break;
            case 7: 
    document.getElementById('demo').innerHTML= "(='-') ";
  break;
            case 8: 
    document.getElementById('demo').innerHTML= "OnO";
  break;
      case 9: 
    document.getElementById('demo').innerHTML= "(-|_- )";
  break;
      case 10: 
    document.getElementById('demo').innerHTML= "><";
  break;
     }
 }