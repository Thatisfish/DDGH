import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import heroImg from "../images/Home/about_top.avif"; // 自行換圖

const ScienceTCM = () => {
	const features = [
		{ title: "來源可追", desc: "與合格藥廠合作，批批留樣與檢驗報告可查。" },
		{ title: "品質穩定", desc: "採用標準化萃取，劑量與效價一致。" },
		{ title: "使用便利", desc: "沖泡即飲或依處方配伍，提升服用便利性。" }
	];

	const steps = [
		{ title: "需求評估", desc: "了解用藥情境與體質建議，提供合適產品線。" },
		{ title: "產品篩選", desc: "依成分、劑型與劑量進行搭配，必要時諮詢專業人員。" },
		{ title: "出貨與追蹤", desc: "妥善包裝出貨，後續提供使用回饋與補充建議。" }
	];

	const faqs = [
		{ q: "科學中藥與傳統飲片差在哪裡？", a: "科學中藥為濃縮萃取後製成顆粒或粉末，劑量與品質較一致；飲片需以傳統煎煮方式取得藥效。兩者可依需求選用。" },
		{ q: "保存方式？", a: "置於陰涼乾燥處，避免日曬與受潮；依包裝有效期使用。" }
	];

	return (
		<ServiceTemplate
			hero={heroImg}
			title="科學中藥"
			subtitle="標準化萃取，品質可追、劑量穩定"
			features={features}
			steps={steps}
			faqs={faqs}
			cta={{ href: "/#contact" }}
		/>
	);
};

export default ScienceTCM;
