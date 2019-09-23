"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      emailAddress: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Course);
  };
  return User;
};
