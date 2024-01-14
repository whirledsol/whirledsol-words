import React from 'react';
import { Container,Typography } from '@mui/material';
import Layout from '../shared/Layout';
import { BookPaper } from '../util/styles';

export default function Home() {

	//#region RENDER
	return (
		<Layout>
			<Container maxWidth="sm">
				<BookPaper>
					<Typography variant='h2'>Greetings multiverse.</Typography>
					<p>I've been wanting to showcase stories, lessons, and growth for a while now. Without all the noise of social media.</p>
					<p>So this corner of the internet has been craftily carved out. It contains reflections on a life of no @import.</p>
					<p>But it's a life that wishes for healing, for love, for change.</p>
				</BookPaper>
			</Container>
		</Layout>
	)
	//#endregion

}