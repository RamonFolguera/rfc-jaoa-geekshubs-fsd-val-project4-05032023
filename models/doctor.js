"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Doctor.belongsTo(models.User, {
        foreignKey: "user_id",
        }),

        // Doctor.hasMany(models.Appointment, {
        //     foreignKey: 'doctor_id'
        //   }),

        Doctor.belongsToMany(models.Service, {
            through: "Appointments",
            foreignKey: "doctor_id",
        });
    }
}
Doctor.init(
    {
        user_id: DataTypes.INTEGER,
        collegiate_num: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "Doctor",
    }
);
return Doctor;
};
