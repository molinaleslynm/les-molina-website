function Register () {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
}
if(username ==="" || password ==="") {
    document.getElementById("p").innerHTML ="All textboxes are required";
}
else {
    document.getElementById("p").innerHTML = "welcome " + username;
}
   alert(username);
   alert(password);

    function Registered () {
        alert("Registered Successfully");
    }
    