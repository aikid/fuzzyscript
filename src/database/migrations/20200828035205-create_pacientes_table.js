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
        allowNull: false,
      },
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      apartamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      convenio:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      contrato:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      produto:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      plano:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      acomodacao:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      plano:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      acesso:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      login:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
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
