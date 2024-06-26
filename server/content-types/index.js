"use strict";

const event = require("./event");
const eventSession = require("./event-session");
const eventSubmission = require("./event-submission");
const eventType = require("./event-type");
const eventCategory = require("./event-category");

module.exports = {
  event,
  "event-session": eventSession,
  "event-submission": eventSubmission,
  "event-type": eventType,
  "event-category": eventCategory,
};
