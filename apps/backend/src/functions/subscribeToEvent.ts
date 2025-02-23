import { eq } from "drizzle-orm";
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
	const subscribers = await database
	.select()
	.from(subscriptions)
	.where(eq(subscriptions.email, email));

	if(subscribers.length > 0){
		return {subscriberId: subscribers[0].id} //reaproveitando a inscrição existente.
	}

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
