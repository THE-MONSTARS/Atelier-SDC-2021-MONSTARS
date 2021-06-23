const fastify = require('fastify')
const products = require('./products')
// ({
//   logger: true,
// });

// const products = require('./products/index.js')

// CLI prettytext
// module.exports = async function(fastify, opts) {
// }

fastify
  .register(require('./products'), { prefix: '/products' });

fastify.listen(3000)
  .then((address: string) => console.log('listening on ', address))
  .catch((err: Error) => {
    console.log('error starting server', err);
    process.exit(1);
  });
