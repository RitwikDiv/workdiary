import { Box, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdOutlineStickyNote2 as Sticky } from 'react-icons/md';

export default function Logo({ href = '/' }) {
	const router = useRouter();
	return (
		<HStack cursor={'pointer'} onClick={() => router.push(href)}>
			<Box backgroundColor='primary' rounded={'md'} p={1}>
				<Sticky size={20} color={'white'}></Sticky>
			</Box>
			<Text fontSize={'2xl'} fontWeight='extrabold'>
				workdiary
			</Text>
		</HStack>
	);
}
