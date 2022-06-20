import {
	Button,
	Container,
	Flex,
	useBreakpointValue,
	VStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Show,
	Hide,
	Image,
	Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import {
	HiOutlineBriefcase as Work,
	HiOutlineSparkles as Award,
	HiOutlineSpeakerphone as Speaker,
	HiChevronDown as Down,
} from 'react-icons/hi';
import AccountNav from '../components/general/navbars/AccountNav';

export default function App() {
	return (
		<>
			<Head>
				<title>Home | Workdiary</title>
				<meta name='description' content='Home page for Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, home, app'></meta>
			</Head>
			<AccountNav />
			<Container
				maxWidth={'container.xl'}
				minWidth={'container.xs'}
				marginTop={5}
				marginBottom={10}>
				<Flex gap={4} width='100%' wrap={'wrap'}>
					<VStack
						align={'start'}
						spacing={4}
						width={useBreakpointValue({
							base: '100%',
							sm: '100%',
							md: '30%',
							lg: '22%',
						})}>
						<Show below='md'>
							<Menu isLazy matchWidth>
								<MenuButton
									as={Button}
									rightIcon={<Down />}
									width='100%'
									justifyContent='flex-start'>
									Navigation
								</MenuButton>
								<MenuList>
									<MenuItem
										fontWeight={'semibold'}
										isExternal
										fontSize='sm'
										icon={<Work size={18}></Work>}>
										Project Tracker
									</MenuItem>
									<MenuItem
										fontWeight={'semibold'}
										isExternal
										fontSize='sm'
										icon={<Award size={18}></Award>}>
										Achievement Tracker
									</MenuItem>
									<MenuItem
										fontWeight={'semibold'}
										isExternal
										fontSize='sm'
										icon={<Speaker size={18}></Speaker>}>
										Professional Guidance
									</MenuItem>
								</MenuList>
							</Menu>
						</Show>
						<Hide below='md'>
							<VStack
								width={'100%'}
								borderWidth={'1px'}
								rounded={'md'}
								padding={4}>
								<Button
									leftIcon={<Work size={18}></Work>}
									_hover={{
										color: 'blue.500',
										bgColor: 'blue.50',
										borderWidth: '1px',
										borderColor: 'blue.500',
										_dark: { color: 'blue.50', bgColor: 'blue.800' },
									}}
									size='sm'
									variant={'ghost'}
									width='100%'
									justifyContent='flex-start'>
									Project Tracker
								</Button>
								<Button
									leftIcon={<Award size={18}></Award>}
									_hover={{
										color: 'orange.500',
										bgColor: 'orange.50',
										borderWidth: '1px',
										borderColor: 'orange.500',
										_dark: { color: 'orange.50', bgColor: 'orange.800' },
									}}
									size='sm'
									variant={'ghost'}
									width='100%'
									justifyContent='flex-start'>
									Achievement Tracker
								</Button>
								<Button
									leftIcon={<Speaker size={18}></Speaker>}
									_hover={{
										color: 'green.500',
										bgColor: 'green.50',
										borderWidth: '1px',
										borderColor: 'green.500',
										_dark: { color: 'green.50', bgColor: 'green.800' },
									}}
									size='sm'
									variant={'ghost'}
									width='100%'
									justifyContent='flex-start'>
									Professional Guidance
								</Button>
							</VStack>
						</Hide>
						<VStack
							width={'100%'}
							borderWidth={'1px'}
							rounded={'md'}
							padding={4}>
							<Image
								src='images/work.png'
								alt='Share with friends image'
								htmlHeight={'175px'}
								htmlWidth={'175px'}></Image>
						</VStack>
					</VStack>
					<VStack
						flex='1'
						borderWidth={'1px'}
						rounded={'md'}
						padding={4}></VStack>
				</Flex>
			</Container>
		</>
	);
}
