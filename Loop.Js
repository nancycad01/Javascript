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
}

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
    
    }

function GetResultFun()
{

    var text= "welcome to welcome javascript to program organized by brightskills and brightskills welcomes to you once again";
    
    var output=text.toUpperCase();
    console.log(output);
    var output=text.toLowerCase();
    console.log(output);
    
    var output=text.slice(0,4);
    console.log(output);
    
    var output=text.slice(-10);
    console.log(output);
    
    
    var output=text.substring(0,4);
    console.log(output);
    var output=text.substring(-10);
    console.log(output);
    
    var output=text.charAt(0);
    console.log(output);
    
    var output=text.charCodeAt(0);
    console.log(output);
    
    var output=text.startsWith("w");
    console.log(output);
    
    
    var output=text.endsWith("n");
    console.log(output);
    
    
    var output=text.replace('welcome', 'hi');
    console.log(output);
    
    var output=text.replaceAll('welcome', 'hi');
    console.log(output);
    
    var number="5";
    number=number.padStart(5,"B");
    console.log(number);
    
    var number="5";
    number=number.padEnd(5,"B");
    console.log(number);
    
    
    //split
    
    console.table(text.split(" "));
    
    console.log(text.length);
    var text1=text.trim();
    console.log(text1.length);

}
    
    GetResultFun();

*/
    function GetResultFun(){
        var namelist = ["Nancy","Dinesh","Pavi","Karthick","Alex","sandy","Basheer"];

        console.log(namelist);
        console.log(namelist);
        // console.table(namelist[0]);
        //console.table(namelist[1]);
        //console.table(namelist[2]);
        //console.table(namelist[3]);
        //console.table(namelist[4]);
        //console.table(namelist[5]);
        //console.table(namelist[6]);
        //console.table(namelist[7]);

        for (var a=0; a<namelist.length;a++)
        {
            console.log(namelist[a]);
        }
        console.clear();
        var result=namelist.forEach(function(name1){
            console.log(name1);
        })
        console.log("arrow output");

        var result=namelist.forEach(name1=>console.log(name1));

        var namelist = ["Nancy","Dinesh","Pavi","Karthick","Alex","sandy","Basheer"];
        var define1="m";
        console.clear();
        var result=namelist.filter(name1=>name1.startsWith("k")|| name1.endsWith("k") || name1.startsWith(define1))
        console.log(result);

var listofnumbers=[1,2,3,4,5,6,7];
var result=listofnumbers.map(number=>number*2);
console.log(result);


     
    
    var result=listofnumbers.reduce((sum,number)=>sum+=1);
    console.log(result);
    
    console.log(Math.PI);
    console.log(Math.E);
    console.log(2*Math.PI*2);
    var a=6.6;
    console.log(Math.round(6.6));
    console.log(Math.floor(3.5));
    console.log(Math.ceil(7.7));
    console.log(Math.sqrt(6));
    console.log(Math.pow(5,3));
    console.log(Math.floor(Math.random()*20+1000));
    console.log(Math.abs(-7.45));
    console.log(Math.floor(-8.45));
    console.log(Math.min(10,20,30,40,50,60,70));
    console.log(Math.max(70,75,60,65,50,45,40));
    
    }
    
    
    GetResultFun();

