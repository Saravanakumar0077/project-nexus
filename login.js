function validate(){
    var username=document.getElementsByClassName('input').nodeValue;
    var password=document.getElementsByClassName('input').nodeValue;
    if(username=="admin" && password=="user"){
        alert("Login failed!");
        return false;
    }
    else{
        alert("Login Successful!");
    }
}