// Require the fastify framework and instantiate it
import fastify from "fastify";

const server = fastify({ logger: true });

// Require external modules
import { connect } from "mongoose";

// Connect to DB
connect(
  "mongodb+srv://TheDycker:nSelmRNedh3DDKCJ@cluster0-adnzn.mongodb.net/Master-Thesis?retryWrites=true&w=majority"
)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

export default server;
