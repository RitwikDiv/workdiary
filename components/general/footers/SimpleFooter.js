import {
	Container,
	IconButton,
	Link,
	Spacer,
	Stack,
	useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsDiscord as Discord, BsLinkedin as LinkedIn } from 'react-icons/bs';

export default function SimpleFooter() {
	const linkList = [
		{
			name: 'LinkedIn',
			link: 'https://linkedin.com/company/workdiary',
			icon: <LinkedIn size={18} color='#0e76a8' />,
		},
		{
			name: 'Discord',
			link: 'https://discord.gg/HejdvSdA9t',
			icon: <Discord size={18} color='#7289DA' />,
		},
	];
	const pagesList = [
		{
			name: 'Get Started',
			path: '/login',
		},
		{
			name: 'Privacy Policy',
			path: 'https://workdiaryapp.notion.site/Workdiary-Privacy-Policy-c5e66fee071f404fb4298a312383e3bb',
		},
		{
			name: 'Terms & Conditions',
			path: 'https://workdiaryapp.notion.site/Workdiary-Terms-Conditions-a71ac0817cb64f0bb1dc7594333efe70',
		},
	];
	const direction = useBreakpointValue({
		base: 'column',
		md: 'row',
	});
	return (
		<Container
			maxWidth={'container.xl'}
			marginTop={5}
			bottom={0}
			marginBottom={5}>
			<Stack flexWrap={'wrap'} align='center' direction={direction}>
				<Stack direction={'row'} spacing={3} align='center'>
					{pagesList.map((pageItem) => {
						return (
							<NextLink href={pageItem.path} passHref key={pageItem.name}>
								<Link isExternal variant={'footer'}>
									{pageItem.name}
								</Link>
							</NextLink>
						);
					})}
				</Stack>
				<Spacer></Spacer>
				<Stack align='center' spacing={2} direction={'row'}>
					{linkList.map((linkItem) => {
						return (
							<IconButton
								variant='ghost'
								size={'sm'}
								key={linkItem.name}
								aria-label={`Go to ${linkItem.name} Page`}
								onClick={() => {
									window.open(linkItem.link, '_blank');
								}}
								icon={linkItem.icon}></IconButton>
						);
					})}
				</Stack>
			</Stack>
		</Container>
	);
}
