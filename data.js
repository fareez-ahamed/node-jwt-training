function getSecretData(userId) {
  return {
    x: 23,
    y: 46,
    userId,
  };
}

function checkCredentials(email, password) {
  if (email === "user@email.com" && password === "password") {
    return {
      email,
      id: "234787458", // fetched from database
      role: "admin", // fetched from database
    };
  }
  return null;
}

module.exports = {
  getSecretData,
  checkCredentials,
};
