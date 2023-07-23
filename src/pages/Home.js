import React from 'react';
import { Container,Typography } from '@mui/material';
import Layout from '../shared/Layout';
import { BookPaper } from '../util/styles';

export default function Home() {

	//#region RENDER
	return (
		<Layout>
			<Container>
				<BookPaper>
					<Typography variant='h4'>Greetings multiverse.</Typography>
				</BookPaper>
			</Container>
		</Layout>
	)
	//#endregion

}