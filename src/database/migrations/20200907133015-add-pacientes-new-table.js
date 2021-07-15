'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pacientes', { 
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
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      rg:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      responsavel:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      apartamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      celular:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      convenio:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      contrato:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      produto:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      plano:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      categoria:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      acomodacao:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      plano:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      acesso:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      login:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('pacientes');
  }
};
