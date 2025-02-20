import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
	error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
	return (
		<div
			data-error={error}
			className="group bg-gray-800 border border-gray-600 rounded-xl flex items-center gap-2 px-4 h-12 focus-within:border-gray-100 data-[error=true]:border-danger"
			{...props}
		/>
	);
}

interface InputIconsProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconsProps) {
	return (
		<span
			className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
			{...props}
		/>
	);
}

interface InputFieldsProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldsProps) {
	return <input className="flex-1 outline-0" {...props} />;
}
