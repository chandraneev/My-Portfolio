/*function showInfo(){
let user=document.getElementsByClassName("cgpa");
for(let i=0;i<user.length;i++){
user[i].style.display="block";
};
}*/

function showInfo(){
    let show=document.querySelectorAll(".cgpa");
    show.forEach(pa=>{
        pa.style.display="block";
    });
}


let currmode="dark";
function pressdmlm(){
    let togglebutn=document.querySelector("#dm");
    let body=document.querySelector("body")
    if(currmode==="dark"){
        currmode="light";
        body.style.backgroundColor="white";
        togglebutn.classList.remove("fa-toggle-on");
        togglebutn.classList.add("fa-toggle-off");
    }
    else{
        currmode="dark";
        body.style.backgroundColor="black";
        togglebutn.classList.remove("fa-toggle-off");
        togglebutn.classList.add("fa-toggle-on");
    }
}
 


let sentences=["CS Student", "Tech Enthusiat", "MERN Stack Dev"];
let speed=200;
let deletespeed=50;
let delaybetween=1000;
let i=0;
let j=0;
let currsen="";
let isdeleting=false;


function typeeffect(){
    let element=document.getElementById("typ");
    currsen=sentences[i];
    if(isdeleting){
        element.textContent=currsen.substring(0,j--);
    }
    else{
        element.textContent=currsen.substring(0,j++); 
    }

    if(!isdeleting && j>currsen.length){
        isdeleting=true;
        setTimeout(typeeffect,delaybetween);
    }
    else if(isdeleting && j===0){
        isdeleting=false;
        i=(i+1)%sentences.length;
        setTimeout(typeeffect,500);
    }
    else{
        setTimeout(typeeffect, isdeleting? deletespeed:speed);
    }
}
typeeffect();


function checkenter(event){
    if (event.key==="Enter"){
        searchcon();
    }
}
function searchcon(){
    let userin=document.querySelector("#sear");
    let itemsear=document.querySelectorAll(".sec");
    let input=userin.value.toLowerCase();
    if(input.trim()===""){
        return;
    }
    let found=false;

    itemsear.forEach(item=>{
        let text=item.innerText.toLowerCase();
        if(text.includes(input)){
            item.scrollIntoView({behavior:"smooth"});
            found=true;
        }
        /*else{
            item.style.display="none"; 
        }*/
    })
}


function scrolltop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


function toggmenu(){
    let nav= document.getElementsByClassName("div4")[0];
    nav.classList.toggle("show");
}
