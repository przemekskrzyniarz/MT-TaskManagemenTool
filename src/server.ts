// Require the fastify framework and instantiate it
import fastify from "fastify";

const server = fastify({ logger: true });
require("dotenv").config();

const uri = process.env.MONGODB_URI;

// Require external modules
import { connect } from "mongoose";

// Connect to DB
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => await console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

export default server;
