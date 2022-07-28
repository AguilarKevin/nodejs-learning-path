import Fastify from "fastify";

const fastify = Fastify();

fastify.register(import("./plugin.js"));

fastify.listen({ port: 3000 }, console.log);
