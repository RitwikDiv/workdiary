import { Button, Container, HStack, Spacer, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CgLogIn as Login } from 'react-icons/cg';
import DarkModeToggle from '../navbars/utilities/DarkModeToggle';
import Logo from '../logos/Logo';

export default function HomeNav() {
	const router = useRouter();
	return (
		<Box borderBottomWidth={'1px'}>
			<Container
				marginTop={4}
				marginBottom={4}
				as='header'
				maxWidth={'container.xl'}>
				<HStack
					width={'100%'}
					justifyContent={'space-between'}
					align='center'
					spacing={2}>
					<Logo></Logo>
					<Spacer />
					<DarkModeToggle></DarkModeToggle>
					<Button
						rightIcon={<Login size={18} />}
						variant={'outline'}
						size={'md'}
						onClick={() => router.push('/login')}>
						Sign In
					</Button>
				</HStack>
			</Container>
		</Box>
	);
}
