import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInviteRankPosition } from "../functions/getSubscriberInviteRankPosition";

export const getSubscriberInviteRankPositionRoute: FastifyPluginAsyncZod =
	async (app) => {
		app.get(
			"/subscriber/:subscriberId/ranking/position",
			{
				schema: {
					tags: ["referral"],
					params: z.object({
						subscriberId: z.string(),
					}),
					response: {
						200: z.object({
							position: z.number().nullable(),
						}),
					},
				},
			},
			async (request, response) => {
				const { subscriberId } = request.params;

				const position = await getSubscriberInviteRankPosition({
					subscriberId,
				});

				return response.code(200).send({
					position: Number(position),
				});
			},
		);
	};
