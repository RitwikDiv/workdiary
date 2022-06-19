import {
	Button,
	Container,
	HStack,
	Link,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Spacer,
	Avatar,
	Tooltip,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
	CgBrowse as Terms,
	CgEye as Privacy,
	CgLogOut as LogOut,
	CgMail as Mail,
	CgProfile as Person,
} from 'react-icons/cg';
import { FiSettings as Settings } from 'react-icons/fi';
import { MdHelpOutline as Help } from 'react-icons/md';
import DarkModeToggle from '../navbars/utilities/DarkModeToggle';
import Logo from '../logos/Logo';

export default function SimpleNav() {
	const router = useRouter();
	return (
		<Container as='header' maxWidth={'container.xl'}>
			<HStack width={'100%'} paddingTop={4} align='center' spacing={2}>
				<Logo href='/app'></Logo>
				<Spacer />
				<DarkModeToggle></DarkModeToggle>
				<Menu>
					<Tooltip label='Help' aria-label='help button'>
						<MenuButton
							as={IconButton}
							variant={'ghost'}
							size={'sm'}
							icon={<Help size={20}></Help>}></MenuButton>
					</Tooltip>
					<MenuList>
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								isExternal
								onClick={() =>
									window.open(
										'https://workdiaryapp.notion.site/Workdiary-Terms-Conditions-a71ac0817cb64f0bb1dc7594333efe70',
										'_blank'
									)
								}
								fontSize='sm'
								icon={<Terms size={18}></Terms>}>
								Terms of Service
							</MenuItem>
							<MenuItem
								fontWeight={'semibold'}
								isExternal
								onClick={() =>
									window.open(
										'https://workdiaryapp.notion.site/Workdiary-Privacy-Policy-c5e66fee071f404fb4298a312383e3bb',
										'_blank'
									)
								}
								fontSize='sm'
								icon={<Privacy size={18}></Privacy>}>
								Privacy Policy
							</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								onClick={() =>
									(location.href = 'mailto:support.workdiary@gmail.com')
								}
								fontSize='sm'
								icon={<Mail size={18}></Mail>}>
								Contact Us
							</MenuItem>
						</MenuGroup>
					</MenuList>
				</Menu>
				<Menu>
					<MenuButton
						as={Avatar}
						cursor={'pointer'}
						bg={'primary'}
						size={'sm'}></MenuButton>
					<MenuList>
						<MenuGroup>
							<MenuItem
								fontWeight={'semibold'}
								fontSize='sm'
								onClick={() => router.push('/profile')}
								icon={<Person size={18}></Person>}>
								View Profile
							</MenuItem>
							<MenuItem
								onClick={() => router.push('/account')}
								fontWeight={'semibold'}
								fontSize='sm'
								icon={<Settings size={18}></Settings>}>
								Account Settings
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
