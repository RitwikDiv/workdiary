import {
	Button,
	Center,
	Container,
	Text,
	VStack,
	Image,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiChevronLeft as LeftIcon } from 'react-icons/fi';

export default function ServerDown() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>404: Not Found | Workdiary</title>
				<meta
					name='description'
					content='404 - Page Not Found Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, 404, page not found'></meta>
			</Head>
			<Container maxWidth={'container.xl'} centerContent>
				<Center height={'100vh'}>
					<VStack spacing={4} width='350px'>
						<Image
							src='images/500.png'
							alt='Internal Server Error'
							htmlHeight={'250px'}
							htmlWidth={'250px'}></Image>
						<VStack spacing={2}>
							<Text variant={'title'}>We f****d up!</Text>
							<Text variant={'body'} textAlign='center'>
								Oops, an error has occurred on our end and we are trying to fix
								it as soon as we can.
							</Text>
						</VStack>
						<Button
							variant={'outline'}
							leftIcon={<LeftIcon />}
							onClick={() => {
								router.push('/');
							}}>
							Go back home
						</Button>
					</VStack>
				</Center>
			</Container>
		</>
	);
}
