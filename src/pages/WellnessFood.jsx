import { useMemo, useState, useEffect, useRef } from "react";
import "../styles/WellnessFood.scss";
import BackToTop from "../components/BackToTop";

/* 分類 */
const CATEGORIES = [
	{ key: "all", label: "全部" },
	{ key: "qi", label: "補氣" },
	{ key: "blood", label: "補血" },
	{ key: "kidney", label: "補腎" },
	{ key: "damp", label: "祛濕健脾" },
	{ key: "lung", label: "潤肺止咳" },
	{ key: "calm", label: "養心安神" },
	{ key: "clear", label: "清熱解毒" }
];

const DISHES = [
	{ id: "mulledwine-herbal", name: "熱紅酒", image: "./dishes/mulledwine-herbal.avif", category: "warm", herbs: ["紅棗", "桂圓", "枸杞", "肉桂", "丁香", "陳皮"], tags: ["飲品"] },
	{ id: "shishen", name: "四神湯", image: "./dishes/shishen.avif", category: "qi", herbs: ["茯苓", "淮山", "芡實", "蓮子"], tags: ["湯品"] },
	{ id: "huangqi-chicken", name: "黃耆雞湯", image: "./dishes/huangqi-chicken.avif", category: "qi", herbs: ["黃耆", "紅棗"], tags: ["湯品"] },
	{ id: "danggui-duck", name: "當歸鴨", image: "./dishes/danggui-duck.avif", category: "blood", herbs: ["當歸", "紅棗", "枸杞"], tags: ["湯品", "冬季"] },
	{ id: "siwu-chicken", name: "四物雞湯", image: "./dishes/siwu-chicken.avif", category: "blood", herbs: ["當歸", "川芎", "熟地", "白芍"], tags: ["湯品", "女性調理"] },
	{ id: "duzhong-kidney", name: "杜仲腰花", image: "./dishes/duzhong-kidney.avif", category: "kidney", herbs: ["杜仲"], tags: ["熱炒"] },
	{ id: "lamb-pot", name: "枸杞羊肉爐", image: "./dishes/lamb-pot.avif", category: "kidney", herbs: ["枸杞", "當歸", "黨參"], tags: ["火鍋", "冬季"] },
	{ id: "baihe-lotus", name: "百合蓮子湯", image: "./dishes/baihe-lotus.avif", category: "lung", herbs: ["百合", "蓮子"], tags: ["湯品", "秋季"] },
	{ id: "white-fungus", name: "銀耳蓮子湯", image: "./dishes/white-fungus.avif", category: "lung", herbs: ["銀耳", "蓮子", "紅棗"], tags: ["甜品", "秋季"] },
	{ id: "longan-redtea", name: "桂圓紅棗茶", image: "./dishes/longan-redtea.avif", category: "calm", herbs: ["桂圓", "紅棗", "枸杞"], tags: ["茶飲"] },
	{ id: "goji-osmanthus", name: "枸杞桂花凍", image: "./dishes/goji-osmanthus.avif", category: "calm", herbs: ["枸杞", "桂花"], tags: ["甜品"] },
	{ id: "longan-rice", name: "桂圓紫米粥", image: "./dishes/longan-rice.avif", category: "calm", herbs: ["桂圓", "紫米"], tags: ["粥品"] },
	{ id: "yiren-rib", name: "薏仁排骨湯", image: "./dishes/yiren-rib.avif", category: "damp", herbs: ["薏仁", "茯苓", "陳皮"], tags: ["湯品", "夏季"] },
	{ id: "longan-porridge", name: "龍眼紅棗粥", image: "./dishes/longan-porridge.avif", category: "calm", herbs: ["龍眼", "紅棗"], tags: ["粥品"] },
	{ id: "suanzaoren-porridge", name: "酸棗仁粥", image: "./dishes/suanzaoren-porridge.avif", category: "calm", herbs: ["酸棗仁"], tags: ["粥品", "安神"] },
	{ id: "ginseng-chicken", name: "人參雞湯", image: "./dishes/ginseng-chicken.avif", category: "qi", herbs: ["人參", "黃耆"], tags: ["湯品"] },
	{ id: "dangshen-goji", name: "黨參枸杞湯", image: "./dishes/dangshen-goji.avif", category: "qi", herbs: ["黨參", "枸杞", "淮山"], tags: ["湯品"] },
	{ id: "heshouwu-chicken", name: "何首烏雞湯", image: "./dishes/heshouwu-chicken.avif", category: "kidney", herbs: ["何首烏", "枸杞", "紅棗"], tags: ["湯品"] },
	{ id: "lotus-mung", name: "蓮子綠豆湯", image: "./dishes/lotus-mung.avif", category: "clear", herbs: ["蓮子", "綠豆"], tags: ["甜品", "夏季"] },
	{ id: "chrys-goji", name: "菊花枸杞茶", image: "./dishes/chrys-goji.avif", category: "clear", herbs: ["菊花", "枸杞"], tags: ["茶飲"] },
	{ id: "chuanbei-pear", name: "川貝燉梨", image: "./dishes/chuanbei-pear.avif", category: "lung", herbs: ["川貝", "雪梨"], tags: ["甜品", "秋季"] },
	{ id: "almond-lily", name: "杏仁百合湯", image: "./dishes/almond-lily.avif", category: "lung", herbs: ["南杏", "北杏", "百合"], tags: ["甜品"] }
];

