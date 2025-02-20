import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Ranking } from "./components/ranking";
import { Stats } from "./components/stats";
import { InviteLinkInput } from "./components/inviteLinkInput";

export default function Invite() {
	return (
		<div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
			<div className="flex flex-col gap-10 w-full max-w-[550px]">
				<Image src={logo} alt={"devestage"} width={108.5} height={30} />

				<div className="gap-y-2">
					<h1 className="text-4xl font-semibold font-heading leading-none text-gray-100">
						Incrição confirmada!!
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link enviado para seu e-mail.
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="text-gray-200 text-xl font-semibold font-heading leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>

					<InviteLinkInput/>

					<Stats/>
				</div>
			</div>
			<Ranking />
		</div>
	);
}
