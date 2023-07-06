import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { useState } from "react";

export default function Chat() {
	const [chat, setChat] = useState("");
	const [botResponse, setBotResponse] = useState("");

	const sendToserver = async () => {
		const response = await fetch("http://localhost:8080/bot/chat?prompt=" + chat, {
			method: "Get",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const botResponse = await response.text();
		setBotResponse(botResponse);
		setChat((prevChat) => prevChat + "\n\nBot: " + botResponse);
	};

	return (
		<div>
			<Layout>
				<Head>
					<title>Chat with a personalized AI Tutor</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Nav />
				<h1>Welcome to the AI Tutor App!</h1>
				<h3>developed by Brandon and Sean</h3>
				<p>
					Here you can chat with our trained AI to help you learn any concept with ease!
				</p>
				<textarea id="chatbox" rows="10" cols="50"></textarea>
				<button id="send" onClick={sendToserver}>
					Send
				</button>
				<div>
					<h3>Bot Response:</h3>
					<p>{botResponse}</p>
				</div>
			</Layout>
		</div>
	);
}
