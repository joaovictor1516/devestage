import { redis } from "../redis/client";

interface AccessInviteLinkParams {
	subscriberId: string;
}

export async function accessInviteLinkFunction({
	subscriberId,
}: AccessInviteLinkParams) {
	await redis.hincrby("referral:acceess-count", subscriberId, 1);
}
