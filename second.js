function validph(){
    let ph=document.getElementById("userin");
    let secondph=document.getElementById("hiddentxt");
    let newph=ph.value.trim(
    );
    if(newph.length!==10){
        secondph.style.display="block";
        return false;
    }
    else{
         secondph.style.display="none";
        return true;
    }
}