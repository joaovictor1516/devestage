"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { subscribeToEvent } from "@/http/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SubscriptionFormSchema = z.object({
	name: z.string().min(3, "Digite seu nome completo."),
	email: z.string().email("Digite um e-mail válido"),
});

type SubscriptionFormType = z.infer<typeof SubscriptionFormSchema>;

export function SubscriptionForm() {
	const router = useRouter();
	const searchParms = useSearchParams();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionFormType>({
		resolver: zodResolver(SubscriptionFormSchema),
	});

	async function onSubscribe({ name, email }: SubscriptionFormType) {
		const referrer = searchParms.get("referrer");
		const { subscriberId } = await subscribeToEvent({ name, email, referrer });

		router.push(`/invite/${subscriberId}`);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				inscrição
			</h2>

			<div className="space-y-3">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Nome Completo"
							{...register("name")}
						/>
					</InputRoot>

					{errors.name && (
						<p className="text-danger text-xs font-semibold">
							{errors.name.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail />
						</InputIcon>
						<InputField placeholder="E-mail" {...register("email")} />
					</InputRoot>

					{errors.email && (
						<p className="text-danger text-xs font-semibold">
							{errors.email.message}
						</p>
					)}
				</div>
			</div>

			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}
