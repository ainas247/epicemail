document.getElementById("signup-form").style.display = "none";

function signUp() {
    document.getElementById("signup-form").style.display = "block";
}



let firstname = document.getElementById("firstname").value;
let surname = document.getElementById("lastname").value;
let email = document.getElementById("email").value;
let confirm = document.getElementById("confirm").value;
let userpass = document.getElementById("userpass").value;

function checkPass() {
    if ((firstname == "") || (surname == "") || (email == "") || (confirm == "") || (userpass == "")) {
        let = document.getElementById('errormessage').innerHTML = '<b><span style = color:red>All Field Required</span></b>';
    } if (confirm !== userpass) {
        document.getElementById('errormessage2').innerHTML = '<b><span style = color:red>Password Does Not Match!!</span></b>';

    }
}
