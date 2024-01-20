/*function GetResultFun(){
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
}*/

function GetResultFun(){
    var listofnames=["Nancy","Dinesh","Pavi","Anand" ];

    console.log("length of array listofnames ..", listofnames.length);
    console.log(listofnames[1]);
    console.log(listofnames[2]);
    console.table(listofnames);


    for(let a=0;a<listofnames.length;a++)
    {
        console.log(listofnames[a]);
    }

    console.log("output from for OF");
    for (let name of listofnames)
    {
        console.log(name);
    }

for (let a=0;a<listofnames.length;a++)
{
    console.log(listofnames[a]);
    if(a==2){
        break;
    }
}

}

var listofcars={name:"bmw", price:"1c",mdate:"2020"}

console.log(listofcars);
console.table(listofcars);
console.clear();

for (let property in listofcars)
{
    console.log(property+":"+listofcars[property]);

}


/*
function GetResultFun(){
    var text="welcome to welcome javascript program organized by brightskills and brightskills welyou once again";

    console.log(text.length);
    console.log(text.indexOf("welcome"));
    console.log(text.indexOf("welcome",10));
    console.log(text.lastIndexOf("welcome"));
    console.log(text.search("welcome"));
    let arr=text.search(/welcome/);
    console.log(arr);
    let arr1=text.match(/welcome/);
    console.log(arr1);
    let arr11=text.match(/welcome/gi);
    console.log(arr11);

    console.log(text.slice(19,29));

    console.clear();
    
    let today= new Date();

    console.log(today);
    
    console.log(today.toDateString());
    console.log(today.toLocaleDateString());
    console.log(today.toISOString());
    console.log(today.toLocaleString());
    console.log(today.toString());
    console.log(today.toTimeString());
    console.log(today.toUTCString());
    console.log(today.getFullYear());
    console.log(today.getDate());
    console.log(today.getHours());
    console.log(today.getMilliseconds());
    console.log(today.getSeconds());
    
    console.log(today.getMonth());
    
    var month=["jan", "feb", "mar", "apr" ];
    console.log(month[today.getMonth()]);
    
    let dob=new Date("2004-12-05");
    console.log(dob);
    
    
    let age =today.getFullYear()-dob.getFullYear();
    console.log(age);
    
    }*/

GetResultFun();
