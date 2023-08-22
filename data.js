function getSecretData() {
  return {
    x: 23,
    y: 46,
  };
}

function checkCredentials(email, password) {
  return email === "user@email.com" && password === "password";
}

module.exports = {
  getSecretData,
  checkCredentials,
};
