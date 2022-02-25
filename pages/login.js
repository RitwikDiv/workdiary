import {
	Button,
	Center,
	Container,
	Divider,
	FormControl,
	FormHelperText,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	VStack,
	Image,
	useToast,
	Link,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import {
	BsGithub as Github,
	BsStars,
	BsLinkedin as LinkedIn,
} from 'react-icons/bs';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { SiNotion as Notion } from 'react-icons/si';
import validator from 'validator';
import { supabase } from '../utils/backend/supabaseClient';
import NextLink from 'next/link';

export default function Login() {
	const [email, setEmail] = useState('');
	const [valid, setValid] = useState(true);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const oauthList = [
		{ name: 'LinkedIn', icon: <LinkedIn color='#0e76a8' /> },
		{ name: 'Github', icon: <Github /> },
		{ name: 'Notion', icon: <Notion /> },
	];

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			if (validator.isEmail(email)) {
				const { error } = await supabase.auth.signIn({ email });
				if (error) throw error;
				setValid(true);
				toast.closeAll();
				toast({
					title: 'Check your email',
					description:
						'We sent you an email with a special link to login to your account.',
					status: 'success',
					variant: 'left-accent',
					position: 'top-right',
					duration: 20000,
					isClosable: true,
				});
			} else {
				setValid(false);
			}
		} catch (error) {
			toast.closeAll();
			toast({
				title: 'Internal Error',
				description: 'Something went wrong. Please try again later.',
				status: 'error',
				variant: 'left-accent',
				position: 'top-right',
				duration: 20000,
				isClosable: true,
			});
		} finally {
			setLoading(false);
		}
	};

	const oauthLogin = async (provider) => {
		try {
			const { error } = await supabase.auth.signIn({
				provider: provider,
			});
			if (error) throw error;
		} catch (error) {
			toast.closeAll();
			toast({
				title: 'Internal Error',
				description: 'Something went wrong. Please try again later.',
				status: 'error',
				variant: 'left-accent',
				position: 'top-right',
				duration: 20000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<Head>
				<title>Login | WorkDiary</title>
				<meta
					name='description'
					content='Login/Get Started with Workdiary.app'></meta>
				<meta
					name='keywords'
					content='Workdiary, Login, Sign up, Get Started'></meta>
			</Head>
			<Container centerContent>
				<Center height={'100vh'} width={'100vw'}>
					<Stack spacing={4} width='350px'>
						<VStack spacing={2}>
							<Image
								src='logo.svg'
								alt='Workdiary Logo'
								htmlHeight={'100px'}
								htmlWidth='100px'></Image>
							<Text variant={'title'}>👋 Welcome to Workdiary</Text>
							<Text variant={'body'}>
								You don&apos;t need a password. It&apos;s safer that way.
							</Text>
						</VStack>
						<VStack spacing={2} align='stretch'>
							<FormControl autoComplete='off'>
								<InputGroup>
									<Input
										autoComplete='email'
										id='email'
										type='email'
										placeholder='Enter your email'
										value={email}
										size='md'
										onChange={(e) => setEmail(e.target.value)}
									/>
									<InputRightElement>
										{valid ? (
											<FiCheckCircle color='green' />
										) : (
											<FiAlertCircle color='red' />
										)}
									</InputRightElement>
								</InputGroup>
								<FormHelperText>
									We&apos;ll never share your email
								</FormHelperText>
							</FormControl>
							<Button
								leftIcon={<BsStars color='orange' />}
								variant={'solid'}
								isLoading={loading}
								loadingText={'Sending ...'}
								onClick={(e) => {
									e.preventDefault();
									handleLogin(email);
								}}>
								Send the magic link
							</Button>
						</VStack>
						<HStack spacing={2}>
							<Divider></Divider>
							<Text variant={'body'}>or</Text>
							<Divider></Divider>
						</HStack>
						<VStack spacing={2} align='stretch'>
							{oauthList.map((oauth) => (
								<Button
									key={oauth.name}
									variant='outline'
									onClick={() => oauthLogin(oauth.name.toLowerCase())}
									leftIcon={oauth.icon}>
									Continue with {oauth.name}
								</Button>
							))}
						</VStack>
						<HStack spacing={2} justifyContent='center'>
							<NextLink href='/privacy' passHref>
								<Link
									fontSize={'md'}
									fontWeight='semibold'
									color='gray.600'
									textDecoration={'underline'}>
									Privacy Policy
								</Link>
							</NextLink>
						</HStack>
					</Stack>
				</Center>
			</Container>
		</>
	);
}

export async function getServerSideProps({ req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (user) {
		return { props: {}, redirect: { destination: '/account' } };
	}
	return { props: {} };
}
