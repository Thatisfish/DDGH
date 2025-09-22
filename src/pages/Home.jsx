import '../styles/Home.scss'
import Decoction from '../images/Home/Decoction.svg'
import Herb from '../images/Home/Herb.svg'
import TCM from '../images/Home/TCM.svg'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const home = () => {
	const handleSubmit = (e) => {
		e.preventDefault(); // 先攔住送出
		const formEl = e.currentTarget;

		// 1) 使用原生驗證規則：required / type="email" / pattern 都會一起檢查
		if (!formEl.checkValidity()) {
			formEl.reportValidity(); // 讓瀏覽器顯示內建提示
			return;                  // ★ 一定要提早結束，別往下跑
		}

		// 2) 你也可以加上自訂的「空白字元」檢查（保險）
		const data = new FormData(formEl);
		for (const [k, v] of data.entries()) {
			if (typeof v === 'string' && v.trim() === '') {
				// 找到欄位並加上紅框 class（可選）
				const input = formEl.querySelector(`[name="${k}"]`);
				if (input) input.classList.add('is-invalid');
				alert('請完整填寫所有欄位');
				return; // ★ 一樣要中止
			}
		}

		// 3) 全部通過才會到這裡
		console.log(Object.fromEntries(data.entries()));
		alert('已收到您的留言，謝謝！');
		formEl.reset();
	};
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const ctx = gsap.context(() => {
			const imgs = gsap.utils.toArray('.about .ab .about_img')

			imgs.forEach((img) => {
				const isRight = img.classList.contains('img_mid')
				const fromX = isRight ? 80 : -80
				const parent = img.closest('.ab') // 用父層當 trigger，區間更長

				gsap.fromTo(
					img,
					{ x: fromX, opacity: 0, filter: 'blur(4px)' },
					{
						x: 0,
						opacity: 1,
						filter: 'blur(0px)',
						ease: 'power3.out',
						scrollTrigger: {
							trigger: parent,          // 不是 img 自己
							start: 'top 90%',         // 更早開始
							end: '+=80%',             // 或改成 '+=600'（px）
							scrub: 1,                 // 平滑一點
							// markers: true,
						},
					}
				)
			})

			// 內文文字也給一點淡入
			const texts = gsap.utils.toArray('.about .ab .about_text')
			texts.forEach((p) => {
				gsap.fromTo(
					p,
					{ y: 24, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: p,
							start: 'top 90%',
							end: 'top 70%',
							scrub: 0.5,
							once: false,
						},
						duration: 20,
					}
				)
			})
		})

		return () => ctx.revert() // 清理（cleanup（清理））
	}, [])
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

			<div className="aboutDD">
				<div className='about'>
					<h2 className="about_title">關於日日</h2>
					<div className="about_content">
						<div className="about_top ab">
							<div className="about_img img_top"></div>
							<div className='at'>
								<p className="about_text">
									日日蔘藥源自對傳統醫藥文化的堅持與尊重。<br />
									我們相信，中藥不僅是一味藥材，更承載著世代傳承的智慧與對健康的守護。
								</p>
							</div>
						</div>
						<div className="about_mid ab">
							<div className='at'>
								<p className="about_text">
									從藥材嚴格挑選、妥善保存，到水藥代煎與飲片供應，<br />
									日日蔘藥始終秉持專業與誠信，確保品質穩定、安全可靠。
								</p>
							</div>
							<div className="about_img img_mid"></div>
						</div>
						<div className="about_bot ab">
							<div className="about_img img_bot"></div>
							<div className='at'>
								<p className="about_text">
									同時，我們也希望透過現代化的服務與管理，<br />
									讓中藥能更貼近日常生活，成為人們養生調理的自然選擇。
								</p>
							</div>
						</div>
					</div>
					<div className='slo'>
						<h1>日日用心，日日守護</h1>
					</div>
				</div>
			</div>

			<div className='culture'>
				<div className="split-banner">
					<a className="panel left" href="#">
						<span className="label">本草藥閣</span>
					</a>
					<a className="panel right" href="#">
						<span className="label">養生食光</span>
					</a>
				</div>
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

					<form className='contact-form' onSubmit={handleSubmit}>
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
