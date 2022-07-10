import {
	Divider,
	VStack,
	Text,
	GridItem,
	Box,
	useBreakpoint,
	useBreakpointValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { BiAward } from 'react-icons/bi';

export default function AchievementItem({ id, name, description, type, date }) {
	return (
		<>
			<GridItem
				colSpan={useBreakpointValue({ base: 12, md: 3, lg: 2 })}
				align={useBreakpointValue({ base: 'start', md: 'end' })}
				margin={'auto'}
				width={'100%'}>
				<Text variant='support' fontWeight={'bold'}>
					{moment(date).format('MMM Mo, YYYY')}
				</Text>
			</GridItem>
			<GridItem
				as={VStack}
				width={'100%'}
				colSpan={useBreakpointValue({ base: 2, lg: 1 })}>
				<Divider orientation='vertical'></Divider>
				<Box bgColor={'pink.400'} p={1} rounded={'md'} size={'25px'}>
					<BiAward color='white' size={18}></BiAward>
				</Box>
				<Divider orientation='vertical'></Divider>
			</GridItem>
			<GridItem
				mt={3}
				mb={3}
				colSpan={useBreakpointValue({ base: 10, md: 7, lg: 9 })}
				width={'100%'}
				borderWidth={'1px'}
				rounded={'md'}
				p={2}>
				<VStack spacing={2} align={'start'}>
					<Text variant='heading5' fontSize='sm'>
						{name}
					</Text>
					<Text variant='body' fontSize={'sm'}>
						{description}
					</Text>
				</VStack>
			</GridItem>
		</>
	);
}
