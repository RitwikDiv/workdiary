import { IconButton, Spacer, Container, Stack, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsDiscord as Discord, BsLinkedin as LinkedIn } from 'react-icons/bs';
import NextLink from 'next/link';

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
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Privacy Policy',
			path: '/privacy',
		},
		{ name: 'Terms & Conditions', path: '/terms' },
		{
			name: 'Get Started',
			path: '/login',
		},
	];
	const router = useRouter();

	return (
		<Container
			maxWidth={'container.xl'}
			marginTop={5}
			bottom={0}
			marginBottom={5}>
			<Stack flexWrap={'wrap'} align='center' direction={'row'}>
				<Stack direction={'row'} spacing={3} align='center'>
					{pagesList.map((pageItem) => {
						return (
							<NextLink href={pageItem.path} passHref key={pageItem.name}>
								<Link variant={'footer'}>{pageItem.name}</Link>
							</NextLink>
						);
					})}
				</Stack>
				<Spacer></Spacer>
				<Stack align='center' spacing={2} direction={'row'}>
					{linkList.map((linkItem) => {
						return (
							<IconButton
								variant='outline'
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
