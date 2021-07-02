// Require the fastify framework and instantiate it
import server from "./server";
const path = require("path");
// Import external dependancies
import gql from "fastify-gql";

// Import GraphQL Schema
import schema from "./schema";

// Register Fastify GraphQL
server.register(gql, {
  schema,
  graphiql: true,
});

server.register(require("fastify-static"), {
  root: path.join(__dirname, "../frontend/build"),
  prefix: "/app", // optional: default '/'
});

const port = process.env.PORT || 5000;

// Run the server!
const start = async () => {
  try {
    await server.listen(port, "0.0.0.0");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
