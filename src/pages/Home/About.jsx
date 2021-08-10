import React from 'react';
import { useSelector } from 'react-redux';

import { getMembers } from '../../redux/selectors';

import Panel from './Panel';

const About = () => {
	const members = useSelector(getMembers);

	return (
		<div className='about w-100'>
			<Panel name='Current squad' close={false} members={members.currentMembers} />
			<Panel name='Former players' close={true} members={members.pastMembers} />
		</div>
	);
};

export default About;
