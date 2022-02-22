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
	useToast,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { BsGithub as Github, BsStars } from 'react-icons/bs';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import validator from 'validator';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
	const [email, setEmail] = useState('');
	const [valid, setValid] = useState(true);
	const [loading, setLoading] = useState(false);
	const oauthList = [{ name: 'Github', icon: <Github color='#211F1F' /> }];

	const toast = useToast();

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			if (validator.isEmail(email)) {
				const { error } = await supabase.auth.signIn({ email });
				if (error) throw error;
				setValid(true);
				toast({
					title: 'Check your email',
					description:
						'We sent you an email with a special link to login to your account!',
					status: 'success',
					variant: 'left-accent',
					duration: 20000,
					isClosable: true,
				});
			} else {
				setValid(false);
			}
		} catch (error) {
			setValid(false);
			toast({
				title: 'Internal Error',
				description:
					'We are unable to send you the magic link right now. Please try again later.',
				status: 'error',
				variant: 'left-accent',
				duration: 20000,
				isClosable: true,
			});
		} finally {
			setLoading(false);
		}
	};

	async function oauthLogin(provider) {
		const { user, session, error } = await supabase.auth.signIn({
			provider: provider,
		});
	}

	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<title>WorkDiary Login</title>
			</Head>
			<Container maxW='xl' centerContent>
				<Center height={'100vh'} width={'100vw'}>
					<Stack spacing={6} width='350px'>
						<VStack spacing={2}>
							<Text as='h1' fontSize='2xl' fontWeight='bold'>
								👋 Welcome to Workdiary!
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
						<VStack spacing={3} align='stretch'>
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
