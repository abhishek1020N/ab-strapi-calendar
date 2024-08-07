'use strict';

const service = require('./service');
const event = require("./event");
const eventCategory = require("./event-category");
const eventSession = require("./event-session");
const eventSubmission = require("./event-submission");
const eventType = require("./event-type");

module.exports = {
  service,
  event,
  "event-category": eventCategory,
  "event-session": eventSession,
  "event-submission": eventSubmission,
  "event-type": eventType
};
