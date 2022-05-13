document.getElementById('form_p2').innerHTML = `<i class="fas fa-lock"></i> `+window.location.href;
function displayErrorName(){
    let username = document.getElementById('exampleInputName1').value;
    if(username.length>=5){
        document.getElementById('NameHelp').style.display = 'none';
        document.getElementById('exampleInputName1').style.border = '1px solid white';
        return true;
    }
    else{
        document.getElementById('NameHelp').style.display = 'block';
        document.getElementById('exampleInputName1').style.border = '1px solid tomato';
        return false;
    }
}

function displayEmailError(){
    let element = document.getElementById('exampleInputEmail1').value;
    if(isValidationEmail(element)){
        document.getElementById('emailHelp').style.display = 'none';
        document.getElementById('exampleInputEmail1').style.border = '1px solid white';
        return true;  
    }
    else{
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

function displayErrorUserName(){
    let username = document.getElementById('exampleInputUsername1').value;
    if(username.length>=5){
        document.getElementById('userNameHelp').style.display = 'none';
        document.getElementById('exampleInputUsername1').style.border = '1px solid white';
        return true;
    }
    else{
        document.getElementById('userNameHelp').style.display = 'block';
        document.getElementById('exampleInputUsername1').style.border = '1px solid tomato';
        return false;
    }
}
function displayPasswordError(){
    document.getElementById('passwordHelp').style.display = 'block';
    document.getElementById('exampleInputPassword1').style.border = '1px solid tomato';
    let password = document.getElementById('exampleInputPassword1').value;
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    // let characters = upper.concat(lower, digit, spl_char);
    if(password.match(upper) && password.match(lower) && password.match(digit) && password.match(spl_char) && password.length>=8){
        document.getElementById('passwordHelp').style.display = 'none';
        document.getElementById('exampleInputPassword1').style.border = '1px solid white';
        return true;
    }
    else{return false;}
     
}
function confirmPasswordError(){
    let confirmPassword = document.getElementById('exampleInputConfirmPassword1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    if(confirmPassword !== password){
        document.getElementById('confirmPasswordHelp').style.display = 'block';
        document.getElementById('exampleInputConfirmPassword1').style.border = '1px solid tomato';
        return false;
    }
    else{
        document.getElementById('confirmPasswordHelp').style.color = 'green';
        document.getElementById('confirmPasswordHelp').innerHTML = 'Password Matches';
        document.getElementById('exampleInputConfirmPassword1').style.border = '1px solid white';
        return true
    }
}
function showHidePassword(){
    let pass = document.getElementById('exampleInputPassword1');
    if(pass.type=='password'){
        pass.type = 'text';
    }
    else{pass.type = 'password';}
}
function showHidePassword2(){
    let pass = document.getElementById('exampleInputConfirmPassword1');
    if(pass.type=='password'){
        pass.type = 'text';
    }
    else{pass.type = 'password';}
}
function phoneNumberError(){
    let number = document.getElementById('exampleInputPhNumber').value;
    if(number.toString().length<10){
        document.getElementById('phoneNumberHelp').style.display = 'block';
        return false;
    }
    else{
        document.getElementById('phoneNumberHelp').style.display = 'none';
        return true;
    }
}
 
var OTP = null;
function sendOTP(){
     
    OTP = Math.floor(Math.random()*(1000000-100000)+100000);
    var phone_number = document.getElementById('')
    if(phoneNumberError()){
        alert(`Your Recieved an OTP, ${OTP}. Please don't share it with anyone.`);
        document.getElementById('after_OTP').style.display = 'block'; 
    }
}

function showHideOTP(){
    let pass = document.getElementById('exampleInputOTP');
    if(pass.type=='password'){
        pass.type = 'text';
    }
    else{pass.type = 'password';}
}
function displayOTPError(){
    let OTP_Entered = document.getElementById('exampleInputOTP').value;
    if(OTP_Entered!=OTP){
        document.getElementById('OTPHelp').style.display = 'block';
        document.getElementById('exampleInputOTP').style.border = '1px solid tomato';
    }
    else{
        document.getElementById('OTPHelp').innerHTML = 'OTP is valid!';
        document.getElementById('OTPHelp').style.color = 'green';
        document.getElementById('exampleInputOTP').style.border = '1px solid green';
        document.getElementById('after_OTP_validate1').style.display = 'block';
        document.getElementById('after_OTP_validate2').style.display = 'block';
        document.getElementById('submit_after_newpass').style.display = 'block';
    }
}

function isFormValid(){
    if(!displayEmailError() || !displayErrorUserName() || !displayPasswordError() || !confirmPasswordError() || !phoneNumberError()){
        alert('Please fill all the details!');
        return false;
    }
}

