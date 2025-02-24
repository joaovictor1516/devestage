import { redis } from "../redis/client";

interface getSubscriberInviteRankPositionParams {
	subscriberId: string;
}

export async function getSubscriberInviteRankPosition({
	subscriberId,
}: getSubscriberInviteRankPositionParams) {
	const rank = await redis.zrevrank("referral:rank", subscriberId);

	if (rank !== null) {
		return { position: rank + 1 };
	}

	return { position: null };
}
