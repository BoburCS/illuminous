export const useValidate = (data) => {
    const { userEmail, userPassword } = data;

    const RegEx = /^[a-zA-Z0-9+_.-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail)\.com$/;

    if (!RegEx.test(userEmail) || userEmail.length < 8) {
        alert("Email should be at least 8 characters long and end with @gmail.com");
        return false;
    }

    if (userPassword.length < 8 || userPassword.length > 16) {
        alert("Password should be between 8 and 16 characters long");
        return false;
    }

    return true;
}
