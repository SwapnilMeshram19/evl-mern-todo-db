const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "IJFLSKDFJSLFJSLFJ123JL34";
const User = require("../models/userSchema");

exports.register = async (req, res) => {
  let { email, name, password } = req.body;
  const user = await User.findOne({
    email,
  });

  if (user) {
    return res.status(404).send({
      response: "error",
      message: "user already exist",
    });
  }

  password = await bycrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password,
  });

  return res.send({
    message: "user created successfully",
  });
};

exports.login = async (req, res) => {
  let { name, password } = req.body;

  const user = await User.findOne({
    name,
  });

  if (!user) {
    return res.status(404).send({
      message: "user doesn't exists",
    });
  }

  const matched = bycrypt.compareSync(password, user.password);
  if (matched) {
    const { _id, name } = user;
    const token = jwt.sign(
      {
        name,
        _id,
      },
      SECRET_KEY
    );

    return res.send({
      response: "success",
      token,
      user: {
        name,
        _id,
      },
    });
  } else {
    return res.status(404).send({
      message: "Invalid Password",
    });
  }
};
