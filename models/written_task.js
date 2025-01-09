'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Written_task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, {
        foreignKey: {
          type: DataTypes.UUID,
          allowNull: false,
          name: 'user_id'
        }, 
        as: 'user'
      })
    }
  }
  Written_task.init({
    written_task_id: {
      type:DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: { // Ensure status is defined here
      type: DataTypes.STRING,
      allowNull: false
    },
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Written_task',
  });
  return Written_task;
};