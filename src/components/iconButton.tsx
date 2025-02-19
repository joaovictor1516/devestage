"use client";

import type { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
	return (
		<button
			className="bg-gray-500 text-blue hover:bg-blue hover:text-gray-900 p-1.5 rounded-md cursor-pointer transition duration-300"
			{...props}
		/>
	);
}
