import {styled} from 'styled-components'
import {Paper} from '@mui/material';
import { COLORS } from './theme';

export const BookPaper = styled(Paper)`
	padding:1rem;
	margin:1rem;
	background-color:${COLORS.light};
	color:${COLORS.dark}
`;