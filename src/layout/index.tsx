import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';
// import Footer from './Footer';

export default ({ children }: any) => (
	<Fragment>
		<Header />
		<Content>{children}</Content>
	</Fragment>
);