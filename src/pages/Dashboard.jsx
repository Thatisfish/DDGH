import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Dashboard.scss'

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Link to="/DecoctionTool" className="dashboard__block">
				<img
					src="https://via.placeholder.com/60"
					alt="水藥試算"
					className="dashboard__icon"
				/>
				<span className="dashboard__label">水藥試算</span>
			</Link>
		</div>
	)
}

export default Dashboard
