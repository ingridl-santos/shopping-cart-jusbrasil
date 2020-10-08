export interface CreditCard {
	id: string;
	number: string;
	name: string;
	expire: string;
	cvv: string;
	isValid: boolean;
}

export interface getDataOfCreditCard {
	getCreditCard: CreditCard;
}

export interface CreditCardValidate {
	input: {
		name: string;
		number: string;
		expiration: string;
		cvv: string;
	};
}
