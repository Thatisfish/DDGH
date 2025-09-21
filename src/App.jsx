import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import MemberArea from './pages/MemberArea'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/MemberArea" element={<MemberArea />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
