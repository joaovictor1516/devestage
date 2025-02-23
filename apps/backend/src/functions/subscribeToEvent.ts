import { database } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";

interface SubscribeToEventParams {
	name: string;
	email: string;
}

export async function subscribeToEventFunction({
	name,
	email,
}: SubscribeToEventParams) {
	const result = await database
		.insert(subscriptions)
		.values({
			name,
			email,
		})
		.returning();

	const subscriptionInformations = result[0];

	return {
		subscriberId: subscriptionInformations.id,
	};
}
