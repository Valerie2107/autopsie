console.log("js chargé");

/*localstorage */
/*est-ce que le user a déjà mis qq chose dans le local storage? vérifions*/
let isLight = localStorage.getItem("ls_dark");
    console.log("is light?");
    console.log(!!isLight);  //isLight est null (qui est "falsy"). ! le change en TRUE et ! change TRUE en FALSE
let isFun = localStorage.getItem("ls_funfun");
    console.log("is it fun?");
    console.log(!!isFun);   //isFun est null (qui est "falsy"). ! le change en TRUE et ! change TRUE en FALSE


let darkModeButton = document.querySelector("#dark_mode");
console.log(darkModeButton);

function toggleMode(){  //toggleMode car réagit a chaque clic. 
    let isLight = localStorage.getItem("ls_dark");    
    let darkModeBody = document.querySelector("body");
    if(isLight==='true'){    //les booléens sont automatiquement changés en string par localstorage (JSON??)
        localStorage.setItem("ls_dark",'false');
        darkModeBody.classList.add("dark");
        console.log("lightmode chargé");
    }else{
        localStorage.setItem("ls_dark",'true');
        darkModeBody.classList.remove("dark");
        console.log("darkmode chargé");
    }
}
darkModeButton.addEventListener("click",toggleMode);  
toggleMode();

let funModeButton = document.querySelector("#funfun");
console.log("fun mode chargé");

function toggleFun(){
    let isFun = localStorage.getItem("ls_funfun");
    let funMode = document.querySelector("body");
    if(isFun==='true'){
        localStorage.setItem('ls_funfun','false');
        funMode.classList.remove("funfun");
        console.log("classical mode chargé");
    }else{
        localStorage.setItem('ls_funfun', 'true');
        funMode.classList.add("funfun");
        console.log('funmode chargé');
    }    
}
funModeButton.addEventListener("click", toggleFun);
toggleFun();

