console.log("js chargé");

/*localstorage */
/*est-ce que le user a déjà mis qq chose dans le local storage? vérifions*/
let isDark = localStorage.getItem("ls_dark");
    console.log("is dark?");
    console.log(!!isDark);  //isDark est null (qui est "falsy"). ! le change en TRUE et ! change TRUE en FALSE
    


let isFun = localStorage.getItem("ls_funfun");
    console.log("is it fun?");
    console.log(!!isFun);   //isFun est null (qui est "falsy"). ! le change en TRUE et ! change TRUE en FALSE




let darkModeButton = document.querySelector("#dark_mode");
console.log(darkModeButton);

function toggleMode(){      //toggleMode car réagit a chaque clic. 
    let darkModeBody = document.querySelector("body");
    let isDark = localStorage.getItem("ls_dark");
    if(isDark===true){
        localStorage.setItem("ls_dark",false);
        darkModeBody.classList.remove("dark");
        console.log("lightmode chargé");
    }else{
        localStorage.setItem("ls_dark",true);
        darkModeBody.classList.add("dark");
        console.log("darkmode chargé");
    }
}



darkModeButton.addEventListener("click",toggleMode);  



let funModeButton = document.querySelector("#funfun");
console.log("fun mode chargé");

function toggleFun(){
    let funMode = document.querySelector("body");
    funMode.classList.add("funfun");
    funMode.classList.remove("funfun");
}

funModeButton.addEventListener("click", toggleFun);


