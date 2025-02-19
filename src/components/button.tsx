"use client";

import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {} //Como a tag button recebe valores dentro dela não é necessario a utilização do ReactNode.

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between items-center bg-gray-500 border-blue text-blue w-full h-12 px-5 font-semibold rounded-xl cursor-pointer transition duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/> //A função do react ComponentProps nos permite utilizar as funcionalidades de uma tag do HTML.
	);
}
