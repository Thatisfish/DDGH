import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Dashboard.scss'
import { GrNotes } from "react-icons/gr";

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Link to="/DecoctionTool" className="dashboard__block">
				<GrNotes size={50} />
				<span className="dashboard__label">水藥試算</span>
			</Link>
		</div>
	)
}

export default Dashboard
