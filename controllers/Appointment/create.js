const { where } = require("sequelize");
const db = require("../../models");
class CreateAppointment {
  process = async (req, res) => {
    try {
      const { patient_id, slot, reason } = req.body;

      const updateSlot = await db.slot.update(
        {
          is_available: false,
        },
        {
          where: {
            id: parseInt(slot),
          },
        }
      );
      if (!updateSlot) throw "Failed to create appointment";

      const appointment = await db.appointment.create({
        patient_id,
        slot_id: parseInt(slot),
        date: new Date(),
        reason,
      });
      if (!appointment) throw "Failed to create appointment";
      res.status(200).json({
        type: "Success",
        message: "appointment created successfully.",
        // data: slots,
      });
    } catch (error) {
      console.log("🚀 ~ error:::", error);
      res.status(400).json({
        type: "Error",
        error: error || error,
      });
    }
  };
}

module.exports = new CreateAppointment();
