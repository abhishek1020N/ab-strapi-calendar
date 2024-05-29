"use strict";

/**
 *  router
 */

module.exports = {
  type: "content-api", // other type available: admin.
  routes: [
    {
      method: "GET",
      path: "/event",
      handler: "event.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/event/:id",
      handler: "event.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/event",
      handler: "event.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/event/:id",
      handler: "event.update",
      config: {
        policies: [],
      },
    },
  ],
};
