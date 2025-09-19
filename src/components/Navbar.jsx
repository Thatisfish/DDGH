import React from 'react'
import '../styles/components/Navbar.scss'
import { Link } from 'react-router-dom'

const navbar = () => {
	return (
		<header className='topbar'>
			<nav className='navbar'>
				<div className='Logo'>
					<img src="" alt="LOGO" />
				</div>
				<ul className='menu'>
					<li><Link to="/#">首頁</Link></li>
					<li><Link to="/#">關於日日</Link></li>
					<li><Link to="/#">產品與服務</Link></li>
					<li><Link to="/#">中藥文化館</Link></li>
					<li><Link to="/#">聯絡我們</Link></li>
					<li><Link to="/#">會員專區</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default navbar