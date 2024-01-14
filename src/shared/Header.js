import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
	margin:1rem 0;
`;
export default function Header() {

	//#region RENDER
	return (
		<header>
			<Container maxWidth="sm">
				<HeaderContainer>
					<Typography variant='h1'>WhirledSol Words</Typography>
				</HeaderContainer>
			</Container>
		</header>
	)
	//#endregion

}