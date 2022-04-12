import Head from 'next/head';
import HomeNav from '../components/navbars/HomeNav';
import {
	Container,
	Text,
	VStack,
	Image,
	Button,
	Divider,
	Box,
	Spacer,
} from '@chakra-ui/react';
import SimpleFooter from '../components/footers/SimpleFooter';
import { BsStars as Party } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>WorkDiary Home</title>
				<meta name='description' content='Track your work properly' />
				<meta
					name='description'
					content='Free to use app to keep track of your work life and to map your career trajectory'></meta>
				<meta
					name='keywords'
					content='track work, professional growth, work skills, work logging, work diary,career mapping, resume generation'></meta>
			</Head>

			<main>
				<HomeNav></HomeNav>
				<Container
					maxWidth={'container.xl'}
					centerContent
					marginTop={20}
					marginBottom={20}>
					<VStack spacing={20}>
						<VStack maxWidth={'container.lg'} align={'center'} spacing={4}>
							<Image
								src='images/home.png'
								alt='Home Image'
								htmlHeight={'225px'}
								htmlWidth={'225px'}></Image>
							<Text
								variant='body'
								fontSize={'xl'}
								fontWeight={'semibold'}
								color={'textSecondary'}
								textAlign={'center'}>
								<Text as='span' color='purple.500'>
									WorkDiary
								</Text>{' '}
								is a free web application for professionals to{' '}
								<Text as='span' color='textTeritiary'>
									✔️ <u>track their projects</u>
								</Text>
								,{' '}
								<Text as='span' color='textTeritiary'>
									📈<u> monitor valuable metrics</u>
								</Text>
								, and{' '}
								<Text as='span' color='textTeritiary'>
									📝<u> receive the proper feedback</u>
								</Text>{' '}
								to succeed in the corporate world.
							</Text>
							<Button
								leftIcon={<Party color='orange' />}
								variant={'outline'}
								onClick={(e) => {
									router.push('/login');
								}}>
								Get started for free!
							</Button>
						</VStack>
						<Divider></Divider>
						<VStack
							maxWidth={'container.md'}
							align={'center'}
							spacing={4}
							marginBottom={20}>
							<Text fontSize='xs' color='primary' fontWeight={'extrabold'}>
								FEATURES
							</Text>
							<Text
								variant={'title'}
								fontSize='2xl'
								color={'textSecondary'}
								width={400}
								align={'center'}>
								All the features you need to get ahead in your role!
							</Text>
						</VStack>
						<Divider></Divider>
						<VStack
							maxWidth={'container.md'}
							align={'center'}
							spacing={4}
							marginBottom={20}>
							<Text fontSize='xs' color='primary' fontWeight={'extrabold'}>
								FAQ
							</Text>
							<Text
								variant={'title'}
								fontSize='2xl'
								color={'textSecondary'}
								width={400}
								align={'center'}>
								Still got any more questions?
							</Text>
						</VStack>
					</VStack>
				</Container>
				<SimpleFooter></SimpleFooter>
			</main>
		</div>
	);
}
