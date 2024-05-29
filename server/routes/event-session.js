"use strict";

/**
 *  router
 */

module.exports = {
  type: "content-api", // other type available: admin.
  routes: [
    {
      method: "GET",
      path: "/event-session",
      handler: "event-session.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/event-session/:id",
      handler: "event-session.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/event-session",
      handler: "event-session.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/event-session/:id",
      handler: "event-session.update",
      config: {
        policies: [],
      },
    },
  ],
};
