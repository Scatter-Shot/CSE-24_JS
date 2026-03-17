function calculateResult(){
const n=document.getElementById("subjects").value;

let total=0;
let i;

for(i=1;i<=n;i++)
{
    let x=parseFloat(promt("enter the subject number "+(i+1)));
    total+=x;
    let average=total/n;
    let grade;

}
let average=total/n;
let grade;
if(average>90)
{
    grade="A+";
}
else if(average>80)
{
    grade="A";  

}
else if(average>70)
{
    grade="B+";
}
else if(average>60)
{
    grade="B";
}       
else if(average>50)
{
    grade="C+";
}
else if(average>40)
{ 
    grade="C";
}
else if(average>30)
{
    grade="D+";
}   
else if(average>20)
{
    grade="D";
}
else
{
    grade="F";
}   
let r;
if(average>40)
{
    r="Pass";
}
else
{
    r="Fail";
}
let result=document.getElementById("result");
    result.innerHTML="TOTAL MARKS: "+total+"<br/>"+"AVERAGE: "+average+"<br/>"+"GRADE: "+grade+"<br/>"+"RESULT: "+r;
}