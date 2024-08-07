"use strict";

/**
 *  router
 */

module.exports = {
  type: "content-api", // other type available: admin.
  routes: [
    {
      method: "GET",
      path: "/event-type",
      handler: "event-type.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/event-type/:id",
      handler: "event-type.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/event-type",
      handler: "event-type.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/event-type/:id",
      handler: "event-type.update",
      config: {
        policies: [],
      },
    },
  ],
};
