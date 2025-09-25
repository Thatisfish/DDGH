import { useEffect, useRef, useState } from "react";
import "../styles/components/SafetyDisclaimer.scss";

/**
 * SafetyDisclaimer（安全聲明彈窗）
 * props:
 * - pageKey: string（此頁唯一鍵，例如 "herbarium" / "wellnessFood"）
 * - title: string（標題）
 * - lines: string[]（逐行文字）
 * - confirmText: string（確認按鈕文字）
 * - onOpen?: () => void（彈窗開啟時回呼）
 * - onClose?: () => void（按下確認關閉時回呼）
 *
 * 用法：在頁面頂端放 <SafetyDisclaimer .../> 即可。
 */
export default function SafetyDisclaimer({
	pageKey,
	title = "使用前提醒",
	lines = [],
	confirmText = "我了解並同意",
	onOpen,
	onClose
}) {
	// sessionStorage key（工作階段儲存鍵）
	const SS_KEY = `disclaimer.${pageKey}.v1`;
	const [open, setOpen] = useState(false);
	const firstBtnRef = useRef(null);

	useEffect(() => {
		const seen = sessionStorage.getItem(SS_KEY);
		if (!seen) {
			setOpen(true);
			document.body.classList.add("sd--lock");
			onOpen?.();
		}
		// Esc 關閉
		const onKey = (e) => {
			if (e.key === "Escape" && open) {
				handleConfirm();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// 開啟後把焦點移到按鈕（基本可及性）
		if (open && firstBtnRef.current) {
			firstBtnRef.current.focus();
		}
	}, [open]);

	function handleConfirm() {
		sessionStorage.setItem(SS_KEY, "1");
		setOpen(false);
		document.body.classList.remove("sd--lock");
		onClose?.();
	}

	if (!open) return null;

	return (
		<div className="sd">
			<div className="sd__backdrop" aria-hidden="true" />
			<div className="sd__dialog" role="dialog" aria-modal="true" aria-labelledby="sd-title">
				<h3 id="sd-title" className="sd__title">{title}</h3>
				<div className="sd__content">
					{lines.map((t, i) => (
						<p key={i} className="sd__line">{t}</p>
					))}
				</div>
				<button
					ref={firstBtnRef}
					type="button"
					className="sd__btn"
					onClick={handleConfirm}
				>
					{confirmText}
				</button>
			</div>
		</div>
	);
}
