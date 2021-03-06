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

export default function NotFound() {
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
							src='images/404.png'
							alt='404 Page Not Found'
							htmlHeight={'250px'}
							htmlWidth={'250px'}></Image>
						<VStack spacing={2}>
							<Text variant={'title'}>Are you lost?</Text>
							<Text variant={'body'} textAlign='center'>
								We&apos;re sorry, but the page you are looking for has been
								moved or does not exist.
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
