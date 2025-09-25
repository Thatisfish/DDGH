import { useEffect, useState, useCallback } from "react";
import "../styles/components/BackToTop.scss"

export default function BackToTop({
	offset = 240,        // 何時顯示（滾超過多少 px）
	right = 30,          // 右側距離
	bottom = 24,         // 底側距離
	label = "回到最上方",
}) {
	const [show, setShow] = useState(false);

	const onScroll = useCallback(() => {
		const y = window.scrollY || document.documentElement.scrollTop;
		setShow(y > offset);
	}, [offset]);

	useEffect(() => {
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [onScroll]);

	const scrollToTop = () => {
		// 若使用者偏好「少動畫」，就直接跳到頂端
		const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
		window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); // smooth（平滑）
	};

	return (
		<button
			type="button"
			className="backtotop"
			aria-label={label}
			title={label}
			onClick={scrollToTop}
			data-visible={show ? "true" : "false"}
			style={{ right: `${right}px`, bottom: `${bottom}px` }}
		>
			<span className="backtotop__icon" aria-hidden="true">↑</span>
		</button>
	);
}
