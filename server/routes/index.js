"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminRoutes = require('./admin');
const contentApiRoutes = require('./content-api');
const event = require('./event');
const eventCategory = require('./event-category');
const eventSession = require('./event-session');
const eventSubmission = require('./event-submission');
const eventType = require('./event-type');

module.exports = {
    adminRoutes,
    export: contentApiRoutes,
    event,
    "event-category": eventCategory,
    "event-session": eventSession,
    "event-submission": eventSubmission,
    "event-type": eventType
};
