"use client"

interface IconButtonProps{
    image: string;
}

export function IconButton(props: IconButtonProps){
    <button className="bg-gray-500 text-blue hover:bg-blue hover:text-gray-900">
        <span>
            {props.image}
        </span>
    </button>
}