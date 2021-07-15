'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'files',
      'type',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    )
  },

  down: async (queryInterface) => {
    return queryInterface.removeColum('users','file_id');
  }
};
