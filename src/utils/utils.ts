


const validate_password = (password:string):boolean => {
    const hasMinimumLength = password.length >= 8;
    // At least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    // At least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);
    // At least one digit
    ;// eslint-disable-next-line
    const hasDigit = /\d/.test(password)
    // At least one special character
    // eslint-disable-next-line
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // Return true if all criteria are met, false otherwise
    return hasMinimumLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;

}


const validate_email = (email:string):boolean =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// eslint-disable-next-line
    return regex.test(email);
}

const validate_name = (data:string):boolean =>{
    var regex = /[A-Za-z]/;
    return regex.test(data);
}


export {validate_password, validate_email, validate_name}