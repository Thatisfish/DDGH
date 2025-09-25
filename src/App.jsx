import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import MemberArea from './pages/MemberArea';
import HerbalGallery from './pages/HerbalGallery';
import WellnessFood from './pages/WellnessFood';
import TCM from './pages/TCM';
import HerbalSlices from './pages/HerbalSlices';
import Decoction from './pages/Decoction';
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";
import BackToTop from "./components/BackToTop";
import Dashboard from './pages/Dashboard'
import DecoctionTool from "./pages/DecoctionTool"

// ✅ 新增：集中掛載用的 HOC（High-Order Component 高階元件）
import { withDisclaimer } from "./components/withDisclaimer";

// ✅ 用 HOC 包起來（本草藥閣）
const HerbalGalleryPage = withDisclaimer(HerbalGallery, {
	pageKey: "herbarium",
	title: "中藥文化館｜本草藥閣 使用前提醒",
	lines: [
		"本區內容僅提供中藥相關之知識科普與文化介紹，非醫療建議與處方。",
		"任何疾病症狀、用藥需求或體質調理，請務必先諮詢合格中醫師或藥師。",
		"請勿自行依本文內容進行診斷、停藥或更改療程。"
	],
	confirmText: "我已閱讀並了解"
});

// ✅ 用 HOC 包起來（養生食光）
const WellnessFoodPage = withDisclaimer(WellnessFood, {
	pageKey: "wellnessFood",
	title: "中藥文化館｜養生食光 使用前提醒",
	lines: [
		"本頁之食譜與素材僅供飲食與文化參考，並非醫療建議。",
		"如有慢性疾病、孕哺情況、兒童與高齡者等族群，請先諮詢合格中醫師或藥師後再行食用。",
		"個人體質差異甚大，請勿自行嘗試具藥性之食材與方劑。"
	],
	confirmText: "我已閱讀並了解"
});

function App() {
	return (
		<>
			<ScrollToTop />
			<ScrollToHashElement />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/MemberArea" element={<MemberArea />} />
				{/* ✅ 兩個文化館頁面改用包裝後的版本 */}
				<Route path="/HerbalGallery" element={<HerbalGalleryPage />} />
				<Route path="/WellnessFood" element={<WellnessFoodPage />} />
				{/* 其他頁面照舊 */}
				<Route path="/TCM" element={<TCM />} />
				<Route path="/HerbalSlices" element={<HerbalSlices />} />
				<Route path="/Decoction" element={<Decoction />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/DecoctionTool" element={<DecoctionTool />} />
			</Routes>
			<BackToTop />
			<Footer />
		</>
	);
}

export default App;
