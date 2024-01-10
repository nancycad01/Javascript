console.log("Welcome to javascript")
console.log(15)
console.log(15.15)
console.log({fname:"Nancy",gender:"Female"})
console.table({fname:"Drew",gender:"Female"})
console.log([5,10,2,24,40])
console.table(10,15,25,20);
console.log(true)

var a=15;
let b=10;
const c=14;
console.log(a);
console.log(b);
console.log(c);
a=5.5;
console.log(a);
b=7.5;
console.log(b);

a="Nancy";
console.log(a);
b="Drew"
console.log(b);

a={fname:"Nancy",  Age:"24"}
console.log(a);
console.table(a);

b={fname:"Drew",  Age:"24"}
console.log(b);
console.table(b);

a=[11,15,24,25];
console.log(a);
console.table(a);

b=[24,15,25,11];
console.log(b);
console.table(b);

a=1;
console.log(typeof a);

a=2;
console.log(typeof a);

a="Drew";
console.log(a+" : "+typeof a);

a=true;
console.log(a+" : "+typeof a);

a=[15,24,10];
console.log(typeof a);

a={fname:"Nancy", gender:"Female"};
console.log(typeof a);

a=20;
console.log(typeof a);
a=a.toString();
console.log(typeof a);

a=true;
console.log(typeof a);

a=parseInt(a);
console.log(typeof a);
console.log(a);

a=parseFloat(a);
console.log(typeof a);

a="25"
d=45;
a=a+d;
console.log(a);

a="60"

d=55;
d=String(d);
a=Number(a);
a=a+d;
console.log(a);

var x =true;
console.log(x, typeof x);
x=Number(x);
console.log(x, typeof x);

const f={name:"karthick ", age:30}
console.log(f, typeof f);
f.name="RAM";
console.log(f, typeof f);

f.name=25;
console.log(f, typeof f);

let v1=10;
let v2=20;

console.log(v1+v2);

console.log(v1-v2);

console.log(v1*v2);

console.log(v1/v2);

console.log(v1%v2);

console.log(v1**v2);

v1=++v1;
console.log(v1);

v1=--v1;
console.log(v1);

v1=25;
console.log(v1);

v1+=20; // v1=v1+20;
console.log(v1);
v1-=20; // v1=v1-20;
console.log(v1);
v1*=20; // v1=25*20;
console.log(v1);
v1/=20; // v1=v1/20;
console.log(v1);
v1%=20; // v1=v1%20;
console.log(v1);

console.log(v1==5);
console.log(v1==="5", typeof v1);
console.log(v1!=1);
console.log(v1!=="5", typeof v1);

console.log(v1>1);
console.log(v1<1);
console.log(v1>=5);
console.log(v1<=10);

v1="s";
console.log(7==5 || 7<2 || 7>5);
console.log(v1=="s");
console.log(!(v1=="s"));

//ternary or conditional operator
//condition ? Statement1 : statement2;
console.log(v1);
var output=v1=="s"? "v1 has value" : "v1 doesnot have value";
console.log(output);

//conditional chains with Ternary
/*
m=39; //input
//40 37 grade c 60 - 70 grade b 70 - 80 grade a 80 - 90 grade Distintion;
var mark = (40<m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(mark); //output
*/
// function declaration 

function findGrade(){

    m=34; //input
    //35 32grade c 60 grade b 80 grade a 90 grade Distintion
    var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
    console.log(mark); // output
    
    }
    
    findGrade();
    
    function findGrade1(m,k){
    
         //input
    //35 32grade c 60 grade b 80 grade a 90 grade Distintion
    var mark= (34<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
    console.log(k,mark); // output
    
    }
    
    findGrade1(60,"Nancy");
    
    var findgrade2=(m,k)=>{
        var mark= (34<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
    console.log(k,mark); // output
    };
    console.log(findgrade2(36,"Drew"));
    // using functions
     
    function checkgrade(){
    console.log("welcome");
    console.log("just trying");
    }
    var checkgrade1=(a,b)=>{
       // console.log(a+b);
    return a+b;
    };
    
    checkgrade();
    // to get output in log using function
    console.log("added Value", checkgrade1(1,2))
    
    //to store output in variable to print in console
    var printmsg =checkgrade1(1,2);
    console.log(printmsg);
    
    // trying to short the code
    var checkgrade2=(a,b)=> a+b;
    
    console.log(checkgrade2(5,10));
    
    
    // trying to short the code
    var checkgrade2=()=> checkgrade();
    
    console.log(checkgrade2());
    
    // conditional statements
    // if condition
    function gradeChecking(m){
    if(35>m && m!=null)
    {
    console.log("no grade");
    console.log("Fail");
    }
    }
    
    gradeChecking(45);
    
    // if else condition
    function gradeChecking(m){
        if(35>m && m!=null)
        {
        console.log("no grade");
        console.log("Fail");
        }
        else{
            console.log("Pass");
            console.log("Other Grades");
        
        }
        }
    
        gradeChecking(40);
        
    // nested if else condition
    function gradeChecking(m){
    
     if (35>m && m!=null)
        {
        console.log("no grade");
        console.log("Fail");
        }
        else {
            if(35<m && m!=null && m<=60){
    
                console.log("Pass");
                console.log("Grade c");
            }

    
            else if(60<m && m!=null && m<=80){
    
                console.log("Pass");
                console.log("Grade b");
                    }
    
            else if(80<m && m!=null && m<=100){
    
                console.log("Pass");
                console.log("Grade A");
            }
            else {
                gradeChecking(prompt("enter mark"));
            }
        }
            }
            gradeChecking();
            
            
let Day;
switch(new Date().getDay())
            {
                case 0:
                Day="Sunday";
                    break;

                case 1:
                    day="Monday";
                    break;
                
                case 2:
                    day="Tuesday";
                    break;

                case 3:
                    day="Wednesday";
                    break;
                
                case 4:
                    day="Thrusday";
                    break;

                case 5:
                    day="Friday";
                    break;
                
                case 6:
                    day="Saturday";
                    break;

}
document.getElementById("demo").innerHTML="today is "+day;

//increment operator

var a=2;
a++;
console.log(a);

var a=2;
var x=a++;
console.log('increment with assignment',x);
console.log('increment with assignment',a);

console.log(x+a);

var a=2;
++a;
console.log('prefix increment',a);

var a=2;
var x=++a;
console.log('prefix increment with assignment',x);
console.log('prefix increment with assignment',a);

console.log(x+a);

//decrement
var a=2;
a--;
console.log(a);

var a=2;
var x=--a;
console.log('increment with assignment',x);
console.log('increment with assignment',a);


