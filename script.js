function hide_show1() {
    var x = document.getElementById("message1");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else
        x.style.display = "none";
}
function hide_show2(){
    var y = document.getElementById("message2");
    if (y.style.display == "none") {
        y.style.display = "block";
    }
    else
        y.style.display = "none";
   

}
function hide_show3(){
    var z = document.getElementById("message3");
    if (z.style.display == "none") {
        z.style.display = "block";
    }
    else
        z.style.display = "none";
}
function hide_show4() {
    var a = document.getElementById("message4");
    if (a.style.display == "none") {
        a.style.display = "block";
    }
    else
        a.style.display = "none";
}
function login()
{
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    var username = "kabutar";
    var pswd = "sleep";
    if(user.value==username)
    {
        if(pass.value==pswd)
        {
            window.location = "login_success.html";
        }
    }
    else {
        alert("Enter correct credentials");

        window.location = "login.html";
     //   document.getElementById("incorrect").innerHTML = "Enter correct credentials";
    }
}