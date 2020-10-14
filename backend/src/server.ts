import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import 'reflect-metadata';
import './db';
import ProductResolver from './resolvers/Products';
import OrderResolver from './resolvers/Orders';
import CreditCardResolver from './resolvers/CreditCards';

const app = express();

(async () => {
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [ProductResolver, OrderResolver, CreditCardResolver],
		}),
		context: ({ req, res }) => ({ req, res }),
	});

	app.use(cors());
	apolloServer.applyMiddleware({ app, cors: false });
	app.use(express.json());
	app.listen(4000, () => {
		console.log(`Server started on http://localhost:4000`);
	});
})();
