'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    });
    await queryInterface.changeColumn('Users', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: null
    });
    await queryInterface.changeColumn('Users', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: null
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
