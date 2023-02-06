function toggleFun(){
    isFun = localStorage.getItem("ls_funfun");
    if(isFun==='true'){
        localStorage.setItem('ls_funfun','false');
        body.classList.remove("funfun");
        console.log("classical mode chargé");
    }else{
        localStorage.setItem('ls_funfun', 'true');
        body.classList.add("funfun");
        console.log('funmode chargé');
    }
}

function toggleMode(){  //toggleMode car réagit a chaque clic.
    isDark = localStorage.getItem("ls_dark");
    if(isDark==='true'){    //les booléens sont automatiquement changés en string par localstorage (JSON??)
        localStorage.setItem("ls_dark",'false');
        body.classList.remove("dark");
        console.log("darkmode chargé");
    }else{
        localStorage.setItem("ls_dark",'true');
        body.classList.add("dark");
        console.log("lightmode chargé");
    }
}

let body = document.querySelector("body");
let isDark = localStorage.getItem("ls_dark"); /*est-ce que le user a déjà mis qq chose dans le local storage? vérifions*/
let isFun = localStorage.getItem("ls_funfun");/*est-ce que le user a déjà mis qq chose dans le local storage? vérifions*/
let darkModeButton = document.querySelector("#dark_mode");
let funModeButton = document.querySelector("#funfun");

darkModeButton.addEventListener("click",toggleMode);
funModeButton.addEventListener("click", toggleFun);

if(isDark==='true') { //les booléens sont automatiquement changés en string par localstorage (JSON??)
    body.classList.add("dark");
}

if(isFun==='true') {  //les booléens sont automatiquement changés en string par localstorage (JSON??)
    body.classList.add("funfun");
}
