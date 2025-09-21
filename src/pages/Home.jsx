import React from 'react'
import '../styles/Home.scss'

const home = () => {
	return (
		<>
			<div className='hero'>
				<div className="hero-text">
					<h1>日日蔘藥</h1>
					<p className='slo'>穩定成藥，專業代煎</p>
					<p>源於傳統藥材，貼近日常生活</p>
				</div>
			</div>
			<section class="bridge">
				<div class="bridge_text">
					<h2>產品與服務</h2>
					<p>
						我們的服務涵蓋科學中藥、水藥代煎與藥材飲片，<br />
						提供穩定供貨與專業支持，方便您快速了解與諮詢。
					</p>
				</div>

				<div class="bridge_list">
					<div class="bridge_item">
						<img src="" alt="科學中藥" />
						<h3>科學中藥</h3>
					</div>
					<div class="bridge_item">
						<img src="" alt="水藥代煎" />
						<h3>水藥代煎</h3>
					</div>
					<div class="bridge_item">
						<img src="" alt="藥材飲片" />
						<h3>藥材飲片</h3>
					</div>
				</div>
			</section>

		</>
	)
}

export default home