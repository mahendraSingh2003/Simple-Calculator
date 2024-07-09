function add(value){ 
    document.getElementById('display').value+=value;
    }
 function cleardisplay(){
        document.getElementById('display').value="";
    }
function  calculate(){
var exp=document.getElementById('display').value;
if(exp.match(/\^+/)){
  exp=exp.replaceAll("^","**");
}
var result=eval(exp);
document.getElementById('display').value=result;
}
function squareRoot(){
    var exp = document.getElementById('display').value;
    var result = Math.sqrt(parseFloat(exp));
    document.getElementById('display').value = result;
}