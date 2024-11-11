// check username, password in post(login) request
// if exist create new JWT token
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard

const login = async (req, res) => {
  // check username, password in post(login) request
  const { username, password } = req.body;

  const CustomAPIError = require("../errors/custom-error");

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorization data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
