import React from 'react';
import { styled } from 'styled-components';
import { Container} from '@mui/material';

const FooterContainer = styled.div`
	margin:1rem 0 0.25rem;
	font-size:0.75rem;
`;

export default function Footer() {

	const currentYear = new Date().getFullYear();

	//#region RENDER
	return (
		<footer>
			<Container maxWidth="sm">
				<FooterContainer>&copy; {currentYear} whirledsol</FooterContainer>
			</Container>
		</footer>
	)
	//#endregion

}