module.exports = ({ env }) => ({
  host: env('HOST', 'strapi.localhost'),
  port: env.int('PORT', 1337),
});
