import logo from './logo.svg';
import './App.css';
import { Year } from './components/Year';
import { createElement } from 'react';

export const App = () => {
	return createElement(
		'div',
		{
			className: 'App',
		},
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement('p', {}, `Edit src/App.js and save to reload.`),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', {}, Year()),
		),
	);
};

// <div className="App">
// 	<header className="App-header">
// 		<img src={logo} className="App-logo" alt="logo" />
// 		<p>
// 			Edit <code>src/App.js</code> and save to reload.
// 		</p>
// 		<a
// 			className="App-link"
// 			href="https://reactjs.org"
// 			target="_blank"
// 			rel="noopener noreferrer"
// 		>
// 			Learn React
// 		</a>
// 		<div>
// 			{/* декларативный подход, вывожу результат компонента Year */}
// 			<Year />
// 		</div>
// 	</header>
// </div>
// );
