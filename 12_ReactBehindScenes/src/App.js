import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	const togglePragraphHandler = () => {
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	};

	console.log('App works');

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={togglePragraphHandler}>This is the button</Button>
		</div>
	);
}

export default App;
