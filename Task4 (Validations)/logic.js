

document.getElementById('form_p2').innerHTML = `<i class="fas fa-lock"></i> ` + window.location.href;
function displayErrorName() {
    let username = document.getElementById('exampleInputName1').value;
    var num = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
    if (username.length>0 && !username.match(num) && !username.match(spl_char)) {
        document.getElementById('NameHelp').style.display = 'none';
        document.getElementById('exampleInputName1').style.border = '1px solid white';
        return true;
    }
    else {
        document.getElementById('NameHelp').style.display = 'block';
        document.getElementById('exampleInputName1').style.border = '1px solid tomato';
        return false;
    }
}

function displayErrorBirthDate(){
    let birthDate = document.getElementById('exampleInputBirthDate1').value;
    let dob = new Date(birthDate);
    let currentDate = new Date();
    if(!birthDate){
        document.getElementById('BirthDateHelp').innerHTML= 'Please enter your birth date!';
        document.getElementById('exampleInputBirthDate1').style.border = '1px solid tomato';
        return false;
    }
    else if(dob>currentDate){
        document.getElementById('BirthDateHelp').innerHTML= 'Birthdate cannot be a future date!';
        document.getElementById('exampleInputBirthDate1').style.border = '1px solid tomato';
        return false;
    }
    else{
        document.getElementById('BirthDateHelp').innerHTML = '';
        document.getElementById('exampleInputBirthDate1').style.border = '1px solid white';
        return true;
    }
}

function displayEmailError() {
    let element = document.getElementById('exampleInputEmail1').value;
    if (isValidationEmail(element)) {
        document.getElementById('emailHelp').style.display = 'none';
        document.getElementById('exampleInputEmail1').style.border = '1px solid white';
        return true;
    }
    else {
        document.getElementById('emailHelp').style.display = 'block';
        document.getElementById('emailHelp').innerHTML = 'Please enter a valid Email';
        document.getElementById('exampleInputEmail1').style.border = '1px solid tomato';
        return false
    }
}

function isValidationEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || email === "undefined") {
        return false;
    }
    return re.test(String(email).toLowerCase());
}

function displayErrorUserName() {
    let username = document.getElementById('exampleInputUsername1').value;
    if (username.length >= 5) {
        document.getElementById('userNameHelp').style.display = 'none';
        document.getElementById('exampleInputUsername1').style.border = '1px solid white';
        return true;
    }
    else {
        document.getElementById('userNameHelp').style.display = 'block';
        document.getElementById('exampleInputUsername1').style.border = '1px solid tomato';
        return false;
    }
}

function displayPasswordError() {
    document.getElementById('passwordHelp').style.display = 'block';
    document.getElementById('passwordHelp').style.color = 'tomato';
    document.getElementById('exampleInputPassword1').style.border = '1px solid tomato';
    let password = document.getElementById('exampleInputPassword1').value;
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    // let characters = upper.concat(lower, digit, spl_char);
    if (password.match(upper)) {
        document.getElementById('list_item2').style.color = 'green';
    } else { document.getElementById('list_item2').style.color = 'tomato'; }
    if (password.match(lower)) {
        document.getElementById('list_item3').style.color = 'green';
    } else { document.getElementById('list_item3').style.color = 'tomato'; }
    if (password.match(digit)) {
        document.getElementById('list_item4').style.color = 'green';
    } else { document.getElementById('list_item4').style.color = 'tomato'; }
    if (password.match(spl_char)) {
        document.getElementById('list_item5').style.color = 'green';
    } else { document.getElementById('list_item5').style.color = 'tomato'; }
    if (password.length >= 8) {
        document.getElementById('list_item1').style.color = 'green';
    } else { document.getElementById('list_item1').style.color = 'tomato'; }
    if (password.match(upper) && password.match(lower) && password.match(digit) && password.match(spl_char) && password.length >= 8) {
        document.getElementById('passwordHelp').style.display = 'none';
        document.getElementById('exampleInputPassword1').style.border = '1px solid white';
        return true;
    }
    else {
        return false;
    }

}
function confirmPasswordError() {
    let confirmPassword = document.getElementById('exampleInputConfirmPassword1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    if(!confirmPassword){
        document.getElementById('confirmPasswordHelp').style.display = 'block';
        document.getElementById('confirmPasswordHelp').style.color = 'tomato';
        document.getElementById('exampleInputConfirmPassword1').style.border = '1px solid tomato';
        document.getElementById('confirmPasswordHelp').innerHTML = "Please re-enter password!";
        return false;
    }
    if (confirmPassword == password && displayPasswordError()) {
        document.getElementById('confirmPasswordHelp').style.display = 'block';
        document.getElementById('confirmPasswordHelp').style.color = 'green';
        document.getElementById('confirmPasswordHelp').innerHTML = 'Password Matches';
        document.getElementById('exampleInputConfirmPassword1').style.border = '1px solid white';
        return true
    }
    else if (confirmPassword != password) {
        document.getElementById('confirmPasswordHelp').style.display = 'block';
        document.getElementById('confirmPasswordHelp').style.color = 'tomato';
        document.getElementById('exampleInputConfirmPassword1').style.border = '1px solid tomato';
        document.getElementById('confirmPasswordHelp').innerHTML = "Password Doesn't Match";
        return false;
    }
    else if (!confirmPassword) {
        document.getElementById('confirmPasswordHelp').style.display = 'none';
    }
}

