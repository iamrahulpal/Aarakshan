const db = require("../../models");
class createPatient {
  process = async (req, res) => {
    try {
      const patient = await db.patient.create(req.body);
      if(!patient){
        throw "Failed to create patient.";
      }

      res.status(201).json({
        type: "Success",
        data: "Patient added successfully.",
      });
    } catch (error) {
      console.log("🚀 ~ error:::", );
      res.status(400).json({
        type: "Error",
        error: error.errors[0].message || error,
      });
    }
  };
}

module.exports = new createPatient();
