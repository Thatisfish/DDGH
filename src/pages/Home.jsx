import React from 'react'
import '../styles/Home.scss'
import Decoction from '../images/Home/Decoction.svg'
import Herb from '../images/Home/Herb.svg'
import TCM from '../images/Home/TCM.svg'

const home = () => {
	const handleSubmit = (e) => {
		e.preventDefault() // 阻止預設送出（prevent default 防止預設行為）
		const form = new FormData(e.currentTarget) // 取值（FormData 表單資料）
		// TODO: 在這裡串接後端或寄信服務
		console.log(Object.fromEntries(form.entries()))
		alert('已收到您的留言，謝謝！')
		e.currentTarget.reset()
	}
	return (
		<>
			<div className='hero'>
				<div className="hero-text">
					<h1>日日蔘藥</h1>
					<p className='slo'>穩定成藥，專業代煎</p>
					<p>源於傳統藥材，貼近日常生活</p>
				</div>
			</div>
			<section className="bridge">
				<div className="bridge_text">
					<h2>產品與服務</h2>
					<p>
						我們的服務涵蓋<br />科學中藥、水藥代煎與藥材飲片<br />
						提供穩定供貨與專業支持<br />方便您快速了解與諮詢。
					</p>
				</div>

				<div className="bridge_list">
					<div className="bridge_item i1">
						<img src={TCM} alt="科學中藥" />
						<h3>科學中藥</h3>
					</div>
					<div className="bridge_item i2">
						<img src={Decoction} alt="水藥代煎" />
						<h3>水藥代煎</h3>
					</div>
					<div className="bridge_item i3">
						<img src={Herb} alt="藥材飲片" />
						<h3>藥材飲片</h3>
					</div>
				</div>
			</section>
			<div className="about">
				1
			</div>
			<div className='culture'>
				2
			</div>
			<div className='contact'>
				<div className='info'>
					<div className='tit'>
						<p>日日蔘藥<span>- 科學中藥 - 水藥代煎 - 藥材飲片 - </span></p>
					</div>
					<div className='if'>
						<div className='tefe'>
							<div className='tel'>Tel. 02-8699-9999</div>
							<div className='fex'>Fex. 02-9999-9999</div>
						</div>
						<p>Email：contact@daydaygh.com</p>
						<p>營業時間：週一至週五 09:00 - 17:00</p>
						<p>新北市汐止區南陽街111巷1號一樓</p>
					</div>
					<div className='map'>
						<iframe
							title="google-map"
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1807.0781919124752!2d121.62433666448486!3d25.06268819942247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1758480812724!5m2!1szh-TW!2stw"
							style={{ border: '2px solid #CAAE81', width: '100%', height: 450 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
				<div className='qa'>
					<p className='tit'>有問題想諮詢嗎？留言給日日吧</p>

					<form className='contact-form' onSubmit={handleSubmit} noValidate>
						<label className='field'>
							<span className='label'>怎麼稱呼您</span>
							<input
								type='text'
								name='name'
								placeholder='請輸入您的姓名'
								required
								autoComplete='name'
							/>
						</label>

						<label className='field'>
							<span className='label'>您的信箱</span>
							<input
								type='email' /* email（電子郵件） */
								name='email'
								placeholder='name@example.com'
								required
								autoComplete='email'
								inputMode='email'
							/>
						</label>

						<label className='field'>
							<span className='label'>聯絡電話</span>
							<input
								type='tel' /* tel（電話） */
								name='phone'
								placeholder='09xx-xxx-xxx'
								pattern='[0-9\- ]{8,20}'
								inputMode='tel'
								autoComplete='tel'
								required
							/>
						</label>

						<label className='field'>
							<span className='label'>想諮詢的主題</span>
							<input
								type='text'
								name='subject'
								placeholder='例如：水藥代煎流程、供貨詢問…'
								required
							/>
						</label>

						<label className='field'>
							<span className='label'>想諮詢的內容</span>
							<textarea
								name='message'
								placeholder='請描述您的需求或問題…'
								rows={6}
								required
							/>
						</label>

						<button type='submit' className='btn-primary'>
							留言給日日蔘藥
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default home
