import {
	Container,
	Text,
	HStack,
	VStack,
	Tab,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
} from '@chakra-ui/react';
import Head from 'next/head';
import AccountNav from '../components/navbars/AccountNav';
import { CgProfile as Person } from 'react-icons/cg';

export default function Account() {
	return (
		<>
			<Head>
				<title>Account Preferences</title>
				<meta
					name='description'
					content='Privacy Policy for Workdiary.app'></meta>
				<meta name='keywords' content='Workdiary, Privacy, Policy'></meta>
			</Head>
			<AccountNav />
			<Container
				borderWidth={'1px'}
				rounded={'md'}
				padding={4}
				maxWidth={'container.xl'}
				minWidth={'container.xs'}
				marginTop={10}
				marginBottom={10}>
				<VStack align='start' spacing={4}>
					<HStack>
						<Person size={30}></Person>
						<Text variant='title'>Account Preferences</Text>
					</HStack>
					<Tabs size='md' variant='enclosed'>
						<TabList>
							<Tab>One</Tab>
							<Tab>Two</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<p>one!</p>
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
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
