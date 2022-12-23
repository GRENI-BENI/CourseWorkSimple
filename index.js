import AuthPanel from "./authPanel/authPanel.js";
import LoginPanel from "./loginPanel/loginPanel.js";
import MarketPanel from "./marketPanel/marketPanel.js";

//#region path state
//history.replaceState({page: "mainPage"}, "", "/")
window.addEventListener('popstate', (event) => {
    stateChangeEvent(event);
});

(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        return pushState.apply(history, arguments);
    };
})(window.history);

history.onpushstate=function(event){
    stateChangeEvent(event)
}

function stateChangeEvent(event){


    switch (event.state.page) {
        case "loginPage":loadLoginPage(); break;
        case "mainPage":loadMainPage();break;
        case "review":loadReview(event.state.nm);
    }
}
//#endregion


let mainContent=document.getElementById("mainContent")
localStorage.clear()

loadMainPage()



function loadLoginPage() {
    mainContent.innerHTML="";


    LoginPanel.render(mainContent)


}

function loadMainPage() {
    let navbarLink=document.getElementById("loginLinkContainer");
    navbarLink.innerHTML=""
    navbarLink.append(AuthPanel.render());
    mainContent.innerHTML="";
    MarketPanel.render(mainContent)

    setTimeout(function(){

        let btns=document.getElementsByClassName("choosePageButton")

    for (let i = 0; i < btns.length; i++) {
        let btn=btns.item(i)
        btn.onclick=function (e) {
            history.pushState({page:"review", nm:i}, "unused","/card")
        }
    } }, 1000);
}

function loadReview(num){
    mainContent.innerHTML="";
    fetch('reviewPanel/reviewPanel'+(num+1)+'.html')
        .then(response=> response.text())
        .then(text=> mainContent.innerHTML = text);
}



/////







