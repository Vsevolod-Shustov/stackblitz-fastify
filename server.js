const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const helmet = require('@fastify/helmet')
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await fastify.register(cors, { 
      origin: '*'
    });
    await fastify.listen({ port: PORT });
    
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

fastify.register(require('./routes/posts'));

startServer();
