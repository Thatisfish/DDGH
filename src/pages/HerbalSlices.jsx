import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import heroImg from "../images/Home/about_bot.png"; // 自行換圖

const HerbSlices = () => {
	const features = [
		{ title: "嚴選來源", desc: "藥材來源清楚，必要時附檢驗報告。" },
		{ title: "妥善儲存", desc: "恆溫乾燥、分區管理與防蟲措施，維持品質。" },
		{ title: "切製規範", desc: "依飲片標準切製與炮製規格，利於煎煮與吸收。" }
	];

	const steps = [
		{ title: "訂單確認", desc: "確認品項、規格與重量，必要時提供替代建議。" },
		{ title: "揀選分裝", desc: "依批次先入先出原則分裝，貼標記錄。" },
		{ title: "出貨與追溯", desc: "提供批號與保存建議，確保後續可追蹤。" }
	];

	const faqs = [
		{ q: "是否提供炮製品？", a: "可提供多種炮製飲片，依處方需求備貨。" },
		{ q: "保存期限？", a: "依藥材性質不同，一般建議 12–24 個月內用畢；請置陰涼乾燥處並避免日曬與受潮。" }
	];

	return (
		<ServiceTemplate
			hero={heroImg}
			title="藥材飲片"
			subtitle="嚴選產地與規格，切製規範、品質穩定"
			features={features}
			steps={steps}
			faqs={faqs}
			cta={{ href: "/#contact" }}
		/>
	);
};

export default HerbSlices;
