import React from 'react'
import '../styles/DecoctionTool.scss'
import Null from '../images/null.avif'

const DecoctionTool = () => {
	return (
		<div className='decoctionToolbg'>
			<div className='decoctionTool'>
				<h1 className='de_title'>水藥計算</h1>
				<div className='ii'>
					<img src={Null} alt="" />
				</div>
			</div>
		</div>
	)
}

export default DecoctionTool