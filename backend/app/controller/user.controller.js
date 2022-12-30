const userModel = require("../models/user.model");

exports.getUser = async (req, res) => {
  // console.log(session);
  userModel
    // .find({ role_user: 1 })
    .findOne({ _id: req.user._id })
    .then((dataUser) => {
      return res.status(200).json({
        message: "Data user",
        data: dataUser,
      });
    })
    .catch((error) => {
      req.status(500).json(error);
    });
};

exports.tampilDataUser = (req, res) => {
  userModel
    // .find({ role_user: 1 })
    .find()
    .then((listUser) => {
      return res.status(200).json({
        message: "Daftar user",
        data: listUser,
      });
    })
    .catch((error) => {
      req.status(500).json(error);
    });
};