/* 食譜資料 */
const RECIPES = {
	shishen: {
		serving: "2–3 人份",
		time: "90 分鐘",
		ingredients: [
			"茯苓 10g", "淮山 15g", "芡實 15g", "蓮子 15g", "豬肚/排骨 300g", "薑 3片", "鹽 適量"
		],
		steps: [
			"藥材略沖洗；蓮子去心以免苦。",
			"排骨汆燙去血水；以 1500ml 水加入藥材、薑。",
			"大火滾後轉小火 60–75 分鐘；起鍋前加鹽調味。"
		],
		tips: "脾胃虛弱、易腹瀉者建議減少芡實用量。"
	},
	"huangqi-chicken": {
		serving: "2–3 人份",
		time: "70 分鐘",
		ingredients: ["黃耆 20g", "紅棗 10 枚", "去皮雞腿 400g", "薑 4 片", "米酒 1 大匙", "鹽 適量"],
		steps: [
			"雞腿切塊汆燙；黃耆、紅棗略沖。",
			"鍋中入 1200ml 水、全部材料；大火滾後小火 50–60 分鐘後加鹽調味。",
		],
		tips: "易上火者黃耆量可減半。"
	},
	"danggui-duck": {
		serving: "3–4 人份",
		time: "90 分鐘",
		ingredients: ["當歸 10g", "紅棗 12 枚", "枸杞 15g", "鴨腿 600g", "薑 6 片", "米酒 50ml", "鹽 適量"],
		steps: [
			"鴨腿汆燙去油；藥材略沖。",
			"入鍋加 1500ml 水與米酒；大火滾後小火 70 分鐘。",
			"起鍋前加入枸杞 5 分鐘；鹽調味。"
		],
		tips: "冬季溫補佳；體質燥熱者減量或改為每週 1 次。"
	},
	"siwu-chicken": {
		serving: "2–3 人份",
		time: "80 分鐘",
		ingredients: ["當歸 6g", "川芎 6g", "熟地 10g", "白芍 10g", "雞腿 400g", "薑 4 片", "鹽 適量"],
		steps: [
			"藥材略沖；雞腿汆燙。",
			"鍋中加 1200ml 水與所有材料；小火 60 分鐘。",
			"鹽調味即可。"
		],
		tips: "偏寒痛經者可於生理期後 1 週食用；孕期請先諮詢醫師。"
	},
	"duzhong-kidney": {
		serving: "2 人份",
		time: "15 分鐘",
		ingredients: ["杜仲 8g（先泡出藥汁）", "豬腰 1 對", "薑 5 片", "米酒 1 大匙", "鹽、白胡椒 適量"],
		steps: [
			"杜仲以 300ml 水小火 10 分鐘取汁；豬腰切花去腥泡水備用。",
			"熱鍋爆香薑片，下豬腰快炒至變色，淋入杜仲汁與米酒。",
			"鹽、白胡椒調味，起鍋。"
		],
		tips: "豬腰勿久炒以免變硬；腎虛腰酸可偶爾食用。"
	},
	"white-fungus": {
		serving: "2–3 人份",
		time: "60 分鐘",
		ingredients: ["銀耳 20g", "蓮子 20g", "紅棗 8 枚", "冰糖 適量"],
		steps: [
			"銀耳泡發撕小朵；蓮子去心；紅棗去核。",
			"鍋入 1200ml 水與所有食材，小火 45–60 分鐘至黏稠。",
			"以冰糖調甜度。"
		],
		tips: "想要“膠質感”可延長熬煮並補水。"
	},
	"mulledwine-herbal": {
		serving: "2–3 人份",
		time: "30–40 分鐘",
		ingredients: [
			"紅酒 750ml",
			"紅棗 6–8 顆（去核）",
			"桂圓 8–10 顆",
			"枸杞 15g",
			"肉桂棒 1–2 根",
			"丁香 3–4 粒",
			"陳皮 1小片",
			"柳橙片 3–4片",
			"冰糖或蜂蜜 適量"
		],
		steps: [
			"紅棗去核、桂圓與枸杞略沖洗；陳皮泡軟備用。",
			"將紅酒倒入鍋中，小火加熱（避免沸騰）。",
			"放入紅棗、桂圓、枸杞、肉桂、丁香與陳皮，持續小火加熱 20–30 分鐘。",
			"加入柳橙片提味，依個人口感調整甜度（冰糖或蜂蜜）。",
			"濾出藥材與香料後即可享用。"
		],
		tips: "全程保持小火避免酒精揮發；此為文化飲食示例，僅供日常養生參考，非醫療用途。"
	}
};

