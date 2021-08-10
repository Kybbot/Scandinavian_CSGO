import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setPlayer } from '../../redux/reducers/teamsSlice';
import { convertDate } from '../../util/converDate';

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

	return (
		<div className='panel'>
			<div className='panel__name'>
				{name}
				<button onClick={panelBtnHandler} className={'panel__btn ' + (isclose ? '' : 'panel__btn--rotate')}>
					^
				</button>
			</div>
			<div ref={content} style={{ maxHeight: `${height}` }} className={'panel__content'}>
				{members.length ? (
					members.map((member) => (
						<div key={member.nickname} className='member'>
							<Link to={`/player/${member.nickname}`}>
								<img
									src={img + (member.photo ? member.photo : 'blankplayer.svg')}
									alt={member.nickname}
									onClick={() => dispatch(setPlayer(member.nickname))}
								/>
							</Link>
							<div className='member__nickname' title={member.nickname}>
								{member.nickname}
							</div>
							<div className='member__fullName' title={member.fullName}>
								{member.fullName}
							</div>
							<div className='member__age'>{convertDate(member.age)}</div>
						</div>
					))
				) : (
					<div>Empty</div>
				)}
			</div>
		</div>
	);
};

Panel.propTypes = {
	name: PropTypes.string,
	close: PropTypes.bool,
	members: PropTypes.arrayOf(PropTypes.object),
};

export default Panel;
