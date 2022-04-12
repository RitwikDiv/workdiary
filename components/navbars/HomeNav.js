import {
	HStack,
	Image,
	Spacer,
	Container,
	Button,
	Heading,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DarkModeToggle from '../DarkModeToggle';
import { RiRocket2Fill as Party } from 'react-icons/ri';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<Container as='header' maxWidth={'container.xl'}>
			<HStack
				width={'100%'}
				justifyContent={'space-between'}
				align='center'
				spacing={2}>
				<Image
					src='logo.svg'
					color='orange'
					htmlHeight={'100px'}
					htmlWidth={'100px'}
					onClick={() => router.push('/')}
					alt='Workdiary Logo'></Image>
				<Spacer />
				<DarkModeToggle></DarkModeToggle>
				<Button
					leftIcon={<Party />}
					variant={'solid'}
					onClick={() => router.push('/login')}>
					Get Started
				</Button>
			</HStack>
		</Container>
	);
}
