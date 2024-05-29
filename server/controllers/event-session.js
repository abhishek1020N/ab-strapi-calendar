const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::calendar.event-session');
