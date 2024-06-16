function WriteCookie() {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);

    function getCookie()
    {
        var arr = document.cookie.split("; ");
        for(var i=0; i<arr.length;i++)
        {
            var nameValue = arr[i].split("=");
            if(nameValue[0]=="UserName")
            {
                document.getElementsByName("username").value = nameValue[1];
            }
        }
    }
    cookievalue1 = escape(document.registration.username.value) + ";";
    cookievalue2 = escape(document.registration.lastname.value) + ";";
    cookievalue3 = escape(document.registration.email.value) + ";";
    cookievalue4 = escape(document.registration.phone.value) + ";";
    cookievalue5 = escape(document.registration.address.value) + ";";

    document.cookie = "Expires     : " + now.toUTCString() + "<br>";
    document.cookie = "UserName    : " + cookievalue1; + "<br>";
    document.cookie = "LastName    : " + cookievalue2; + "<br>";
    document.cookie = "Email-ID    : " + cookievalue3; + "<br>";
    document.cookie = "Phone.No    : " + cookievalue4; + "<br>";
    document.cookie = "Message     : " + cookievalue5; + "<br>";
}

function log_cookie() {
    
    window.open('C:\Users\ELCOT\Desktop\final-version\v1.html', '_self');
    
    var now = new Date();
    now.setMonth(now.getMonth() + 1);

    function getCookie()
    {
        var arr = document.cookie.split("; ");
        for(var i=0; i<arr.length;i++)
        {
            var nameValue = arr[i].split("=");
            if(nameValue[0]=="UserName")
            {
                document.getElementsByName("username").value = nameValue[1];
            }
        }
    }
    cookievalue1 = escape(document.registration.email.value) + ";";
    cookievalue2 = escape(document.registration.password.value) + ";";

    document.cookie = "Expires     : " + now.toUTCString() + "<br>";
    document.cookie = "Email    : " + cookievalue1; + "<br>";
    document.cookie = "Password    : " + cookievalue2; + "<br>";

}
function sign_cookie() {
    
    window.open('C:\Users\ELCOT\Desktop\final-version\v1.html', '_self');

    var now = new Date();
    now.setMonth(now.getMonth() + 1);

    function getCookie()
    {
        var arr = document.cookie.split("; ");
        for(var i=0; i<arr.length;i++)
        {
            var nameValue = arr[i].split("=");
            if(nameValue[0]=="UserName")
            {
                document.getElementsByName("username").value = nameValue[1];
            }
        }
    }
    cookievalue1 = escape(document.register.txt.value) + ";";
    cookievalue2 = escape(document.register.email.value) + ";";
    cookievalue3 = escape(document.register.pwsd.value) + ";";

    document.cookie = "Expires     : " + now.toUTCString() + "<br>";
    document.cookie = "Email    : " + cookievalue1; + "<br>";
    document.cookie = "Password    : " + cookievalue2; + "<br>";
    document.cookie = "Password    : " + cookievalue3; + "<br>";

}


