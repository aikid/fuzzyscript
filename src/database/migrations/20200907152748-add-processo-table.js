'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('processo', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: true,
         autoIncrement: true,
         primaryKey: true,
       },
       empresa:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       tipoprocesso:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       numeroprocesso:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
       },
       paciente_id:{
        type: Sequelize.INTEGER,
        references: { model: 'pacientes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
       },
       encerrado_em: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('processo');
  }
};
