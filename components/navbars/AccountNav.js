import {
	HStack,
	Box,
	Text,
	Spacer,
	Container,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuGroup,
	MenuItem,
	MenuDivider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DarkModeToggle from '../DarkModeToggle';
import {
	CgProfile as Person,
	CgBrowse as Terms,
	CgLogOut as LogOut,
	CgProfile as Settings,
	CgEye as Privacy,
	CgChevronDown as Down,
} from 'react-icons/cg';
import { MdOutlineStickyNote2 as Sticky } from 'react-icons/md';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<Container as='header' maxWidth={'container.xl'}>
			<HStack
				width={'100%'}
				paddingTop={4}
				justifyContent={'space-between'}
				align='center'
				spacing={2}>
				<HStack cursor={'pointer'} onClick={() => router.push('/')}>
					<Box backgroundColor='primary' rounded={'md'} p={1}>
						<Sticky size={20} color={'white'}></Sticky>
					</Box>
					<Text fontSize={'2xl'} fontWeight='extrabold'>
						workdiary
					</Text>
				</HStack>
				<Spacer />
				<DarkModeToggle></DarkModeToggle>
				<Menu>
					<MenuButton
						as={Button}
						variant='outline'
						leftIcon={<Settings size={18}></Settings>}
						rightIcon={<Down size={18}></Down>}>
						Account
					</MenuButton>
					<MenuList>
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								fontSize='sm'
								icon={<Person size={18}></Person>}>
								My Account
							</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								fontSize='sm'
								icon={<Terms size={18}></Terms>}>
								Terms of Service
							</MenuItem>
							<MenuItem
								fontWeight={'semibold'}
								fontSize='sm'
								icon={<Privacy size={18}></Privacy>}>
								Privacy Policy
							</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								fontSize='sm'
								icon={<LogOut size={18}></LogOut>}>
								Sign Out
							</MenuItem>
						</MenuGroup>
					</MenuList>
				</Menu>
			</HStack>
		</Container>
	);
}