function displaySigninPasswordError() {
    document.getElementById('passwordHelp').style.display = 'block';
    document.getElementById('passwordHelp').style.color = 'tomato';
    document.getElementById('exampleInputPassword1').style.border = '1px solid tomato';
    let password = document.getElementById('exampleInputPassword1').value;
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if (password.match(upper) && password.match(lower) && password.match(digit) && password.match(spl_char) && password.length >= 8) {
        document.getElementById('passwordHelp').style.display = 'none';
        document.getElementById('exampleInputPassword1').style.border = '1px solid white';
        return true;
    }
    else {
        return false;
    }
}

function showHidePassword() {
    let pass = document.getElementById('exampleInputPassword1');
    if (pass.type == 'password') {
        pass.type = 'text';
    }
    else { pass.type = 'password'; }
}
function showHidePassword2() {
    let pass = document.getElementById('exampleInputConfirmPassword1');
    if (pass.type == 'password') {
        pass.type = 'text';
    }
    else { pass.type = 'password'; }
}
function phoneNumberError() {
    let number = document.getElementById('exampleInputPhNumber').value;
    if (number.toString().length !== 10) {
        document.getElementById('phoneNumberHelp').style.display = 'block';
        document.getElementById('exampleInputPhNumber').style.border = '1px solid tomato';
        return false;
    }
    else {
        document.getElementById('phoneNumberHelp').style.display = 'none';
        document.getElementById('exampleInputPhNumber').style.border = '1px solid white';
        return true;
    } 0.

}

var OTP = null;
function sendOTP() {

    OTP = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    if (phoneNumberError()) {
        alert(`Your Recieved an OTP, ${OTP}. Please don't share it with anyone.`);
        document.getElementById('after_OTP').style.display = 'block';
        document.getElementById('for_OTP').innerHTML = 'Re-Send OTP';
    }
}

function showHideOTP() {
    let pass = document.getElementById('exampleInputOTP');
    if (pass.type == 'password') {
        pass.type = 'text';
    }
    else { pass.type = 'password'; }
}
function displayOTPError() {
    let OTP_Entered = document.getElementById('exampleInputOTP').value;
    if (OTP_Entered != OTP) {
        document.getElementById('OTPHelp').style.display = 'block';
        document.getElementById('OTPHelp').style.color = 'tomato';
        document.getElementById('OTPHelp').innerHTML = 'Please enter the valid OTP';
        document.getElementById('exampleInputOTP').style.border = '1px solid tomato';
        document.getElementById('after_OTP_validate1').style.display = 'none';
        document.getElementById('after_OTP_validate2').style.display = 'none';
        document.getElementById('submit_after_newpass').style.display = 'none';
    }
    else {
        document.getElementById('OTPHelp').innerHTML = 'OTP is valid!';
        document.getElementById('OTPHelp').style.color = 'green';
        document.getElementById('exampleInputOTP').style.border = '1px solid green';
        document.getElementById('after_OTP_validate1').style.display = 'block';
        document.getElementById('after_OTP_validate2').style.display = 'block';
        document.getElementById('submit_after_newpass').style.display = 'block';
    }
}

var check1 = '';
var check2 = '';
function checkBoxValid1(){
    check1 = document.getElementById('exampleCheck1').checked;
    if(check1){
        document.getElementById("exampleCheck1").style.border = "none";
        return true;
    }
    else{
        document.getElementById("exampleCheck1").style.border = "2px solid tomato";
        return false;
    }
}
function checkBoxValid2(){
    check2 = document.getElementById('exampleCheck2').checked;
    if(check2){
        document.getElementById("exampleCheck2").style.border = "none";
        return true;
    }
    else{
        document.getElementById("exampleCheck2").style.border = "2px solid tomato";
        return false;
    }
}

function isFormValid() {
    check1 = document.getElementById
    if (!displayErrorName() || !displayEmailError() || !displayErrorUserName() || !displayPasswordError() || !confirmPasswordError() || !phoneNumberError() || !displayErrorBirthDate() || !checkBoxValid1() || !checkBoxValid2() || check1%2==0 || check2%2==0) {
        displayEmailError();
        displayErrorBirthDate();
        displayErrorUserName();
        displayPasswordError();
        confirmPasswordError();
        phoneNumberError();
        confirmPasswordError();
        checkBoxValid1();
        checkBoxValid2();
        return false;
    }
    else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { 
            x.className = x.className.replace("show", ""); 
            window.location.href = "signin.html";
        }, 3000);
    }
}


function isLoginValid() {
    if (displayEmailError() && displaySigninPasswordError()) {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    else {
        displayEmailError();
        displaySigninPasswordError();
        return false;
    }
}
function isNewPassValid() {
    if (!displayPasswordError() || !confirmPasswordError()) {
        confirmPasswordError();
        return false;
    }
    else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}
