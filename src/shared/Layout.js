import React from 'react';
import {CssBaseline,Paper,Container} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { styled } from 'styled-components';
import { COLORS } from '../system/theme';

export default function Layout(p){

	const Body = styled.body`
		background-color: ${COLORS.dark};
		height: 100vh;
		padding:1rem;
		color: ${COLORS.light}
	`;

	//#region PROPS
	const {
		headerProps,
		footerProps,
		children
	} = p;
	//#endregion

	//#region RENDER
	return (
		<Body>
		<CssBaseline />
		<main>
		<Header {...headerProps}/>
		<Container>
		{children}
		</Container>
		<Footer {...footerProps}/>
		</main>
		</Body>
	)
	//#endregion

}