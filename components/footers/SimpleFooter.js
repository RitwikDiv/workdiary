import {
	Button,
	HStack,
	IconButton,
	Spacer,
	Container,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
	BsDiscord as Discord,
	BsLinkedin as LinkedIn,
	BsListCheck as Terms,
} from 'react-icons/bs';
import {
	MdOutlineCelebration as Started,
	MdOutlinePrivacyTip as Privacy,
} from 'react-icons/md';

export default function SimpleFooter() {
	const linkList = [
		{
			name: 'LinkedIn',
			link: 'https://linkedin.com/company/workdiary',
			icon: <LinkedIn color='#0e76a8' />,
		},
		{
			name: 'Discord',
			link: 'https://discord.gg/HejdvSdA9t',
			icon: <Discord color='#7289DA' />,
		},
	];
	const pagesList = [
		{ name: 'Get Started', path: '/login', icon: <Started></Started> },
		{ name: 'Privacy', path: '/privacy', icon: <Privacy></Privacy> },
		{ name: 'Terms', path: '/terms', icon: <Terms></Terms> },
	];
	const router = useRouter();
	return (
		<Container as='footer' maxWidth={'container.lg'}>
			<HStack
				flexWrap={'wrap'}
				width={'100%'}
				align='center'
				bottom={0}
				spacing={2}
				paddingTop={5}
				paddingBottom={5}>
				{pagesList.map((pageItem) => {
					return (
						<Button
							variant='menu'
							key={pageItem.name}
							onClick={() => router.push(pageItem.path)}
							leftIcon={pageItem.icon}>
							{pageItem.name}
						</Button>
					);
				})}
				<Spacer></Spacer>
				{linkList.map((linkItem) => {
					return (
						<IconButton
							variant='outline'
							size={'md'}
							key={linkItem.name}
							aria-label={`Go to ${linkItem.name} Page`}
							onClick={() => {
								window.open(linkItem.link, '_blank');
							}}
							icon={linkItem.icon}></IconButton>
					);
				})}
			</HStack>
		</Container>
	);
}
