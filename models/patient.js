// models/patient.js
module.exports = (sequelize, DataTypes) => {
  const patient = sequelize.define(
    "patient",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9]{10,15}$/, // Validates phone number format
        },
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        allowNull: false,
      },
      medical_history: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt
    }
  );

  return patient;
};

// const response = await fetch("http://localhost:3000/api/patient", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });

        // if (!response.ok) {
        //     throw new Error("Failed to create patient");
        // }

        // return response.json();