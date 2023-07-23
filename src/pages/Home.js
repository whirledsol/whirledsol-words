import React from 'react';
import { Container,Typography } from '@mui/material';
import Layout from '../shared/Layout';
import { BookPaper } from '../system/styles';

export default function Home() {

	//#region RENDER
	return (
		<Layout>
			<Container>
				<BookPaper elevation={18}>
					<Typography variant='h4'>Greetings multiverse.</Typography>
				</BookPaper>
			</Container>
		</Layout>
	)
	//#endregion

}