import { Button, HStack, Image, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiChevronLeft as LeftIcon } from 'react-icons/fi';
import DarkModeToggle from '../DarkModeToggle';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<HStack
			width={'100%'}
			justifyContent={'space-between'}
			align='center'
			spacing={2}>
			<Image
				src='logo.svg'
				color='orange'
				htmlHeight={'100px'}
				alt='Workdiary Logo'
				htmlWidth='100px'></Image>
			<Spacer />
			<DarkModeToggle></DarkModeToggle>
			<Button
				variant='outline'
				onClick={() => router.push('/account')}
				leftIcon={<LeftIcon />}>
				Go back home
			</Button>
		</HStack>
	);
}
