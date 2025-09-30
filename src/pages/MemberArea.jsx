import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MemberArea.scss";

const Login = () => {
	// 狀態（state 狀態）— 預設帳號帶入，密碼留空
	const [account, setAccount] = useState("Admin123");
	const [password, setPassword] = useState("Admin123");
	const [error, setError] = useState("");
	const [showModal, setShowModal] = useState(false);

	const navigate = useNavigate();

	// 登入（Login 登入）
	const handleSubmit = (e) => {
		e.preventDefault();

		const validUser = "Admin123";
		const validPass = "Admin123";

		// 去除兩端空白（trim 修剪）
		const acc = account.trim();
		const pwd = password.trim();

		if (acc === validUser && pwd === validPass) {
			setError("");
			navigate("/Dashboard"); // 登入成功 → 後台（Dashboard 控制台）
		} else {
			setError("帳號或密碼錯誤，請再試一次。");
		}
	};

	// 忘記密碼（Forgot Password 忘記密碼）→ 打開自訂 Modal（模態框）
	const handleForgotPassword = () => {
		setShowModal(true);
	};

	const closeModal = () => setShowModal(false);

	const goToContact = () => {
		setShowModal(false);
		navigate("/#contact"); // 導向聯絡我們區塊
	};

	return (
		<div className="member">
			<div className="login">
				<div className="login__box">
					<h2>會員登入</h2>

					<form onSubmit={handleSubmit} noValidate>
						<div className="form__group">
							<label htmlFor="account">帳號</label>
							<input
								id="account"
								type="text"
								value={account}
								onChange={(e) => setAccount(e.target.value)}
								placeholder="請輸入帳號"
								autoComplete="username"
								inputMode="text"
								required
							/>
						</div>

						<div className="form__group">
							<label htmlFor="password">密碼</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="請輸入密碼"
								autoComplete="current-password"
								required
								minLength={6}
							/>
						</div>

						{error && <p className="error" role="alert">{error}</p>}

						<button type="submit" className="btn">登入</button>
					</form>

					<div className="login__footer">
						<button
							type="button"
							className="link"
							onClick={handleForgotPassword}
							aria-haspopup="dialog"
							aria-controls="forgot-modal"
						>
							忘記密碼？
						</button>
					</div>
				</div>
			</div>

			{/* 忘記密碼 Modal（模態框） */}
			{showModal && (
				<div className="modal" role="dialog" aria-modal="true" id="forgot-modal">
					<div className="modal__content">
						<h3>忘記密碼</h3>
						<p>請聯絡客服，協助重置密碼。</p>
						<div className="modal__actions">
							<button type="button" onClick={goToContact}>前往聯絡我們</button>
							<button type="button" onClick={closeModal}>取消</button>
						</div>
					</div>
					<div className="modal__overlay" onClick={closeModal}></div>
				</div>
			)}
		</div>
	);
};

export default Login;
