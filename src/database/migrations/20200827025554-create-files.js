'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('files', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: true,
         autoIncrement: true,
         primaryKey: true,
       },
       name:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       path:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
       },
       created_at:{
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
       },
      });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('files');
  }
};
