import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import ProductResolver from './resolvers/Products';
import OrderResolver from './resolvers/Orders';
import CreditCardResolver from './resolvers/CreditCards';

async function main() {
	await createConnection();
	const schema = await buildSchema({
		resolvers: [ProductResolver, OrderResolver, CreditCardResolver],
	});
	const server = new ApolloServer({ schema });
	await server.listen(4000);
	console.log('Server has started!');
}

main();
