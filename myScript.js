function submit(){
 var x1=document.getElementById("x1").value;
 
 var x2=document.getElementById("x2").value;
 
 var x3=document.getElementById("x3").value;
 
 var x4=document.getElementById("x4").value;
 
var h1=document.getElementById("h1");
 
var h2=document.getElementById("h2"); 
if(h1.checked){
 var res=0;
 
 res=((x1*(x2-x4))/(x4-x3))
 
 var res1="Required quantity to be purchased: "+Math.round(res)
; 
 var res4=Math.round(res)*x3;
  
var res2="Amount needed : "+res4.toString();


document.getElementById("rslt").innerHTML ="Results:";
  document.getElementById("result").innerHTML = res1;
 
 document.getElementById("result1").innerHTML = res2;}


if(h2.checked){
 var sb=x4/x3;
 
var x5=0;
x5=Math.round(sb);
if(x5>sb){x5-=1;}
var temp = parseInt(x1);
 var res=((x1*x2)+(x3*x5))
/(temp+x5); 
 var res1="Quantity will be purchased : "
+x5; 
  
var res2="Average : "+res.toString();
  document.getElementById("rslt").innerHTML ="Results:";
  document.getElementById("result").innerHTML = res1;
 
  document.getElementById("result1").innerHTML = res2;}


 return ;
}


function myfun1(){

document.getElementById("z1").innerHTML = "Average";

var text= document.getElementById("x4");
text.style.display="inline";
return;

}

function myfun2(){

document.getElementById("z1").innerHTML = "Avaliable Funds";

var text= document.getElementById("x4");
text.style.display="inline";
return;

}
