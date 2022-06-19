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
import validator from 'validator';
import { supabase } from '../utils/backend/supabaseClient';
import NextLink from 'next/link';
import Logo from '../components/general/logos/Logo';

export default function Login() {
	const [email, setEmail] = useState('');
	const [valid, setValid] = useState(true);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const oauthList = [
		{ name: 'LinkedIn', icon: <LinkedIn color='#0e76a8' /> },
		{ name: 'Github', icon: <Github /> },
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
				<title>Login | Workdiary</title>
				<meta
					name='description'
					content='Login/Get Started with Workdiary.app'></meta>
				<meta
					name='keywords'
					content='Workdiary, Login, Sign up, Get Started'></meta>
			</Head>
			<Container maxWidth={'container.xl'} centerContent>
				<Center height={'100vh'} maxWidth={'container.sm'}>
					<Stack spacing={4} width='350px'>
						<VStack spacing={2}>
							<Logo></Logo>
							<Text variant={'body'}>
								You don&apos;t need a password. It&apos;s safer that way.
							</Text>
						</VStack>
						<VStack spacing={2} align='stretch'>
							<FormControl autoComplete='off'>
								<InputGroup>
									<Input
										isInvalid={!valid}
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
									We&apos;ll never share your personal information
								</FormHelperText>
							</FormControl>
							<Button
								leftIcon={<BsStars color='orange' />}
								variant={'solid'}
								size='md'
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
									size='md'
									onClick={() => oauthLogin(oauth.name.toLowerCase())}
									leftIcon={oauth.icon}>
									Continue with {oauth.name}
								</Button>
							))}
						</VStack>
						<VStack spacing={2} justifyContent='center'>
							<HStack spacing={2} justifyContent='center'>
								<NextLink
									href='https://workdiaryapp.notion.site/Workdiary-Privacy-Policy-c5e66fee071f404fb4298a312383e3bb'
									passHref>
									<Link isExternal size='sm'>
										Privacy Policy
									</Link>
								</NextLink>
								<Text>&bull;</Text>
								<NextLink
									href='https://workdiaryapp.notion.site/Workdiary-Terms-Conditions-a71ac0817cb64f0bb1dc7594333efe70'
									passHref>
									<Link isExternal size='sm'>
										Terms & Conditions
									</Link>
								</NextLink>
							</HStack>
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
