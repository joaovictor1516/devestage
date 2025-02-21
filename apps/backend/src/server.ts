import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import {
	validatorCompiler,
	serializerCompiler,
	jsonSchemaTransform,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { subscribeToEventRoute } from "./routs/subscribeToEventRoute";

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
    routePrefix: "/docs"
});

app.register(subscribeToEventRoute);

app.listen({ port: 3333 }).then(() => {
	console.log("HTTP server running.");
});
