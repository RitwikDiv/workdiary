import { Text, HStack, Box, Divider } from '@chakra-ui/react';
import { HiOutlineBriefcase as Work } from 'react-icons/hi';

export default function ProjectTracker() {
	return (
		<>
			<HStack
				justifyContent={'start'}
				align={'start'}
				width={'100%'}
				spacing={2}>
				<Box backgroundColor='blue.500' rounded={'md'} p={1}>
					<Work size={18} color={'white'}></Work>
				</Box>
				<Text variant='heading3'>Project Tracker</Text>
			</HStack>
			<Divider></Divider>
		</>
	);
}
