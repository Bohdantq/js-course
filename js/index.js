function generatePassword() {
   const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-!#?()+_";
   const passwordLenght = parseInt(document.getElementById("passwordLenght").value);
   let password = "";

   for (let i = 0; i < passwordLenght; i++){
      let randomIndex = Math.floor(Math.random() * charset.length);

      password += charset[randomIndex];
   }
   document.getElementById("password").value = password;
}