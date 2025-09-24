import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import MemberArea from './pages/MemberArea'
import HerbalGallery from './pages/HerbalGallery'


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/MemberArea" element={<MemberArea />} />
				<Route path="/HerbalGallery" element={<HerbalGallery />} />

			</Routes>
			<Footer />
		</>
	);
}

export default App;
