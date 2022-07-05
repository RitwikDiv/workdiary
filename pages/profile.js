import {
	Button,
	ButtonGroup,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	HStack,
	IconButton,
	Input,
	Link,
	Spacer,
	Stack,
	Text,
	Textarea,
	Tooltip,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
	CgAddR as Add,
	CgCopy as Copy,
	CgTrash as Trash,
	CgUndo as Undo,
} from 'react-icons/cg';
import { FiEdit as Edit, FiSave as Save } from 'react-icons/fi';
import LinkAddModal from '../components/account/modals/LinkAddModal';
import AccountNav from '../components/general/navbars/AccountNav';

export default function Profile() {
	const [isEditing, setIsEditing] = useState(false);
	const [changed, setChanged] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [newLink, setNewLink] = useState({});
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [about, setAbout] = useState('');

	useEffect(() => {
		if (newLink.title && newLink.url) {
			setLinks([...links, newLink]);
			setNewLink({});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newLink]);

	const [links, setLinks] = useState([
		{
			id: 1,
			title: 'Figma',
			url: 'www.figma.com',
		},
		{
			id: 2,
			title: 'Github',
			url: 'www.github.com',
		},
		{
			id: 3,
			title: 'LinkedIn',
			url: 'www.linkedin.com/in/ritwikdiv/',
		},
	]);

	return (
		<>
			<Head>
				<title>Profile Settings | Workdiary</title>
				<meta
					name='description'
					content='Privacy Policy for Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, Privacy, Policy'></meta>
			</Head>
			<AccountNav />
			<Container
				maxWidth={'container.xl'}
				minWidth={'container.xs'}
				marginTop={5}
				marginBottom={10}>
				<VStack spacing={4} borderWidth={'1px'} rounded={'md'} padding={4}>
					<Stack
						spacing={4}
						width={'100%'}
						direction={'row'}
						align={'center'}
						justifyContent={'space-around'}>
						<VStack align={'start'} spacing={0}>
							<Text variant='title'>Personal Profile</Text>
						</VStack>
						<Spacer></Spacer>
						<HStack align={'center'} spacing={2}>
							<Button
								size={'sm'}
								hidden={isEditing}
								onClick={() => setIsEditing(true)}
								leftIcon={<Edit size={'15'}></Edit>}>
								{' '}
								Edit
							</Button>
							<Button
								variant={'danger'}
								disabled={false}
								hidden={!isEditing}
								leftIcon={<Undo size={'18'}></Undo>}>
								Discard
							</Button>
							<Button
								variant={'success'}
								disabled={false}
								hidden={!isEditing}
								onClick={() => setIsEditing(false)}
								leftIcon={<Save size={'18'}></Save>}>
								Save
							</Button>
						</HStack>
					</Stack>
					<Divider></Divider>
					<Grid width={'100%'} templateColumns={'repeat(12, 1fr)'} gap={4}>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 4 })}>
							<VStack spacing={2} alignItems={'start'}>
								<Text color={'primary'} variant='heading4'>
									General
								</Text>
								<Text variant='subtitle'>
									Manage the name and email address of your account.
								</Text>
							</VStack>
						</GridItem>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 8 })}>
							<VStack spacing={4} alignItems={'start'}>
								<VStack
									borderWidth={'1px'}
									width={'100%'}
									padding={4}
									gap={4}
									rounded={'md'}>
									<FormControl isRequired>
										<FormLabel
											htmlFor='name'
											fontSize={'sm'}
											fontWeight={'semibold'}>
											Name
										</FormLabel>
										<Input
											disabled={!isEditing}
											_disabled={{ opacity: 0.9, cursor: 'not-allowed' }}
											value={name}
											onChange={(e) => setName(e.target.value)}
											id='name'
											type='text'
										/>
									</FormControl>
									<FormControl isRequired>
										<FormLabel
											htmlFor='email'
											fontSize={'sm'}
											fontWeight={'semibold'}>
											Email address
										</FormLabel>
										<Input
											disabled={!isEditing}
											_disabled={{ opacity: 0.9, cursor: 'not-allowed' }}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											id='email'
											type='text'
										/>
									</FormControl>
								</VStack>
							</VStack>
						</GridItem>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 4 })}>
							<VStack spacing={2} alignItems={'start'}>
								<Text color={'primary'} variant='heading4'>
									Professional Information
								</Text>
								<Text variant='subtitle'>
									Manage sharable professional information about yourself.
								</Text>
							</VStack>
						</GridItem>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 8 })}>
							<VStack spacing={4} alignItems={'start'}>
								<VStack
									borderWidth={'1px'}
									width={'100%'}
									padding={4}
									gap={4}
									rounded={'md'}>
									<FormControl>
										<FormLabel
											htmlFor='about'
											fontSize={'sm'}
											fontWeight={'semibold'}>
											About you
										</FormLabel>
										<Textarea
											disabled={!isEditing}
											_disabled={{ opacity: 0.9, cursor: 'not-allowed' }}
											value={about}
											onChange={(e) => setAbout(e.target.value)}
											id='about'
										/>
									</FormControl>
									<VStack alignItems={'start'} width={'100%'}>
										<Text fontSize={'sm'} fontWeight={'semibold'}>
											Professional Links
										</Text>
										<HStack
											wrap={'wrap'}
											shouldWrapChildren={true}
											spacing={2}
											rowGap={2}>
											<Button
												variant={'add'}
												hidden={!isEditing}
												onClick={onOpen}
												mr={2}
												leftIcon={<Add size={'18'}></Add>}>
												Add a link
											</Button>
											{links.map((value, i) => {
												return (
													<HStack
														borderWidth={1}
														rounded={'md'}
														ml={-2}
														mr={2}
														key={value.id}>
														<Link
															href={'http://' + value.url}
															isExternal
															variant={'accountLink'}
															fontSize={'sm'}
															ml={2}
															padding={1}>
															{value.title}
														</Link>
														<ButtonGroup isAttached>
															<Tooltip
																label='Delete'
																aria-label='copy link tooltip'>
																<IconButton
																	outline={'none'}
																	rounded={'none'}
																	variant='ghost'
																	bgColor={'gray.100'}
																	_dark={{ bgColor: 'gray.700' }}
																	hidden={!isEditing}
																	onClick={() =>
																		setLinks(
																			links.filter((v) => v.id !== value.id)
																		)
																	}
																	icon={<Trash size={16}></Trash>}></IconButton>
															</Tooltip>
															<Tooltip
																label='Copy'
																aria-label='copy link tooltip'>
																<IconButton
																	outline={'none'}
																	rounded={'none'}
																	variant='ghost'
																	bgColor={'gray.100'}
																	_dark={{ bgColor: 'gray.700' }}
																	hidden={isEditing}
																	onClick={() => {
																		navigator.clipboard.writeText(value.url);
																	}}
																	icon={<Copy size={16}></Copy>}></IconButton>
															</Tooltip>
														</ButtonGroup>
													</HStack>
												);
											})}
										</HStack>
									</VStack>
								</VStack>
							</VStack>
						</GridItem>
					</Grid>
				</VStack>
			</Container>
			<LinkAddModal onClose={onClose} isOpen={isOpen} setData={setNewLink} />
		</>
	);
}

// export async function getServerSideProps({ req }) {
// 	const { user } = await supabase.auth.api.getUserByCookie(req);
// 	if (!user) {
// 		return { props: {}, redirect: { destination: '/login' } };
// 	}
// 	return { props: { user } };
// }
