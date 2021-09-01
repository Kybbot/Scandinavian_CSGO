import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { RotateButton } from '../../components';
import { setPlayer } from '../../redux/reducers/teamsSlice';
import convertDate from '../../util/converDate';

const Panel = ({ name, close, members }) => {
	const img = 'data/players-img/';

	const dispatch = useDispatch();

	const [isclose, setIsClose] = React.useState(close);
	const [height, setHeight] = React.useState('0px');

	const content = React.useRef(null);

	React.useEffect(() => {
		if (!close) {
			setHeight(`${content.current.scrollHeight + 20}px`);
		}
	}, [close]);

	const panelBtnHandler = () => {
		setIsClose(!isclose);
		setHeight(isclose ? `${content.current.scrollHeight}px` : '0px');
	};

	const imgClickHandler = (member) => {
		dispatch(setPlayer(member.nickname));
	};

	return (
		<div className='panel'>
			<div className='panel__name'>
				{name}
				<RotateButton
					additionalClass={`${isclose ? '' : 'rotate-btn--rotate'}`}
					type='button'
					onClick={panelBtnHandler}
				/>
			</div>
			<div ref={content} style={{ maxHeight: `${height}` }} className='panel__content'>
				{members.length ? (
					members.map((member) => (
						<div key={member.nickname} className='member'>
							<Link to={`/player/${member.nickname}`} onClick={() => imgClickHandler(member)}>
								<img
									className='member__img'
									src={img + (member.photo ? member.photo : 'blankplayer.svg')}
									alt={member.nickname}
								/>
							</Link>
							<p className='member__nickname' title={member.nickname}>
								{member.nickname}
							</p>
							<p className='member__fullName' title={member.fullName}>
								{member.fullName}
							</p>
							<time dateTime={member.age} className='member__age'>
								{convertDate(member.age)}
							</time>
						</div>
					))
				) : (
					<p>Empty</p>
				)}
			</div>
		</div>
	);
};

Panel.propTypes = {
	name: PropTypes.string.isRequired,
	close: PropTypes.bool.isRequired,
	members: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Panel;
