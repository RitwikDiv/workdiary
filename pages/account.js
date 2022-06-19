import {
	Button,
	Container,
	Divider,
	Grid,
	GridItem,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { CgTrash as Trash } from 'react-icons/cg';
import AccountNav from '../components/general/navbars/AccountNav';

export default function Account() {
	return (
		<>
			<Head>
				<title>Account Settings | Workdiary</title>
				<meta
					name='description'
					content='Account settings for Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, account, settings'></meta>
			</Head>
			<AccountNav />
			<Container
				borderWidth={'1px'}
				rounded={'md'}
				padding={4}
				width={'98%'}
				maxWidth={'container.xl'}
				minWidth={'container.xs'}
				marginTop={10}
				marginBottom={10}>
				<VStack spacing={4}>
					<VStack
						justifyContent={'start'}
						align={'start'}
						width={'100%'}
						spacing={0}>
						<Text variant='title'>Account Settings</Text>
					</VStack>
					<Divider></Divider>
					<Grid width={'100%'} templateColumns={'repeat(12, 1fr)'} gap={4}>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 4 })}>
							<VStack spacing={1} alignItems={'start'}>
								<Text variant='heading4' color={'primary'}>
									Manage your account
								</Text>
								<Text variant='subtitle'>
									Decide what you want to do with your account
								</Text>
							</VStack>
						</GridItem>
						<GridItem colSpan={useBreakpointValue({ base: 12, sm: 12, md: 8 })}>
							<VStack spacing={4} alignItems={'start'}>
								<VStack
									borderWidth={'1px'}
									width={'100%'}
									align={'start'}
									spacing={4}
									padding={4}
									rounded={'md'}>
									<Button
										variant={'danger'}
										leftIcon={<Trash size={'18'}></Trash>}>
										Delete my account
									</Button>
									<Text
										fontSize={'sm'}
										fontWeight={'semibold'}
										color={'textTeritiary'}>
										* Click this button to delete your Workdiary account and
										erase all of your personal data.{' '}
										<Text
											as='span'
											color={'textPrimary'}
											textDecoration='underline'>
											Once completed this action cannot be undone.
										</Text>
									</Text>
								</VStack>
							</VStack>
						</GridItem>
					</Grid>
				</VStack>
			</Container>
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
