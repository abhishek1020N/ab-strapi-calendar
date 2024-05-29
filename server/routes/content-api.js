"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

module.exports = {
    type: 'content-api',
    routes: [
        {
            method: 'POST',
            path: '/book',
            handler: 'controller.bookEvent',
            config: {
                policies: [],
            },
        }
    ],
};
