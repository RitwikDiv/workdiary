import {
	Container,
	Flex,
	useBreakpointValue,
	VStack,
	Show,
	Hide,
} from '@chakra-ui/react';
import Head from 'next/head';
import AccountNav from '../components/general/navbars/AccountNav';
import ExpandedSideNav from '../components/general/sidebar/ExpandedSideNav';
import MenuSideNav from '../components/general/sidebar/MenuSideNav';
import ShareBar from '../components/general/sidebar/ShareBar';
import AchievementTracker from '../components/main/AchievementTracker';
import ProfGuidance from '../components/main/ProfGuidance';
import ProjectTracker from '../components/main/ProjectTracker';
import Error from '../components/main/Error';

import { useState } from 'react';

export default function Home() {
	const [menuOption, setMenuOption] = useState('project');
	const renderMain = (menuOption) => {
		switch (menuOption) {
			case 'project':
				return <ProjectTracker></ProjectTracker>;
			case 'achievement':
				return <AchievementTracker></AchievementTracker>;
			case 'guidance':
				return <ProfGuidance></ProfGuidance>;
			default:
				return <Error></Error>;
		}
	};
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
							<MenuSideNav setOption={setMenuOption}></MenuSideNav>
						</Show>
						<Hide below='md'>
							<ExpandedSideNav setOption={setMenuOption}></ExpandedSideNav>
						</Hide>
						<ShareBar></ShareBar>
					</VStack>
					<VStack
						flex='1'
						borderWidth={'1px'}
						rounded={'md'}
						height={'85vh'}
						padding={4}
						spacing={4}>
						{renderMain(menuOption)}
					</VStack>
				</Flex>
			</Container>
		</>
	);
}
