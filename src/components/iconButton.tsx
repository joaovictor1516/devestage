"use client";

import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: IconButtonProps) {
	return (
		<button
			className={twMerge(
				"bg-gray-500 text-blue hover:bg-blue hover:text-gray-900 p-1.5 rounded-md cursor-pointer transition duration-300",
				className,
			)}
			{...props}
		/>
	);
}
