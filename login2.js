function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="het@8421" && password=="hetsp")
    {
        alert("login successfully");
        window.open("contact.html");
        return false;
    
    }

    else{
        alert("login failed");
    }


}




























