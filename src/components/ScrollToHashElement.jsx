import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({ behavior: "smooth" }); // 平滑捲動
			}
		}
	}, [location]);

	return null;
};

export default ScrollToHashElement;
