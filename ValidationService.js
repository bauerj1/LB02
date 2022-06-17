const validation = require('./validation.js');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
 
    let result = validation.isValidEmail("email", userObj.email);
    if (result.isNotValid) { return result; "Email is not valid" }

    result = validation.isValidPhone("phone", userObj.phone);
    if (result.isNotValid) { return result; "Phone is not valid" }

    result = validation.isValidName("Firstname", userObj.name);
    if (result.isNotValid) { return result; "Firstname is not valid" }

    result = validation.isValidMessage("message",userObj.message);
    if (result.isNotValid) { return result; "Message is not valid" }

    result = validation.isValidName("name",userObj.secondname);
    if (result.isNotValid) { return result; "Secondname is not valid" }

    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}