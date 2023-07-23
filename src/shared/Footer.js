import React from 'react';
import { styled } from 'styled-components';
import {Container} from '@mui/material';

const FooterStyle = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  borderTop: 1px solid #ddd;
`;

export default function Footer() {

	const currentYear = new Date().getFullYear();

	//#region RENDER
	return (
		<FooterStyle>
			<Container>
				&copy; {currentYear} whirledsol
			</Container>
		</FooterStyle>
	)
	//#endregion

}