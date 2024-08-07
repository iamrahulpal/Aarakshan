// models/appointment.js
module.exports = (sequelize, DataTypes) => {
    const appointment = sequelize.define(
      "appointment",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'patients', // name of the Target model
            key: 'id', // key in the Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        slot_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'slots', // name of the Target model
            key: 'id', // key in the Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: true, // Adds createdAt and updatedAt
      }
    );
  
    appointment.associate = (models) => {
      appointment.belongsTo(models.Patient, {
        foreignKey: 'patient_id',
        as: 'patient',
      });
      appointment.belongsTo(models.Slot, {
        foreignKey: 'slot_id',
        as: 'slot',
      });
    };
  
    return appointment;
  };
  