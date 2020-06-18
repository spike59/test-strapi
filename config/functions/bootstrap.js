'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */
//require('dotenv').config({ path: require('find-config')('.env') })
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: require('find-config')('.env.' + process.env.NODE_ENV) })
    //require('dotenv').config();
  }
console.log("loading",process.env.NODE_ENV);
console.log("port",process.env.PORT);
console.log("host",process.env.HOST);
module.exports = () => {};
