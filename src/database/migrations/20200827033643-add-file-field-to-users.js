'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'file_id',
      {
        type: Sequelize.INTEGER,
        references: {model: 'files', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    )
  },

  down: async (queryInterface) => {
    return queryInterface.removeColum('users','file_id');
  }
};
