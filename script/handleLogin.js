
document.getElementById('error-container').height = '0px';
'use strict';
// this method extracts value in input fields and calls validateUser
function submitForm() {
    let user = document.getElementById('username').value;
    let pwd = document.getElementById('pwd').value;

    let response = validateUser(user, pwd);

    navigateByLoginResponse(response);
};

function navigateByLoginResponse(response) {

    let color = ''

    //set the content of loginPanel to empty
    document.getElementById('loginSection').innerHTML = '';
    document.getElementById('loginSection').setAttribute('class', 'none-display');

    //get the color of text as per response (valid or not valid)
    if (response.valid) {
        color = 'text-success';
    } else {
        color = 'text-danger';
    }

    //set the content after login has been called
    let errorContent = document.createElement('div');
    errorContent.setAttribute('class', color + ' display-3');

    let textNode = document.createTextNode(response.reason);

    errorContent.append(textNode);
    document.getElementById('error-conatiner').setAttribute('style', 'display: block');
    document.getElementById('errorDiv').append(errorContent);
}

function validateUser() {

    return { valid: false, reason: 'Not Authorized' };
}