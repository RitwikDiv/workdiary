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
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { BsGithub as Github, BsStars } from 'react-icons/bs';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import validator from 'validator';
import { supabase } from '../utils/backend/supabaseClient';
import { toast as Toast } from '../utils/ui/toast';

export default function Login() {
	const [email, setEmail] = useState('');
	const [valid, setValid] = useState(true);
	const [loading, setLoading] = useState(false);
	const oauthList = [{ name: 'Github', icon: <Github color='#211F1F' /> }];

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			if (validator.isEmail(email)) {
				const { error } = await supabase.auth.signIn({ email });
				if (error) throw error;
				setValid(true);
				Toast({
					title: 'Check your email',
					description:
						'We sent you an email with a special link to login to your account.',
					status: 'success',
				});
			} else {
				setValid(false);
			}
		} catch (error) {
			setValid(false);
			Toast({
				title: 'Internal Error',
				description: 'Something went wrong. Please try again later.',
				status: 'error',
			});
		} finally {
			setLoading(false);
		}
	};

	async function oauthLogin(provider) {
		try {
			const { error } = await supabase.auth.signIn({
				provider: provider,
			});
			if (error) throw error;
		} catch (error) {
			Toast({
				title: 'Internal Error',
				description: 'Something went wrong. Please try again later.',
				status: 'error',
			});
		}
	}

	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<title>WorkDiary Login</title>
			</Head>
			<Container centerContent>
				<Center height={'100vh'} width={'100vw'}>
					<Stack spacing={4} width='350px'>
						<VStack spacing={2}>
							<Text as='h1' fontSize='2xl' fontWeight='bold'>
								👋 Welcome to Workdiary
							</Text>
							<Text
								as='p'
								fontSize='md'
								color={'gray.500'}
								fontWeight={'light'}>
								You don't need a password. It's safer that way.
							</Text>
						</VStack>
						<VStack spacing={2} align='stretch'>
							<FormControl>
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
									<InputRightElement
										children={
											valid ? (
												<FiCheckCircle color='green' />
											) : (
												<FiAlertCircle color='red' />
											)
										}
									/>
								</InputGroup>
								<FormHelperText color={valid ? 'gray.500' : 'red'}>
									{valid
										? "We'll never share your email."
										: 'Please enter a valid email.'}
								</FormHelperText>
							</FormControl>
							<Button
								leftIcon={<BsStars color='orange' />}
								variant={'solid'}
								colorScheme='purple'
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
							<Text fontSize='md' color={'gray.500'}>
								or
							</Text>
							<Divider></Divider>
						</HStack>
						<VStack spacing={2} align='stretch'>
							{oauthList.map((oauth) => (
								<Button
									key={oauth.name}
									variant='outline'
									color={'gray.600'}
									onClick={() => oauthLogin(oauth.name.toLowerCase())}
									leftIcon={oauth.icon}>
									Continue with {oauth.name}
								</Button>
							))}
						</VStack>
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
