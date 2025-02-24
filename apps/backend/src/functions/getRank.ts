import { object } from "zod";
import { database } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";
import { inArray } from "drizzle-orm";

export async function getRank(){
    const rank = await redis.zrevrange("referral:rank", 0, 2, "WITHSCORES");
    const subscriberIdsAndScores: Record<string, number> = {};

    for(let i = 0; i < rank.length; i += 2){
        subscriberIdsAndScores[rank[i]] = Number.parseInt(rank[i + 1]);
    }

    const subscribers = database
    .select()
    .from(subscriptions)
    .where(inArray(subscriptions.id, Object.keys(subscriberIdsAndScores)));

    const subscribersRank = (await subscribers).map((subscriber) => {
      return {
        id: subscriber.id,
        name: subscriber.name,
        score: subscriberIdsAndScores[subscriber.id]
      }  
    }).sort((sub1, sub2) => sub2.score - sub1.score);

    return {subscribersRank};
}