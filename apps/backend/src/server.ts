import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
	type ZodTypeProvider,
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "./env";
import { accessInviteLinkRoute } from "./routes/accessInviteLinkRoute";
import { getRankRoute } from "./routes/getRankRoute";
import { getSubscriberInviteClicksRoute } from "./routes/getSubscriberInviteClicksRoute";
import { getSubscriberInviteRankPositionRoute } from "./routes/getSubscriberInviteRankPositionRoute";
import { getSubscriberInvitesCountRoute } from "./routes/getSubscriberInvitesCountRoute";
import { subscribeToEventRoute } from "./routes/subscribeToEventRoute";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
	origin: "http://localhost:3000",
});

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "devstage",
			version: "0.0.1",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
	routePrefix: "/docs",
});

app.register(getRankRoute);
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberInviteRankPositionRoute);

app.listen({ port: env.PORT }).then(() => {
	console.log("HTTP server running.");
});
