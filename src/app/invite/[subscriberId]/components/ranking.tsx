import Image from "next/image";
import medal_1 from "../../../../assets/medal-gold.svg";
import medal_2 from "../../../../assets/medal-silver.svg";
import medal_3 from "../../../../assets/medal-cooper.svg";
import { getRanking } from "@/http/api";

export async function Ranking(){
    const { ranking } = await getRanking();

    return (
					<div className="w-full max-w-[440px] space-y-5">
						<h2 className="text-gray-200 text-xl font-semibold font-heading leading-none">
							Ranking de indicações
						</h2>

						{ranking.map((position, index) => (
							<div key={position.id} className="space-y-4">
								<div className="relative bg-gray-700 border border-gray-600 rounded-xl p-6 flex flex-col justify-center gap-3">
									<span className="text-sm text-gray-300 leading-none">
										<span className="font-semibold">{index + 1}º</span> |{" "}
										{position.name}
									</span>
									<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
										{position.score}
									</span>

									{index === 0 && (
										<Image
											src={medal_1}
											alt="Medalha de ouro"
											width={56}
											height={85.23}
											className="absolute top-0 right-8"
										/>
									)}
									{index === 1 && (
										<Image
											src={medal_2}
											alt="Medalha de prata"
											width={56}
											height={85.23}
											className="absolute top-0 right-8"
										/>
									)}
									{index === 2 && (
										<Image
											src={medal_3}
											alt="Medalha de bronze"
											width={56}
											height={85.23}
											className="absolute top-0 right-8"
										/>
									)}
								</div>
							</div>
						))}
					</div>
				);
}