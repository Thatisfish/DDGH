import React from "react";
import "../styles/components/ServiceTemplate.scss"
import { Link } from "react-router-dom";


const ServiceTemplate = ({ hero, title, subtitle, features = [], steps = [], faqs = [], cta }) => {
	return (
		<section className="ser">
			{/* Hero */}
			<div className="ser__hero" style={{ backgroundImage: `url(${hero})` }}>
				<div className="ser__hero-mask" />
				<div className="ser__hero-text">
					<h1 className="ser__title">{title}</h1>
					<p className="ser__subtitle">{subtitle}</p>
				</div>
			</div>

			{/* Intro (左圖右文) */}
			<div className="ser__intro">
				<div className="ser__intro-figure">
					<div className="ser__frame" />
					<div className="ser__photo" style={{ backgroundImage: `url(${hero})` }} />
				</div>
				<div className="ser__intro-body">
					<h2>服務說明</h2>
					<p>
						我們以嚴謹流程把關品質，從藥材來源、保存到出貨，全程記錄；並以「專業、透明、穩定」為核心，
						協助診所（clinic，診療所）、藥局（pharmacy，藥房）與一般大眾理解中藥（Traditional Chinese Medicine，傳統中醫藥）的現代化應用。
					</p>
					<ul className="ser__bullets">
						{features.map((f, i) => (
							<li key={i}>
								<h3>{f.title}</h3>
								<p>{f.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Steps */}
			<div className="ser__steps">
				<h2>服務流程</h2>
				<ol className="steps">
					{steps.map((s, i) => (
						<li className="steps__item" key={i}>
							<div className="steps__num">{i + 1}</div>
							<div className="steps__content">
								<h4>{s.title}</h4>
								<p>{s.desc}</p>
							</div>
						</li>
					))}
				</ol>
			</div>

			{/* FAQ */}
			<div className="ser__faq">
				<h2>常見問題</h2>
				<div className="faq">
					{faqs.map((q, i) => (
						<details className="faq__item" key={i}>
							<summary>{q.q}</summary>
							<p>{q.a}</p>
						</details>
					))}
				</div>
			</div>

			{/* CTA */}
			<div className="ser__cta">
				<div className="sc">
					<h3>{cta?.title || "想了解更多或洽詢服務？"}</h3>
					<p>{cta?.desc || "歡迎透過聯絡表單與我們聯繫，我們將儘速回覆。"}</p>
					<Link className="btn btn--primary" to={cta?.href || "/#contact"}>
						前往聯絡我們
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ServiceTemplate;
