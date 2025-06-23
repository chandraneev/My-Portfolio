let movement1=document.querySelector("#step1");
let movement2=document.querySelector("#step2");
let movement3=document.querySelector("#step3");
let previousbtn=document.querySelector("#pre");
let userinput=document.querySelector("#userin");
let hiddentext=document.querySelector("#hidden");
let colr=document.querySelectorAll(".page");

function move(){
    let m1=getComputedStyle(movement1).marginLeft;
    let m2=getComputedStyle(movement2).marginLeft;
    if(m1==="0px"){
    movement1.style.marginLeft="-200%"
    movement2.style.marginLeft="0%";
    previousbtn.style.fontWeight="bold";
    }
    else if(m2==="0px"){
    movement2.style.marginLeft="-200%";
    movement3.style.marginLeft="0%"  
    previousbtn.style.fontWeight="bold"; 
    }
}

function previous(){
    let m2=getComputedStyle(movement2).marginLeft;
    let m3=getComputedStyle(movement3).marginLeft;
   
    if(m2==="0px"){   
    movement1.style.marginLeft="0%";
    movement2.style.marginLeft="100%"  
    previousbtn.style.fontWeight="lighter"; 
    }
    else if(m3==="0px"){   
    movement2.style.marginLeft="0%";
    movement3.style.marginLeft="100%" 
    previousbtn.style.fontWeight="bold";
    }
}

function validph(){
let newuserinput=userinput.value.trim();
if(newuserinput.length!=10){
    hiddentext.style.display="block";
    colr.forEach((col)=>{
    col.style.backgroundColor="Red";});
    return false;
} 
else{
    hiddentext.style.display="none";
    colr.forEach((col)=>{
    col.style.backgroundColor="black";});
    return true;
}
}