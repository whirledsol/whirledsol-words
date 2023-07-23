import {styled} from 'styled-components'
import {Paper} from '@mui/material';
import { COLORS } from './theme';

export const BookPaper = styled.div`
	border-radius:1px;
	padding:1rem;
	margin:1rem 0;
	background:${COLORS.light};
	background: radial-gradient(circle, ${COLORS.light} 80%, ${COLORS.offlight} 100%);
	color:${COLORS.dark};
	position: relative;
	transition: box-shadow 300ms;
	box-shadow: 5px 5px 10px rgba(0,0,0,0.9);
	&:hover{
		box-shadow: 2px 2px 8px rgba(0,0,0,0.6);
	}
`;