array1=[]
function Submit(){
na1=document.getElementById("n1").value;
na2=document.getElementById("n2").value;
na3=document.getElementById("n3").value;
na4=document.getElementById("n4").value;
array1.push(na1);
array1.push(na2);
array1.push(na3);
array1.push(na4);
document.getElementById("display_name").innerHTML=array1
document.getElementById("submit").style.display="none"
document.getElementById("sort").style.display="inline-block"
}
function sort(){
array1.sort()
document.getElementById("display_name").innerHTML=array1
}