/* 食譜彈窗*/
function RecipeModal({ open, onClose, dish }) {
	const dialogRef = useRef(null);

	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape") onClose();
		}
		if (open) {
			document.addEventListener("keydown", onKey);
			// 開啟時將焦點移入
			setTimeout(() => dialogRef.current?.focus(), 0);
		}
		return () => document.removeEventListener("keydown", onKey);
	}, [open, onClose]);

	if (!open || !dish) return null;
	const recipe = RECIPES[dish.id];

	return (
		<div className="recipe" role="dialog" aria-modal="true" aria-labelledby="recipe-title">
			<div className="recipe__backdrop" onClick={onClose} />
			<div className="recipe__panel" tabIndex={-1} ref={dialogRef}>
				<header className="recipe__header">
					<h3 id="recipe-title">{dish.name}</h3>
					<button className="btn btn--ghost recipe__close" onClick={onClose} aria-label="關閉">
						×
					</button>
				</header>

				{recipe ? (
					<div className="recipe__body">
						<ul className="recipe__meta">
							<li>份量：{recipe.serving}</li>
							<li>時間：{recipe.time}</li>
						</ul>

						<section className="recipe__section">
							<h4>食材</h4>
							<ul className="recipe__list">
								{recipe.ingredients.map((it) => <li key={it}>{it}</li>)}
							</ul>
						</section>

						<section className="recipe__section">
							<h4>步驟</h4>
							<ol className="recipe__list">
								{recipe.steps.map((st, i) => <li key={i}>{st}</li>)}
							</ol>
						</section>

						{recipe.tips && (
							<section className="recipe__section">
								<h4>小提醒</h4>
								<p className="recipe__tips">{recipe.tips}</p>
							</section>
						)}
					</div>
				) : (
					<div className="recipe__body">
						<p>這道菜的詳情尚未補齊，先提供基本建議：食材充分清洗、比例依體質調整；若有特殊疾病或孕期，請先諮詢專業醫師。</p>
					</div>
				)}

				<footer className="recipe__footer">
					<button className="btn btn--primary" onClick={onClose}>知道了</button>
				</footer>
			</div>
		</div>
	);
}

