import { HStack, Spacer, Container, Button, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DarkModeToggle from '../DarkModeToggle';
import { CgLogIn as Login } from 'react-icons/cg';
import { MdOutlineStickyNote2 as Sticky } from 'react-icons/md';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<Container as='header' maxWidth={'container.xl'}>
			<HStack
				paddingTop={4}
				width={'100%'}
				justifyContent={'space-between'}
				align='center'
				spacing={2}>
				<HStack cursor={'pointer'} onClick={() => router.push('/')}>
					<Box backgroundColor='primary' rounded={'md'} p={1}>
						<Sticky size={20} color={'white'}></Sticky>
					</Box>
					<Text fontSize={'2xl'} fontWeight='extrabold'>
						workdiary
					</Text>
				</HStack>
				<Spacer />
				<DarkModeToggle></DarkModeToggle>
				<Button
					rightIcon={<Login size={18} />}
					variant={'outline'}
					onClick={() => router.push('/login')}>
					Sign In
				</Button>
			</HStack>
		</Container>
	);
}
