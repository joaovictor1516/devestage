interface ButtonProps{
	text?: string;
}

export function Button(props: ButtonProps){
	return (
		<button className="bg-blue text-gray-100 px-2">
			{props.text || "Enviar"}
		</button>
	)
}