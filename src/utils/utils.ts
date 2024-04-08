
const CryptoJS = require('crypto-js');

const SECRET = process.env.REACT_APP_SECRET

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

const encrpt_password = (message:string) => {
    var key = CryptoJS.enc.Utf8.parse(SECRET);

    const encrypted= CryptoJS.AES.encrypt(message, key, { mode: CryptoJS.mode.ECB }).toString();


   return encrypted;
}

const generate_random_apline_data=()=> {
    // Generate energy_produced_data
    let energy_produced_data = Array.from({length: 12}, () => Math.floor(Math.random() * (1500 - 500 + 1)) + 500);
    
    // Generate carbon_generated_data
    // Generate energy_consumed_data
    let energy_consumed_data = energy_produced_data.map(energy_produced => Math.floor(energy_produced * (0.8 + Math.random() * 0.2)));
    
  
    return {  'energy_produced': energy_produced_data, 'energy_consumed': energy_consumed_data};
  }

export {validate_password, validate_email, validate_name,encrpt_password,generate_random_apline_data}