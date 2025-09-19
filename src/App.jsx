import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import TCM from './pages/TCM'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/TCM" element={<TCM />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
