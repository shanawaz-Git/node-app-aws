"use strict";

exports.home = (req, res, next) => {
  try {
    res.status(200).send("welcome to my node project");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
