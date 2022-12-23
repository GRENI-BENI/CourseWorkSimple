
class LoginPanel {

    static render(container) {

        fetch('loginPanel/loginPanel.html')
            .then(response=> response.text())
            .then(text=> container.innerHTML = text);


        setTimeout(function(){
            let loginBtn=document.getElementById("btn-login")
        loginBtn.onclick=function (e){ e.preventDefault();
            sessionStorage.setItem('userName',"Adam")
            sessionStorage.setItem('email',"Adam@gmail.com")
            history.pushState({page:"mainPage"}, "unused","/")}

        }, 500);
    }
}


export default LoginPanel;
