import Head from "next/head";
import { Inter } from "next/font/google";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>AI Tutoring App by Brandon and Sean</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar></NavBar>
			<Landing></Landing>
			<About></About>
			<Contact></Contact>
		</>
	);
}
