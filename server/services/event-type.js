const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('plugin::calendar.event-type');

