import { eq } from "drizzle-orm";
import { database } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";

interface SubscribeToEventParams {
	name: string;
	email: string;
	referrerId?: string | null;
}

export async function subscribeToEventFunction({
	name,
	email,
	referrerId
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

	if(referrerId){
		await redis.zincrby("referral:rank", 1, referrerId);//a principal diferença entre o zincrby do hincrby é que o primeiro ordena do maior para o menor de forma automática.
	}

	const subscriptionInformations = result[0];

	return {
		subscriberId: subscriptionInformations.id,
	};
}
