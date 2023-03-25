const lengthSlide = document.querySelector(".passlength input");
options =document.querySelectorAll("li input"); 
passWord=document.querySelector(".box input");
const copy = document.querySelector(".box span");
passIndicate=document.querySelector(".pass-indicator");
but = document.querySelector(".button");
const  update = () =>{
    document.querySelector(".passlength span").innerText = (lengthSlide.value);
    updatepassIndicate();
}
const updatepassIndicate =() =>{
    passIndicate.id= lengthSlide.value<=8 ?"weak" : lengthSlide.value<=16 ?"medium" : "strong";
}
const character={
    lower:"abcdefghijklmnopqrstuvwxyz",
    upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    num:"0123456789",
    symbol:"!@#$%^&*(){}[]<>,./?;:+-~",
}
const generatePassword = () =>{
    let staticPassword="";
    let randamPass="";
    let randamChar="";
    let exdup=false;
    let length=lengthSlide.value;
    options.forEach(option=> {
        if(option.checked){
            if(option.id!="space" && option.id!="dup")
                staticPassword+=character[option.id];
            else if(option.id==="space")
                staticPassword+=`  ${staticPassword}   `;
            else 
                exdup=true;
        }
    });
    //console.log(staticPassword);
    for(let i=0;i<length;i++){
        randamChar=staticPassword[Math.floor(Math.random()*staticPassword.length)];
        exdup ? !randamPass.includes(randamChar) || randamChar===" "?randamPass+=randamChar:i-- : randamPass+=randamChar;
    }
   passWord.value=randamPass;
}
update();
const copyPass  = () =>{
    navigator.clipboard.writeText(passWord.value);
    copy.innerText="check";
    setTimeout(()=>{
        copy.innerText="copy_all";
    },1500)
}
copy.addEventListener("click", copyPass)
lengthSlide.addEventListener("input", update);
but.addEventListener("click", generatePassword);
