import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/subscription",
		{
			schema: {
				tags: ["subscribe"],
				body: z.object({
					name: z.string().min(3, "Digite seu nome completo."),
					email: z.string().email("Digite um e-mail válido."),
				}),
				response: {
					201: z.object({
						name: z.string(),
						email: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { name, email } = request.body;

			return reply.status(201).send({
				name,
				email,
			});
		},
	);
};
