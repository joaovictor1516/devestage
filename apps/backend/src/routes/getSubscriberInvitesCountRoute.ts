import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInvitesCount } from "../functions/getSubscriberInvitesCount";
export const getSubscriberInvitesCountRoute: FastifyPluginAsyncZod = async (
    app,
) => {
    app.get(
        "/subscriber/:subscriberId/ranking/count",
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

            const { count } = await getSubscriberInvitesCount({ subscriberId });

            return reply.status(200).send({ count });
        },
    );
};
