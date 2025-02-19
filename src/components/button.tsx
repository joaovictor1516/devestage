"use client"

import { ReactNode } from "react"

interface ButtonProps{
	children: ReactNode
}

export function Button(props: ButtonProps){
	return (
		<button className="flex justify-between items-center bg-gray-500 border-blue text-blue w-full h-12 px-5 font-semibold rounded-xl cursor-pointer transition duration-300 hover:bg-blue hover:text-gray-900">
			{props.children}
		</button>
	)
}