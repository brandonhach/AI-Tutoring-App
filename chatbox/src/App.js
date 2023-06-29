import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Chatbox from "./Components/Chatbox/Chatbox";
import About from "./Components/About/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/chatbox" element={<Chatbox></Chatbox>}></Route>
				<Route path="/about" element={<About></About>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
