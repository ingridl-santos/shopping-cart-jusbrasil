import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import Product from '../../models/product';
import {
	DecrementQuantityInput,
	ProductInput,
	UpdateProductInput,
} from './productType';

@Resolver()
export default class ProductResolver {
	@Mutation(() => Product)
	async createProduct(@Arg('input', () => ProductInput) input: ProductInput) {
		const product = await Product.create(input).save();
		return product;
	}

	@Mutation(() => Product, { nullable: true })
	async updateProduct(
		@Arg('id') id: string,
		@Arg('input', () => UpdateProductInput) input: UpdateProductInput
	) {
		const product = await Product.findOne({ id });

		if (!product) {
			return null;
		}

		const updateProduct = Product.create({
			id: product.id,
			title: product.title,
			image: product.image,
			description: product.description,
			price: product.price,
			quantity: product.quantity,
		});
		await updateProduct.save();
		return updateProduct;
	}

	@Mutation(() => Product, { nullable: true })
	async decrementProductQuantity(
		@Arg('input', () => [DecrementQuantityInput])
		input: [DecrementQuantityInput]
	) {
		input.forEach(async (element) => {
			const product = await Product.findOne({ id: element.id });

			if (product) {
				this.updateProduct(element.id, {
					quantity: product.quantity - element.quantity,
				});
			}
		});
	}

	@Mutation(() => Boolean)
	async deleteProduct(@Arg('id') id: string) {
		const product = await Product.findOne({ id });

		if (product) {
			return false;
		}

		Product.delete({ id });
		return true;
	}

	@Query(() => [Product])
	async getAllProducts() {
		return Product.find();
	}
}
