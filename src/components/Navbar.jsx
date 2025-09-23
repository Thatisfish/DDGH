import React from 'react'
import '../styles/components/Navbar.scss'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

const navbar = () => {
	return (
		<header className='topbar'>
			<nav className='navbar'>
				<div className='Logo'>
					<img src={Logo} alt="LOGO" />
				</div>
				<ul className='menu'>
					<li><Link to="/#">首頁</Link></li>
					<li><Link to="/#">關於日日</Link></li>
					<li>
						<Link to="/#">產品與服務</Link>
						<ul className="submenu">
							<li><Link to="/services/science">科學中藥</Link></li>
							<li><Link to="/services/decoction">水藥代煎</Link></li>
							<li><Link to="/services/herbs">藥材飲片</Link></li>
						</ul>
					</li>
					<li>
						<Link to="/#">中藥文化館</Link>
						<ul className="submenu">
							<li>
								<Link to="/museum/herb">
									本草藥閣
									<span className="subnote">探索常見的中藥材</span>
								</Link>
							</li>
							<li>
								<Link to="/museum/food">
									養生食光
									<span className="subnote">藥材融入日常飲食</span>
								</Link>

							</li>
						</ul>
					</li>
					<li><Link to="/#">聯絡我們</Link></li>
					<li><Link to="/MemberArea">會員專區</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default navbar