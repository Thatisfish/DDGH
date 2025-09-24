import '../styles/HerbalGallery.scss'
import { React, useState } from 'react';
import { X } from 'lucide-react';
import '../styles/HerbalGallery.scss';

const HerbalGallery = () => {
	const [selectedHerb, setSelectedHerb] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// 常見中藥資料
	const herbsData = [
		{
			id: 1,
			name: '人參',
			englishName: 'Ginseng',
			properties: '性溫，味甘微苦',
			effects: '大補元氣，復脈固脫，補脾益肺，生津安神',
			usage: '用於體虛欲脫、肢冷脈微、脾虛食少、肺虛喘咳',
			image: '🌿'
		},
		{
			id: 2,
			name: '當歸',
			englishName: 'Angelica',
			properties: '性溫，味甘辛',
			effects: '補血活血，調經止痛，潤腸通便',
			usage: '用於血虛萎黃、眩暈心悸、月經不調、經閉痛經',
			image: '🌱'
		},
		{
			id: 3,
			name: '枸杞',
			englishName: 'Goji Berry',
			properties: '性平，味甘',
			effects: '滋補肝腎，益精明目',
			usage: '用於肝腎陰虛、腰膝酸軟、頭暈目眩、目昏多淚',
			image: '🔴'
		},
		{
			id: 4,
			name: '黃耆',
			englishName: 'Astragalus',
			properties: '性微溫，味甘',
			effects: '補氣升陽，固表止汗，利水消腫',
			usage: '用於氣虛乏力、食少便溏、中氣下陷、久瀉脫肛',
			image: '🌾'
		},
		{
			id: 5,
			name: '甘草',
			englishName: 'Licorice',
			properties: '性平，味甘',
			effects: '補脾益氣，清熱解毒，祛痰止咳，緩急止痛',
			usage: '用於脾胃虛弱、倦怠乏力、心悸氣短、咳嗽痰多',
			image: '🌿'
		},
		{
			id: 6,
			name: '何首烏',
			englishName: 'He Shou Wu',
			properties: '性微溫，味甘苦澀',
			effects: '補肝腎，益精血，烏鬚髮，強筋骨',
			usage: '用於血虛萎黃、眩暈耳鳴、鬚髮早白、腰膝酸軟',
			image: '🍠'
		},
		{
			id: 7,
			name: '川芎',
			englishName: 'Chuanxiong',
			properties: '性溫，味辛',
			effects: '活血行氣，祛風止痛',
			usage: '用於血瘀氣滯、月經不調、經閉痛經、胸脅刺痛',
			image: '🌿'
		},
		{
			id: 8,
			name: '白朮',
			englishName: 'White Atractylodes',
			properties: '性溫，味甘苦',
			effects: '健脾益氣，燥濕利水，止汗安胎',
			usage: '用於脾虛食少、腹脹泄瀉、痰飲眩暈、水腫',
			image: '🌱'
		},
		{
			id: 9,
			name: '茯苓',
			englishName: 'Poria',
			properties: '性平，味甘淡',
			effects: '利水滲濕，健脾安神',
			usage: '用於水腫尿少、痰飲眩暈、脾虛食少、便溏泄瀉',
			image: '⚪'
		},
		{
			id: 10,
			name: '陳皮',
			englishName: 'Tangerine Peel',
			properties: '性溫，味辛苦',
			effects: '理氣健脾，燥濕化痰',
			usage: '用於胸脘脹滿、食少吐瀉、咳嗽痰多',
			image: '🍊'
		},
		{
			id: 11,
			name: '丹參',
			englishName: 'Salvia',
			properties: '性微寒，味苦',
			effects: '活血祛瘀，通經止痛，清心除煩，涼血消癰',
			usage: '用於胸痹心痛、脘腹脅痛、癥瘕積聚、熱痹疼痛',
			image: '🔴'
		},
		{
			id: 12,
			name: '桂圓',
			englishName: 'Longan',
			properties: '性溫，味甘',
			effects: '補心脾，益氣血，安神',
			usage: '用於氣血不足、心悸怔忡、健忘失眠、血虛萎黃',
			image: '🍇'
		}
	];

	const handleCardClick = (herb) => {
		setSelectedHerb(herb);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedHerb(null);
	};

	return (
		<div className="herbal-cabinet-container">
			<div className="cabinet-header">
				<h1 className="cabinet-title">傳統中藥櫃</h1>
				<p className="cabinet-subtitle">滑鼠懸停以探索珍貴中藥材</p>
			</div>

			<div className="cabinet-grid">
				{herbsData.map((herb) => (
					<div key={herb.id} className="cabinet-drawer">
						<div className="drawer-front">
							<div className="drawer-handle"></div>
							<div className="drawer-number">{herb.id.toString().padStart(2, '0')}</div>
						</div>
						<div className="drawer-content">
							<div className="herb-card" onClick={() => handleCardClick(herb)}>
								<div className="herb-icon">{herb.image}</div>
								<div className="herb-name-zh">{herb.name}</div>
								<div className="herb-name-en">{herb.englishName}</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modal */}
			{isModalOpen && selectedHerb && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close" onClick={closeModal}>
							<X size={24} />
						</button>
						<div className="modal-header">
							<div className="modal-icon">{selectedHerb.image}</div>
							<div className="modal-titles">
								<h2 className="modal-name-zh">{selectedHerb.name}</h2>
								<h3 className="modal-name-en">{selectedHerb.englishName}</h3>
							</div>
						</div>
						<div className="modal-body">
							<div className="herb-detail">
								<h4>性味</h4>
								<p>{selectedHerb.properties}</p>
							</div>
							<div className="herb-detail">
								<h4>功效</h4>
								<p>{selectedHerb.effects}</p>
							</div>
							<div className="herb-detail">
								<h4>主治</h4>
								<p>{selectedHerb.usage}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HerbalGallery