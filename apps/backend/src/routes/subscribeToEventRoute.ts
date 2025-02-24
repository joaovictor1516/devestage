import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { subscribeToEventFunction } from "../functions/subscribeToEvent";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/subscription",
		{
			schema: {
				tags: ["subscribe"],
				body: z.object({
					name: z.string().min(3, "Digite seu nome completo."),
					email: z.string().email("Digite um e-mail válido."),
					referrerId: z.string().nullish(),
				}),
				response: {
					201: z.object({
						subscriberId: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { name, email, referrerId } = request.body;

			const { subscriberId } = await subscribeToEventFunction({
				name,
				email,
				referrerId,
			});

			return reply.status(201).send({
				subscriberId,
			});
		},
	);
};
