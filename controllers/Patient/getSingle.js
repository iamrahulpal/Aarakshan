const db = require('../../models')
class GetSinglePatient {
    process = async (req, res) => {
      try {
        //   const { title, author, summary } = req.body;
  
        //   const book = await Book.create({ title, author, summary });
  
        //   if (book.length == 0) {
        //     throw "Failed to create book.";
        //   }

        const [results, metadata] = await db.sequelize.query(
            "INSERT INTO Users (firstName, lastName, email) VALUES (:firstName, :lastName, :email)",
            {
              replacements: { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' }
            }
          );
  
        res.status(201).json({
          type: "Success",
          data: "Patient added successfully.",
        });
      } catch (error) {
        res.status(400).json({
          type: "Error",
          error: error.error || error,
        });
      }
    };
  }
  
  module.exports = new GetSinglePatient();
  