import { Text, HStack, Box, Divider } from '@chakra-ui/react';
import { HiOutlineSpeakerphone as Speaker } from 'react-icons/hi';

export default function ProfGuidance() {
	return (
		<>
			<HStack
				justifyContent={'start'}
				align={'start'}
				width={'100%'}
				spacing={2}>
				<Box backgroundColor='green.500' rounded={'md'} p={1}>
					<Speaker size={18} color={'white'}></Speaker>
				</Box>
				<Text variant='heading3'>Professional Guidance</Text>
			</HStack>
			<Divider></Divider>
		</>
	);
}
