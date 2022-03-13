import { HStack, Image, Spacer, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DarkModeToggle from '../DarkModeToggle';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<Container as='header' maxWidth={'container.lg'}>
			<HStack
				width={'100%'}
				justifyContent={'space-between'}
				align='center'
				spacing={2}>
				<Image
					src='logo.svg'
					color='orange'
					htmlHeight={'100px'}
					onClick={() => router.push('/account')}
					alt='Workdiary Logo'
					htmlWidth='100px'></Image>
				<Spacer />
				<DarkModeToggle></DarkModeToggle>
			</HStack>
		</Container>
	);
}
