import React from 'react';
import { useSelector } from 'react-redux';

import Panel from './Panel';

const About = () => {
	const { members } = useSelector(({ teams }) => teams);

	return (
		<div className='about w-100'>
			<Panel
				name='Current squad'
				close={false}
				members={members.currentMembers}
			/>
			<Panel name='Former players' close={true} members={members.pastMembers} />
		</div>
	);
};

export default About;
