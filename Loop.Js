function GetResultFun(){
    var inputValue=document.getElementById("tb_value").value;
    console.log(inputValue);

    inputValue=Number(inputValue);

    while(inputValue<20) 
{

console.log("input value"+ inputValue +"is smaller than 20"); 
inputValue++;
}

do{
    console.log("input value in do while for  "+ inputValue + " is smaller than 20 "); 
    inputValue++;
}
while(inputValue<0)

for(inputValue;inputValue <30; inputValue++){
    console.log("input value in for loop  "+ inputValue + " is smaller than 20 "); 
}
}