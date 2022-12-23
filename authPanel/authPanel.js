 class AuthPanel {

   static render() {

       let elem=document.createElement("a");
       elem.setAttribute("class","authPanelText nav-link text-light")

        if(sessionStorage.getItem('userName')!==null) {

            elem.innerHTML=sessionStorage.getItem('userName');

            return elem;
        }
        else {
            elem.innerHTML='Login';
            elem.onclick=function (e){e.preventDefault(); history.pushState({page:"loginPage"}, "unused","/login")}
            return elem;
        }
    }
}


export default AuthPanel;