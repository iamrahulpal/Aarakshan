const db = require("../../models");
class getAllSlots {
  process = async (req, res) => {
    try {
      const slots = await db.slot.findAll({
        order: [["id", "ASC"]],
        raw: true,
      });
      if (!slots) {
        throw "Failed to get slots.";
      }
      res.status(200).json({
        type: "Success",
        message: "Slots fetched successfully.",
        data: slots,
      });
    } catch (error) {
      console.log("🚀 ~ error:::", error);
      res.status(400).json({
        type: "Error",
        error: error.errors[0].message || error,
      });
    }
  };
}

module.exports = new getAllSlots();
