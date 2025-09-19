import React from 'react'
import '../styles/components/Footer.scss'
import { Link } from 'react-router-dom'

const footer = () => {
	return (
		<footer>
			<nav>
				<div className='at'>
					<div className='About'>
						<Link to="/#" className='title'>關於日日</Link>
						<Link to="/#" className='title'>聯絡我們</Link>
						<Link to="/#" className='title'>會員專區</Link>
					</div>

					<ul className='service'>
						<h3 className="title">產品與服務</h3>
						<ul className='service-list'>
							<li><Link to="/#">科學中藥</Link></li>
							<li><Link to="/#">水藥代煎</Link></li>
							<li><Link to="/#">藥材飲片</Link></li>
						</ul>
					</ul>

					<ul>
						<h3 className="title">中藥文化館</h3>
						<ul className='TC'>
							<li>
								<Link to="/#">本草藥閣</Link>
								<span>探索常見的中藥材</span>
							</li>
							<li>
								<Link to="/#">養生食光</Link>
								<span>藥材融入日常飲食</span>
							</li>
						</ul>
					</ul>
				</div>
			</nav>
			<small className="Copyright">
				<p>Copyright © 2025 日日蔘藥 All Rights Reserved.</p>
				<p>本網站僅供資訊參考，不提供網路銷售。</p>
			</small>
		</footer>
	)
}

export default footer