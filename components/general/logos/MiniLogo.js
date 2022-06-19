import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdOutlineStickyNote2 as Sticky } from 'react-icons/md';

export default function Logo({ href = '/' }) {
	const router = useRouter();
	return (
		<Box
			cursor={'pointer'}
			onClick={() => router.push(href)}
			backgroundColor='primary'
			rounded={'md'}
			p={1}>
			<Sticky size={20} color={'white'}></Sticky>
		</Box>
	);
}
