import Head from "next/head";
import Layout from "../../components/layout";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import useChat from "./api/ChatBot";

export default function ChatPage() {
	const { chat, setChat, botResponse, sendToserver } = useChat();

	return (
		<div>
			<Layout>
				<Head>
					<title>Chat with a personalized AI Tutor</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<NavBar></NavBar>
				<h1>Welcome to the AI Tutor App!</h1>
				<h3>developed by Brandon and Sean</h3>
				<p>
					Here you can chat with our trained AI to help you learn any concept with ease!
				</p>
				<textarea
					id="chatbox"
					rows="10"
					cols="50"
					value={chat}
					onChange={(e) => setChat(e.target.value)}></textarea>
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
