"use client";

import { IconButton } from "@/components/iconButton";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps{
	inviteLink: string;
}

export function InviteLinkInput(props: InviteLinkInputProps) {
	function handleCopyLink() {
		navigator.clipboard.writeText(props.inviteLink);
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField
				readOnly
				defaultValue={props.inviteLink}
			/>

			<IconButton className="-mr-2" onClick={handleCopyLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
