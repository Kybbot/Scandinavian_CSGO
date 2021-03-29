import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Admin, Home, Player, AllPlayers } from './pages';
import { Header } from './components';

const App = () => {
	console.log('App Rendered');
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/admin' component={Admin} />
				<Route path='/allPlayers' component={AllPlayers} />
				<Route path='/:name' component={Player} />
			</Switch>
		</div>
	);
};

export default App;
