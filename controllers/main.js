// check username, password in post(login) request
// if exist create new JWT token
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  // check username, password in post(login) request
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // just for demo, normally provided by DB
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorization data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
