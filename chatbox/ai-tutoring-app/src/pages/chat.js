import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { useState } from "react";

export default function Chat() {
	/**
	 * 	useState for holding prompt from user and response from bot
	 */
	const [chat, setChat] = useState("");
	const [botResponse, setBotResponse] = useState("");

	/**
	 * Async function responsible for sending a GET request to our custom API.
	 * The purpose is to interact with a chatbot by sending the user's prompt to
	 * recieve a response from the bot.
	 */
	const sendToserver = async () => {
		/**
		 * Send a GET request to the chatbot endpoint.
		 * Chat is appended as "prompt" in the URL.
		 */
		const response = await fetch("http://localhost:8080/bot/chat?prompt=" + chat, {
			method: "Get",
			headers: {
				"Content-Type": "application/json",
			},
		});

		/**
		 * botResponse is received as text.
		 * Then updates the botResponse state with the chatbot's response.
		 */
		const botResponse = await response.text();
		setBotResponse(botResponse);

		/**
		 * Stores the current message using Arrow function.
		 * To log responses or prompt, invoked logic into springboot.
		 */
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
