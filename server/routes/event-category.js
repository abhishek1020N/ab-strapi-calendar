"use strict";

/**
 *  router
 */

module.exports = {
  type: "content-api", // other type available: admin.
  routes: [
    {
      method: "GET",
      path: "/event-category",
      handler: "event-category.find",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/event-category/:id",
      handler: "event-category.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/event-category",
      handler: "event-category.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/event-category/:id",
      handler: "event-category.update",
      config: {
        policies: [],
      },
    },
  ],
};
