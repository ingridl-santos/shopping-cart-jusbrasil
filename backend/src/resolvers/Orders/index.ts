import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Order from '../../models/order';
import OrderInput from './ordersType';

@Resolver()
export default class OrderResolver {
	@Mutation(() => Order)
	async createOrder(@Arg('input', () => OrderInput) input: OrderInput) {
		const order = await Order.create({
			products: input.products,
		}).save();
		return order;
	}

	@Query(() => [Order])
	async getAllOrders() {
		return Order.find();
	}
}
