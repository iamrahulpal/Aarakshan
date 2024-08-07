const db = require("../../models");
class login {
  process = async (req, res) => {
    try {
      console.log("🚀 ~ body:::", req.body);
      const { email } = req.body;
      console.log("🚀 ~ email:::", email);
      const patient = await db.patient.findOne({
        where: {
          email,
        },
      });
      console.log("🚀 ~ patient:::", patient);
      if (!patient) {
        throw "Failed to login.";
      }
      res.status(200).json({
        type: "Success",
        message: "login successfully.",
        data: patient,
      });
    } catch (error) {
      console.log("🚀 ~ error:::", error);
      res.status(400).json({
        type: "Error",
        error: error|| error,
      });
    }
  };
}

module.exports = new login();
