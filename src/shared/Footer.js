import React from 'react';
import { styled } from 'styled-components';
import {Container} from '@mui/material';

export default function Footer() {

	const currentYear = new Date().getFullYear();

	//#region RENDER
	return (
		<footer>
			<Container>
				&copy; {currentYear} whirledsol
			</Container>
		</footer>
	)
	//#endregion

}