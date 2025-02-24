import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getRank } from "../functions/getRank";

export const getRankRoute: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/ranking",
		{
			schema: {
				tags: ["referral"],
				response: {
					200: z.object({
						rank: z.array(
							z.object({
								id: z.string(),
								name: z.string(),
								score: z.number(),
							}),
						),
					}),
				},
			},
		},
		async (request, response) => {
			const { subscribersRank } = await getRank();

			return response.code(200).send({ rank: subscribersRank });
		},
	);
};
