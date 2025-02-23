import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInviteClicks } from "../functions/getSubscriberInviteClicks";

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get(
		"/subscriber/:subscriberId/ranking/clicks",
		{
			schema: {
				tags: ["referral"],
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					200: z.object({
						count: z.number(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { subscriberId } = request.params;

			const { count } = await getSubscriberInviteClicks({ subscriberId });

			return reply.status(200).send({ count });
		},
	);
};
