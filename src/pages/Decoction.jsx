import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import heroImg from "../images/Home/about_mid.png"; // 自行換圖

const Decoction = () => {
	const features = [
		{ title: "標準煎煮", desc: "以定時、定溫、定量流程代煎，確保湯液濃度與衛生。" },
		{ title: "衛生包裝", desc: "高溫殺菌後充填鋁袋，常溫保存更安心。" },
		{ title: "出貨冷鏈", desc: "依需求提供冷藏配送，維持品質穩定。" }
	];

	const steps = [
		{ title: "處方確認", desc: "依醫師或合格人員開立之處方備料。" },
		{ title: "標準代煎", desc: "按藥性分段入煎與時間控制，完整萃取有效成分。" },
		{ title: "充填封裝", desc: "完成後即時過濾、充填與封口，貼附批次標籤以利追蹤。" }
	];

	const faqs = [
		{ q: "保存與飲用方式？", a: "未開封置陰涼處；開封後須冷藏並於 24–48 小時內飲用。飲用前隔水加熱至溫熱即可。" },
		{ q: "可否客製？", a: "可依處方客製，含加減味、飲用分次與袋數需求等。" }
	];

	return (
		<ServiceTemplate
			hero={heroImg}
			title="水藥代煎"
			subtitle="專業煎煮與無菌封裝，省時安心"
			features={features}
			steps={steps}
			faqs={faqs}
			cta={{ href: "/#contact" }}
		/>
	);
};

export default Decoction;
