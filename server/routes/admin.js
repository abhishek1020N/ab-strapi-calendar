module.exports = {
    type: 'admin',
    routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'controller.getData',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/settings/collections',
      handler: 'controller.getCollections',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/extensions',
      handler: 'controller.getExtensions',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/settings',
      handler: 'controller.getSettings',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/settings',
      handler: 'controller.setSettings',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/book",
      handler: "controller.bookEvent",
      config: {
        policies: [],
      },
    },
  ]
};
  