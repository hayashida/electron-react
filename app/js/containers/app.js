import React, { Component } from 'react';

import Header from '../components/header';

export default ({ children }) => (
	<div className="wrapper">
		<Header />
		{ children }
	</div>
);