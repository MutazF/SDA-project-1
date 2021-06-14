function validate() {
    console.log("gvyhvas");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.href = "creator.html";
        return false;
    } else {
        alert("username or password is wrong");
        window.location.href = "login.html"
    }
}