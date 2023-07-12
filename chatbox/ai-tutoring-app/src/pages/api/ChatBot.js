import { useState } from "react";

export default function useChat() {
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
		 * NOTE: this doesn't work as expected. Need logic change.
		 */
		// setChat((prevChat) => prevChat + "\n\nBot: " + botResponse);
	};

	return { chat, setChat, botResponse, sendToserver };
}
