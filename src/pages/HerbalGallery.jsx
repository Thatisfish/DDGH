// src/components/HerbGallery.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { HERBS, HERB_FOOTNOTE } from '../data/herb' // ← 若檔名是 herb.js 就改成 '../data/herb'
import gsap from 'gsap'
import '../styles/HerbalGallery.scss'

function HerbModal({ open, onClose, herb, footnote }) {
	if (!open || !herb) return null

	const { name, latin, image, taste, meridian, seen, form, notes } = herb

	return createPortal(
		<div className="herb-modal" role="dialog" aria-modal="true" aria-label={`${name} 詳細資訊 (Details)`}>
			<div className="herb-modal__backdrop" onClick={onClose} />
			<div className="herb-modal__panel" role="document">
				<button className="herb-modal__close" onClick={onClose} aria-label="關閉 (Close)">×</button>

				{image && <img className="herb-modal__cover" src={image} alt={`${name} 圖片`} />}

				<div className="herb-modal__body">
					<h3 className="herb-modal__title">{name}</h3>
					{latin && <p className="herb-modal__latin">{latin}</p>}

					<ul className="herb-modal__meta">
						{taste && (
							<li>
								<strong>性味：</strong> {taste}
							</li>
						)}
						{meridian && (
							<li>
								<strong>歸經：</strong> {meridian}
							</li>
						)}
						{seen && (
							<li>
								<strong>在哪裡看過：</strong> {seen}
							</li>
						)}
						{form && (
							<li>
								<strong>形態：</strong> {form}
							</li>
						)}
					</ul>

					{notes && <p className="herb-modal__notes">{notes}</p>}

					{footnote && <p className="herb-modal__footnote">{footnote}</p>}
				</div>
			</div>
		</div>,
		document.body
	)
}

function HerbCabinet({ herb, onClick }) {
	return (

		<div
			className="cabinet"
			onClick={() => onClick(herb)}
			role="button"
			tabIndex={0}
			aria-label={`查看 ${herb.name} 詳細 (Open details)`}
			onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(herb)}
		>
			<div className="drawer">
				<div className="drawer__front">
					<div className="drawer__label">
						<span className="drawer__label-text">{herb.name}</span>
					</div>
					<div className="drawer__handle" />
				</div>
				<div className="drawer__files" aria-hidden="true">
					<img className="drawer__files-image" src={herb.image} alt="" />
				</div>
			</div>
		</div>
	)
}

/* 缺槽（被抽走的抽屜） */
function MissingSlot() {
	return (
		<div className="cabinet cabinet--missing" aria-hidden="true" role="presentation" tabIndex={-1}>
			<div className="drawer">
				<div className="drawer__front">
					<div className="drawer__label" />
					<div className="drawer__handle" />
				</div>
			</div>
		</div>
	)
}

export default function HerbGallery() {
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState(null)
	const wrapRef = useRef(null)
	const data = useMemo(() => HERBS, [])

	useEffect(() => {
		// 只動畫真正的抽屜，排除缺槽
		const boxes = wrapRef.current?.querySelectorAll('.cabinet:not(.cabinet--missing)')
		if (!boxes?.length) return
		gsap.fromTo(boxes, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' })
	}, [])

	const handleOpen = (herb) => {
		setActive(herb)
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		setActive(null)
	}

	// 每 6 個藥材插入一個缺槽（想改頻率就改 6）
	const items = []
	data.forEach((h, i) => {
		items.push(<HerbCabinet key={h.id} herb={h} onClick={handleOpen} />)
		if ((i + 1) % 6 === 0) items.push(<MissingSlot key={`missing-${i}`} />)
	})

	return (
		<>
			<section className="herb">
				<div className="herb__hero">
					<div className="herb__hero-inner">
						<h1 className="herb__title">本草藥閣</h1>
						<p className="herb__subtitle">生活裡的另一種視角｜探索身邊熟悉卻陌生的中藥材</p>
					</div>
				</div>
			</section>
			<section className="herb-gallery">
				<p className="herb-gallery__hint">輕輕移動滑鼠，可以發現藥材的小秘密喔！</p>

				<div className="herb-gallery__grid" ref={wrapRef}>
					{items}
				</div>

				<HerbModal open={open} herb={active} onClose={handleClose} footnote={HERB_FOOTNOTE} />
			</section>
		</>
	)
}
