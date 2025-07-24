showButton=()=>{
    if(document.getElementById("btnB"))
        return;
    const button=document.createElement("button");
    button.id="btnB";
    button.textContent="Join Us";
    button.style.color="wheat";
    button.style.fontSize="24px";
    button.style.width="100px";
    button.style.height="75px";
    button.style.backgroundColor="transparent";
    button.style.border="1px solid wheat";
    button.style.borderRadius="10px";
    button.style.textShadow="2px 2px 2px black";
    button.addEventListener("mouseover",()=>{
    button.style.color="white";
    button.style.backgroundColor="wheat";
    button.style.border="1px solid white";


    })
    button.addEventListener("mouseout",()=>{
    button.style.color="wheat";
    button.style.backgroundColor="transparent";

    })
    const area=document.querySelector(".btn_r_container");
    area.appendChild(button);
    
}
removeButton=()=>{
   const button= document.getElementById("btnB");
   if(button)
    button.remove();
}
showResult=()=>{
    let height=parseFloat(document.querySelector("#heightcm").value);
    let weight=parseInt(document.querySelector("#weightkg").value);
    height=height/100;
    result=parseFloat(weight/(height*height)).toFixed(1);
    document.querySelector(".result").innerText=result;
    
   
    let a="Underweight";
    let b="Normal";
    let c="Overweight";
    let d="Obese";

    if(result<=18.4&&result>0){
        document.querySelector(".status").innerText=a;
        document.querySelector(".recommendation").innerText="We recommend you to start your journey of building your muscles with us and change your life";
        showButton();
    }
    else if(result>=18.5&&result<=24.9){
        document.querySelector(".status").innerText=b;
        document.querySelector(".recommendation").innerText="Your body is exactly where it needs to be strong, balanced, and beautifully you";
        removeButton();
        
    }
    else if(result>=25.0&&result<=39.9){
        document.querySelector(".status").innerText=c;
        document.querySelector(".recommendation").innerText="Your weight seems to be going up just something to keep an eye on";
        showButton();

    }
    else if(result>=40.0){
        document.querySelector(".status").innerText=d;
        document.querySelector(".recommendation").innerText="Your weight is a health risk, join us and we will take care of it";
        showButton();
        

    }
    else{
        document.querySelector(".recommendation").innerText = " ";
        document.querySelector(".status").innerText="Unkown status";
        removeButton();

    }
}
