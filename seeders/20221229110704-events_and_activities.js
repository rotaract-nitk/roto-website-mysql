'use strict';

const fs = require('fs');
const events = JSON.parse(fs.readFileSync(`${__dirname}/../mongo-exports/events.json`,'utf-8'));
const activities = [];
events.forEach((event,i) => {
  event['id'] = i+1;
  event.activity.forEach(activity => {
    activity["event_id"] = i+1;
    activities.push(activity);
  })
  delete event.activity;
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('events',events);
    await queryInterface.bulkInsert('activities',activities);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events',null,{});
    await queryInterface.bulkDelete('activities',null,{});
  }
};
