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
				<meta charset='UTF-8' />
				<title>404: Not Found | WorkDiary</title>
			</Head>
			<Container centerContent>
				<Center height={'100vh'} width={'100vw'} backgroundColor={'#fffcf7'}>
					<Stack spacing={4} width='350px' align={'stretch'}>
						<Center>
							<Image
								src='404.png'
								alt='404 Page Not Found'
								htmlHeight={'200px'}
								htmlWidth={'200px'}></Image>
						</Center>
						<VStack spacing={2}>
							<Text as='h1' fontSize='xl' fontWeight='extrabold'>
								👀 Oops, are you lost?
							</Text>
							<Text
								as='p'
								fontSize='md'
								color={'gray.500'}
								fontWeight={'light'}
								align='center'>
								We're sorry, but the page you are looking for has been moved or
								does not exist.
							</Text>
						</VStack>
						<Button
							variant={'solid'}
							colorScheme='purple'
							size={'md'}
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
