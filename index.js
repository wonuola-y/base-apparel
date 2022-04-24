const button = document.getElementById("btn");

button.addEventListener('click', mainFunction);

function mainFunction() {
    let email = document.getElementById('mail').value;
    let mailIcon = document.getElementById('mail');
    let mailTexty = document.getElementById('mailText')

let totalStory = true;
const regexMail =   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (email == "") {
    totalStory = false;
    mailTexty.style.visibility = "visible";
    mailIcon.classList.add('err-icon');
    mailIcon.style.border ="solid 2px red";
    mailIcon.placeholder = "email@example.com";
    mailTexty.style.color = "red";
    mailTexty.style.fontFamily = "Josefin Sans"
} else if(!regexMail .test(email)){
totalStory = false;
mailTexty.innerHTML = "This email looks wrong!";

mailTexty.style.visibility = "visible";
    
}
else{
    mailTexty.style.visibility = "hidden";
    mailIcon.classList.remove('err-icon');
    mailIcon.style.border ="";
}
}