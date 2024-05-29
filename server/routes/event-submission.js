"use strict";

/**
 *  router
 */

module.exports = {
  type: "content-api", // other type available: admin.
  routes: [
    {
      method: "GET",
      path: "/event-submission",
      handler: "event-submission.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/event-submission/:id",
      handler: "event-submission.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/event-submission",
      handler: "event-submission.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/event-submission/:id",
      handler: "event-submission.update",
      config: {
        policies: [],
      },
    },
  ],
};