export default function WellnessCuisine() {
	const [active, setActive] = useState("all");
	const [q, setQ] = useState("");
	const [onlyTag, setOnlyTag] = useState("");
	const [selected, setSelected] = useState(null);
	const [open, setOpen] = useState(false);

	const filtered = useMemo(() => {
		const kw = q.trim();
		return DISHES.filter(d => {
			const byCat = active === "all" ? true : d.category === active;
			const byKw = !kw
				? true
				: [d.name, ...(d.herbs || []), ...(d.tags || [])]
					.join(" ")
					.toLowerCase()
					.includes(kw.toLowerCase());
			const byTag = onlyTag ? d.tags?.includes(onlyTag) : true;
			return byCat && byKw && byTag;
		});
	}, [active, q, onlyTag]);

	const tagPool = useMemo(() => {
		const set = new Set();
		DISHES.forEach(d => (d.tags || []).forEach(t => set.add(t)));
		return Array.from(set);
	}, []);

	function openRecipe(dish) {
		setSelected(dish);
		setOpen(true);
	}
	function closeRecipe() {
		setOpen(false);
		setSelected(null);
	}

	return (
		<div className="wellness">
			<section className="wellness__hero">
				<div className="wellness__hero-inner">
					<h1 className="wellness__title">養生食光</h1>
					<p className="wellness__subtitle">以食為藥，順時調養｜從日常餐桌開始的中藥食補</p>
				</div>
			</section>

			<section className="wellness__toolbar">
				<div className="wellness__tabs">
					{CATEGORIES.map(c => (
						<button
							key={c.key}
							className={`tab ${active === c.key ? "is-active" : ""}`}
							onClick={() => setActive(prev => (prev === c.key && c.key !== "all" ? "all" : c.key))}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActive(prev => (prev === c.key && c.key !== "all" ? "all" : c.key));
								}
							}}
							type="button"
							aria-pressed={active === c.key}
							aria-label={active === c.key && c.key !== "all" ? `${c.label}（再次點擊可切回全部）` : c.label}
						>
							{c.label}
						</button>
					))}
				</div>

				<div className="wellness__search">
					<input
						type="text"
						placeholder="搜尋藥膳／藥材／功效…"
						value={q}
						onChange={e => setQ(e.target.value)}
						aria-label="搜尋"
					/>
				</div>

				<div className="wellness__tags">
					<button
						type="button"
						className={`chip ${onlyTag === "" ? "is-active" : ""}`}
						onClick={() => setOnlyTag("")}
					>
						全部標籤
					</button>
					{tagPool.map(t => (
						<button
							key={t}
							type="button"
							className={`chip ${onlyTag === t ? "is-active" : ""}`}
							onClick={() => setOnlyTag(onlyTag === t ? "" : t)}
						>
							{t}
						</button>
					))}
				</div>
			</section>

			<section className="wellness__grid" aria-live="polite">
				{filtered.map(d => (
					<article key={d.id} className="dish-card">
						<div
							className="dish-card__click"
							role="button"
							tabIndex={0}
							onClick={() => openRecipe(d)}
							onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openRecipe(d)}
							aria-label={`查看 ${d.name} 的食譜`}
						>
							<div className="dish-card__media">
								<img
									src={d.image}
									alt={d.name}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div className="dish-card__body">
								<h3 className="dish-card__title">{d.name}</h3>
								<ul className="dish-card__herbs">
									{d.herbs?.map(h => (
										<li key={h} className="pill">{h}</li>
									))}
								</ul>
								<div className="dish-card__tags">
									{d.tags?.map(t => (
										<span key={t} className="tag">{t}</span>
									))}
								</div>
							</div>
							<div className="dish-card__hover">
								<p>溫馨提醒：體質與季節不同，藥材比例需調整。</p>
								<button
									type="button"
									className="btn btn--ghost"
									onClick={(e) => { e.stopPropagation(); openRecipe(d); }}
								>
									查看做法
								</button>
							</div>
						</div>
					</article>
				))}
				{filtered.length === 0 && (
					<div className="wellness__empty">
						找不到符合「{q}」的結果，請試試其他關鍵字或取消標籤。
					</div>
				)}
			</section>

			<section className="wellness__season">
				<div className="season__card">
					<h2>本季主打：潤肺養陰</h2>
					<p>入秋易燥，推薦「川貝燉梨、銀耳蓮子羹、百合蓮子湯」。</p>
					<div className="season__cta">
						<button
							type="button"
							className="btn btn--primary"
							onClick={() => setOnlyTag("秋季")}
						>
							查看秋季推薦
						</button>
						<button type="button" className="btn btn--ghost">下載食譜（PDF 可攜式文件）</button>
					</div>
				</div>
			</section>

			<section className="wellness__faq">
				<h2>常見問題</h2>
				<div className="faq">
					<details>
						<summary>藥膳可以天天吃嗎？</summary>
						<p>建議依體質與季節適量食用，避免長期單一補法。</p>
					</details>
					<details>
						<summary>孕婦或慢性病患能吃嗎？</summary>
						<p>建議先諮詢中醫師，再依指示調整藥材與劑量。</p>
					</details>
					<details>
						<summary>藥材去哪裡買比較安心？</summary>
						<p>選擇信譽商家並注意來源、批號與保存期限。</p>
					</details>
				</div>
			</section>

			<RecipeModal open={open} onClose={closeRecipe} dish={selected} />
			<BackToTop />
		</div>
	);
}
