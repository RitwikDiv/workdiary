import {
	Button,
	Center,
	Container,
	Text,
	VStack,
	Image,
	Stack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NotFound() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>404: Not Found | WorkDiary</title>
				<meta
					name='description'
					content='404 - Page Not Found Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, 404, page not found'></meta>
			</Head>
			<Container centerContent>
				<Center height={'100vh'} width={'100vw'}>
					<Stack spacing={4} width='350px' align={'stretch'}>
						<Center>
							<Image
								src='404.png'
								alt='404 Page Not Found'
								htmlHeight={'200px'}
								htmlWidth={'200px'}></Image>
						</Center>
						<VStack spacing={2}>
							<Text variant={'title'}>🔍 Oops, are you lost?</Text>
							<Text variant={'body'} textAlign='center'>
								We&apos;re sorry, but the page you are looking for has been
								moved or does not exist.
							</Text>
						</VStack>
						<Button
							variant={'solid'}
							onClick={() => {
								router.push('/account');
							}}>
							Go back home
						</Button>
					</Stack>
				</Center>
			</Container>
		</>
	);
}
