import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "./src/schema";
import expressPlayGround from "graphql-playground-middleware-express";
const { parsed: { PORT, GQL } } = require('dotenv').config();

const app = express();

app.use(cors())
app.use(compression())


const server = new ApolloServer({ schema, introspection: !0 })

server.applyMiddleware({ app })
app.get('/', expressPlayGround({ endpoint: '/graphql' }))

const httpServer = createServer(app)

httpServer.listen(PORT, () => console.log(GQL))
