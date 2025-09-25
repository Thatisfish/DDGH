import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/components/Navbar.scss'
import Logo from '../images/logo.png'

const Navbar = () => {
	// 下拉開合（產品 / 文化）
	const [openProduct, setOpenProduct] = useState(false)
	const [openCulture, setOpenCulture] = useState(false)

	const location = useLocation()
	const path = location.pathname

	// 子頁 -> 父層長亮（active）
	const isProduct = ['/TCM', '/Decoction', '/HerbalSlices'].includes(path)
	const isCulture = ['/HerbalGallery', '/WellnessFood'].includes(path)

	// 路由/錨點一變就關（避免殘留）
	useEffect(() => {
		setOpenProduct(false)
		setOpenCulture(false)
	}, [location])

	// 點子連結時先關（mousedown 在導航前就觸發，更穩）
	const closeAll = () => {
		setOpenProduct(false)
		setOpenCulture(false)
		// 移除焦點，避免 :focus 造成殘留
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur()
		}
	}

	return (
		<header className="topbar">
			<nav className="navbar">
				<div className="Logo">
					<img src={Logo} alt="LOGO" />
				</div>

				<ul className="menu">
					<li>
						<NavLink to="/" end>首頁</NavLink>
					</li>

					<li>
						{/* 錨點也用 Link，不用 a href */}
						<Link to="/#aboutDD">關於日日</Link>
					</li>

					{/* 產品與服務 */}
					<li
						className={`${isProduct ? 'is-active' : ''} ${openProduct ? 'open' : ''}`}
						onMouseEnter={() => setOpenProduct(true)}
						onMouseLeave={() => setOpenProduct(false)}
					>
						<p
							role="button"
							tabIndex={0}
							onClick={() => setOpenProduct(v => !v)}
							onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenProduct(v => !v) }}
						>
							產品與服務
						</p>

						<ul
							className="submenu"
							onClickCapture={closeAll}
							onMouseDownCapture={closeAll}
							onTouchStartCapture={closeAll}
						>
							<li>
								<NavLink to="/TCM" onMouseDownCapture={closeAll}>科學中藥</NavLink>
							</li>
							<li>
								<NavLink to="/Decoction" onMouseDownCapture={closeAll}>水藥代煎</NavLink>
							</li>
							<li>
								<NavLink to="/HerbalSlices" onMouseDownCapture={closeAll}>藥材飲片</NavLink>
							</li>
						</ul>
					</li>

					{/* 中藥文化館 */}
					<li
						className={`${isCulture ? 'is-active' : ''} ${openCulture ? 'open' : ''}`}
						onMouseEnter={() => setOpenCulture(true)}
						onMouseLeave={() => setOpenCulture(false)}
					>
						<p
							role="button"
							tabIndex={0}
							onClick={() => setOpenCulture(v => !v)}
							onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenCulture(v => !v) }}
						>
							中藥文化館
						</p>

						<ul
							className="submenu"
							onClickCapture={closeAll}
							onMouseDownCapture={closeAll}
							onTouchStartCapture={closeAll}
						>
							<li>
								<NavLink to="/HerbalGallery" onMouseDownCapture={closeAll}>
									本草藥閣
									<span className="subnote">探索常見的中藥材</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/WellnessFood" onMouseDownCapture={closeAll}>
									養生食光
									<span className="subnote">藥材融入日常飲食</span>
								</NavLink>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#contact">聯絡我們</Link>
					</li>

					<li>
						<NavLink to="/MemberArea">會員專區</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
