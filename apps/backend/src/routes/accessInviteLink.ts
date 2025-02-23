import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { env } from "../env";

export const AccessInviteLinkRout: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/invites/:subscriberId",
		{
			schema: {
				tags: ["referral"],
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					302: z.null(),
				},
			},
		},
		async (request, reply) => {
			const { subscriberId } = request.params;

			const redirectUrl = new URL(env.WEB_URL);

			redirectUrl.searchParams.set('referrer', subscriberId);

			//301: redirecionamento permanente (usa o cache do browser)
			//302: redirecionamento temporário (não usa o cache do browser)

			return reply.redirect(redirectUrl.toString(), 302);
		},
	);
};
