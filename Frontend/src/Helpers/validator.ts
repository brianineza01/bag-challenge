import validator from "validator";

const validatePassword = (value: string) => {
  if (!value) return "Password is Required";
  if (
    !validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return "The passwords must at least have 8 characters, \n include 1 lowercase, \n include 1 uppercase, \n include 1 number  \n include as special symbol";
  }
};

const validateEmail = (email: string) => {
  if (!email) return "Email is required";
  if (!validator.isEmail(email)) return "Invalid Email";
};
const validatePhoneNumber = (phoneNumber: string | number) => {
  if (!phoneNumber) return "Phone number is required";
  const num = phoneNumber.toString();
  if (!validator.isMobilePhone(num)) return "Invalid phone number";
};

const validateConfirmPassword = (confirmPassword: string, password: string) => {
  if (!confirmPassword) return "password confirmation is required";
  if (!validator.equals(confirmPassword, password))
    return "the password must match";
};

export {
  validatePassword,
  validateEmail,
  validatePhoneNumber,
  validateConfirmPassword,
};
