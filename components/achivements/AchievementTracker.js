import {
	Text,
	HStack,
	Box,
	Divider,
	Button,
	VStack,
	Stack,
	Spacer,
	Menu,
	MenuItem,
	MenuButton,
	MenuList,
	CheckboxGroup,
	Checkbox,
	Grid,
	useBreakpointValue,
} from '@chakra-ui/react';
import {
	HiOutlineSparkles as Award,
	HiChevronDown as Down,
} from 'react-icons/hi';
import { CgAddR as Plus } from 'react-icons/cg';
import { useState } from 'react';
import EmptyCondition from './subcomponents/EmptyCondition';
import AchievementItem from './subcomponents/AchievementItem';

export default function AchievementTracker() {
	const [achievements, setAchievements] = useState([
		{
			id: 1,
			name: 'First Achievement',
			description:
				'You have made your first achievement! This is a great start and will help you to get more out of your journey.',
			type: 'Award',
			date: '2020-01-01',
		},
		{
			id: 2,
			name: 'Second Achievement',
			description: 'You have made your second achievement!',
			type: 'Scholarship',
			date: '2020-03-01',
		},
		{
			id: 3,
			name: 'Third Achievement',
			description: 'You have made your third achievement!',
			type: 'Compliment',
			date: '2020-07-01',
		},
		{
			id: 4,
			name: 'Fourth Achievement',
			description: 'You have made your fourth achievement!',
			type: 'Award',
			date: '2020-09-01',
		},
		{
			id: 5,
			name: 'Fifth Achievement',
			description: 'You have made your fifth achievement!',
			type: 'Award',
			date: '2020-11-01',
		},
	]);

	return (
		<>
			<HStack
				justifyContent={'start'}
				align={'start'}
				width={'100%'}
				spacing={2}>
				<Box backgroundColor='orange.500' rounded={'md'} p={1}>
					<Award size={18} color={'white'}></Award>
				</Box>
				<Text variant='heading3'>Achievement Tracker</Text>
			</HStack>
			<Divider></Divider>
			<VStack spacing={4} width={'100%'}>
				<Stack
					spacing={4}
					width={'100%'}
					direction={'row'}
					align={'center'}
					justifyContent={'space-around'}>
					<Menu>
						<MenuButton as={Button} rightIcon={<Down size={18} />}>
							Filter
						</MenuButton>
						<MenuList>
							<MenuItem
								as={CheckboxGroup}
								colorScheme={'orange'}
								justifyContent={'start'}
								closeOnSelect={false}>
								<VStack align={'start'} ml={4}>
									<Checkbox value='award'>Award</Checkbox>
									<Checkbox value='scholarship'>Scholarship</Checkbox>
									<Checkbox value='compliment'>Compliment</Checkbox>
								</VStack>
							</MenuItem>
						</MenuList>
					</Menu>
					<Spacer></Spacer>
					<Button leftIcon={<Plus size={18}></Plus>} variant={'addAchievement'}>
						Create
					</Button>
				</Stack>
				{achievements.length === 0 ? (
					<EmptyCondition></EmptyCondition>
				) : (
					<Grid
						gap={0}
						width={useBreakpointValue({ base: '100%', lg: '80%' })}
						align={'start'}
						templateColumns='repeat(12, 1fr)'>
						{achievements.map((achievement) => {
							return (
								<AchievementItem
									key={achievement.id}
									{...achievement}></AchievementItem>
							);
						})}
					</Grid>
				)}
			</VStack>
		</>
	);
}
