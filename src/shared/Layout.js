import React from 'react';
import { CssBaseline, } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { styled } from 'styled-components';
import { COLORS } from '../util/theme';


const Body = styled.div`
	background-color: ${COLORS.dark};
	min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;

	color: ${COLORS.light}
`;


export default function Layout(p) {


	//#region PROPS
	const {
		headerProps,
		footerProps,
		children
	} = p;
	//#endregion

	//#region RENDER
	return (
		<>
			<CssBaseline />
			<Body>
				<Header {...headerProps} />
				<main>
					{children}
				</main>
				<Footer {...footerProps} />
			</Body>
		</>
	)
	//#endregion

}